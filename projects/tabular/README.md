# Tabular prediction

Predict synthetic future customer spending from historical purchases. Read [train.py](train.py) for the generator, SQLite query, preprocessing, model comparison, and artifact round trip.

## Run

```bash
uv run --frozen --extra ml python projects/tabular/train.py
```

The default run uses 800 customers and seed 42. Change `--customers`, `--seed`, or `--output-dir` when you run an experiment. The generator and data are local; you need no dataset download or API key.

## Follow the experiment

1. Generate customer ages, segments, transactions, and future spending. Keep the target separate from features.
2. Use a SQLite left join to retain customers without purchases. Count and sum only transactions from days -30 through -1; exclude day 0 and future events.
3. Split customers into 600 training rows and 200 held-out rows.
4. Fit numeric median imputation and scaling, plus categorical one-hot encoding, inside each training cross-validation fold.
5. Compare Ridge regression with histogram gradient boosting using five-fold MAE. Select the model from training CV, not held-out scores.
6. Compare the selected model with a training-mean baseline on held-out rows. Inspect the five largest absolute errors.
7. Save `model.joblib`, reload the pipeline, and require identical held-out predictions.

The default seeded CPU smoke selected Ridge. Held-out MAE was **12.45**, compared with **56.18** for the mean baseline. Inspect your generated `metrics.json` for exact scores, dataset hash, split counts, CV results, errors, and package versions.

## Use the saved pipeline

Run this from the repository root after training:

```python
import joblib
import numpy as np

artifact = joblib.load('.private/project-runs/tabular/model.joblib')
# Columns: age, past_order_count, past_spend, segment.
new_customer = np.array([[35, 2, 120.0, 'returning']], dtype=object)
prediction = artifact['pipeline'].predict(new_customer)
print(prediction)
```

Load only the artifact you created. An unseen category uses the fitted encoder's unknown-category handling; it does not refit preprocessing.

## Limits

The synthetic relationships make this a controlled experiment. They do not establish real customer behavior. The split treats customers as independent entities. Use time-aware or group-aware evaluation when your real data requires it. Do not add future purchases, target-derived features, or held-out preprocessing statistics to training.

[Projects](../README.md) · [SQL practice](../../16_sql/README.md)
