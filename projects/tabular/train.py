"""Generate original synthetic data, prepare SQL features, and evaluate a saved model."""

import argparse
import hashlib
import sqlite3
import sys
from contextlib import closing
from pathlib import Path

import joblib
import numpy as np
from numpy.typing import NDArray
from sklearn.compose import ColumnTransformer
from sklearn.dummy import DummyRegressor
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.impute import SimpleImputer
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_absolute_error, root_mean_squared_error
from sklearn.model_selection import KFold, cross_val_score, train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from threadpoolctl import threadpool_limits

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from projects.common import output_directory, package_versions, publish_result

FEATURES = ['age', 'past_order_count', 'past_spend', 'segment']
FEATURE_QUERY = """
SELECT c.id, c.age, COUNT(t.id) AS past_order_count,
       COALESCE(SUM(t.amount), 0) AS past_spend, c.segment, c.future_spend
FROM customers AS c
LEFT JOIN transactions AS t ON t.customer_id = c.id AND t.day >= -30 AND t.day < 0
GROUP BY c.id, c.age, c.segment, c.future_spend
ORDER BY c.id
"""


def prepare_data(customers: int, seed: int) -> tuple[NDArray[np.float64], NDArray[np.float64], NDArray[np.int64]]:
    if customers < 100:
        raise ValueError('Use at least 100 synthetic customers for the train/CV/test split')
    random = np.random.default_rng(seed)
    with closing(sqlite3.connect(':memory:')) as database:
        database.executescript('''
            CREATE TABLE customers(id INTEGER PRIMARY KEY, age REAL, segment INTEGER, future_spend REAL);
            CREATE TABLE transactions(id INTEGER PRIMARY KEY, customer_id INTEGER, day INTEGER, amount REAL);
        ''')
        transaction_id = 0
        for customer_id in range(customers):
            age, segment = int(random.integers(18, 75)), int(random.integers(0, 3))
            past_spend = 0.0
            for _ in range(int(random.poisson(3 + segment))):
                day, amount = -int(random.integers(1, 46)), float(random.gamma(2, 20))
                if day >= -30:
                    past_spend += amount
                database.execute('INSERT INTO transactions VALUES(?,?,?,?)', (transaction_id, customer_id, day, amount))
                transaction_id += 1
            future_spend = max(0.0, 0.8 * past_spend + 20 * segment + 0.4 * age + float(random.normal(0, 15)))
            observed_age = None if random.random() < 0.05 else age
            database.execute('INSERT INTO customers VALUES(?,?,?,?)', (customer_id, observed_age, segment, future_spend))
        rows = database.execute(FEATURE_QUERY).fetchall()
    identifiers = np.asarray([row[0] for row in rows], dtype=np.int64)
    features = np.asarray([row[1:5] for row in rows], dtype=np.float64)
    labels = np.asarray([row[5] for row in rows], dtype=np.float64)
    return features, labels, identifiers


def preprocessing() -> ColumnTransformer:
    numeric = Pipeline([('impute', SimpleImputer(strategy='median')), ('scale', StandardScaler())])
    return ColumnTransformer([
        ('numeric', numeric, [0, 1, 2]),
        ('segment', OneHotEncoder(handle_unknown='ignore', sparse_output=False), [3]),
    ])


def run(customers: int, seed: int, requested_output: str | None = None) -> dict:
    features, labels, identifiers = prepare_data(customers, seed)
    train, test = train_test_split(np.arange(customers), test_size=0.25, random_state=seed)
    candidates = {
        'ridge': Pipeline([('features', preprocessing()), ('model', Ridge(alpha=1.0))]),
        'hist_gradient_boosting': Pipeline([('features', preprocessing()), ('model', HistGradientBoostingRegressor(max_iter=80, max_depth=4, random_state=seed))]),
    }
    cross_validation = KFold(n_splits=5, shuffle=True, random_state=seed)
    scores = {}
    with threadpool_limits(limits=1):
        for name, candidate in candidates.items():
            fold_mae = -cross_val_score(candidate, features[train], labels[train],
                                        cv=cross_validation, scoring='neg_mean_absolute_error', n_jobs=1)
            scores[name] = {'mean_mae': float(fold_mae.mean()), 'fold_mae': fold_mae.tolist()}
        selected = min(scores, key=lambda name: (scores[name]['mean_mae'], name))
        model = candidates[selected].fit(features[train], labels[train])
        prediction = model.predict(features[test])
        baseline = DummyRegressor(strategy='mean').fit(features[train], labels[train]).predict(features[test])
    directory = output_directory('tabular', requested_output)
    artifact = directory / 'model.joblib'
    joblib.dump({'pipeline': model, 'features': FEATURES, 'seed': seed}, artifact)
    reloaded = joblib.load(artifact)
    np.testing.assert_array_equal(prediction, reloaded['pipeline'].predict(features[test]))
    absolute_error = np.abs(labels[test] - prediction)
    worst = np.argsort(-absolute_error, kind='stable')[:5]
    result = {
        'project': 'tabular', 'seed': seed, 'data_source': 'Original MIT-licensed synthetic customer and transaction generator',
        'dataset_sha256': hashlib.sha256(features.tobytes() + labels.tobytes()).hexdigest(),
        'features': FEATURES, 'train_rows': len(train), 'test_rows': len(test),
        'cross_validation': scores, 'selected_model': selected,
        'heldout_mae': float(mean_absolute_error(labels[test], prediction)),
        'heldout_rmse': float(root_mean_squared_error(labels[test], prediction)),
        'baseline_mae': float(mean_absolute_error(labels[test], baseline)),
        'reload_predictions_identical': True,
        'worst_errors': [{'synthetic_id': int(identifiers[test[position]]), 'actual': float(labels[test[position]]),
                          'predicted': float(prediction[position]), 'absolute_error': float(absolute_error[position])} for position in worst],
        'versions': package_versions('numpy', 'scikit-learn', 'joblib'),
        'limitations': ['Synthetic relationships do not establish real-world customer behavior.',
                        'Model selection uses training CV only; the held-out set is reserved for final evaluation.'],
    }
    publish_result(directory, result)
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--customers', type=int, default=800)
    parser.add_argument('--seed', type=int, default=42)
    parser.add_argument('--output-dir')
    args = parser.parse_args()
    run(args.customers, args.seed, args.output_dir)


if __name__ == '__main__':
    main()
