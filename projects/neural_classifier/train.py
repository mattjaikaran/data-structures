"""Train a deterministic CPU classifier with separate validation and test sets."""

import argparse
import copy
import sys
from pathlib import Path

import numpy as np
import torch
from sklearn.datasets import make_classification
from sklearn.dummy import DummyClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, f1_score, roc_auc_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from torch import nn

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from projects.common import output_directory, package_versions, publish_result


def network(features: int) -> nn.Sequential:
    return nn.Sequential(nn.Linear(features, 32), nn.ReLU(), nn.Linear(32, 16), nn.ReLU(), nn.Linear(16, 2))


def prepare_data(samples: int, seed: int) -> dict:
    if samples < 100:
        raise ValueError('Use at least 100 samples for stratified train/validation/test splits')
    features, labels = make_classification(n_samples=samples, n_features=8, n_informative=6,
                                           n_redundant=0, n_clusters_per_class=1, class_sep=1.5,
                                           flip_y=0.025, random_state=seed)
    train_validation, test = train_test_split(np.arange(samples), test_size=0.2, stratify=labels, random_state=seed)
    train, validation = train_test_split(train_validation, test_size=0.25,
                                         stratify=labels[train_validation], random_state=seed)
    scaler = StandardScaler().fit(features[train])
    return {'features': features, 'labels': labels, 'scaler': scaler,
            'train': train, 'validation': validation, 'test': test,
            'x_train': torch.tensor(scaler.transform(features[train]), dtype=torch.float32),
            'y_train': torch.tensor(labels[train], dtype=torch.long),
            'x_validation': torch.tensor(scaler.transform(features[validation]), dtype=torch.float32),
            'y_validation': torch.tensor(labels[validation], dtype=torch.long),
            'x_test': torch.tensor(scaler.transform(features[test]), dtype=torch.float32)}


def fit(data: dict, seed: int, epochs: int) -> tuple[nn.Sequential, dict]:
    if epochs < 1:
        raise ValueError('Epochs must be positive')
    torch.manual_seed(seed)
    model = network(data['x_train'].shape[1])
    optimizer = torch.optim.Adam(model.parameters(), lr=0.01)
    loss_function = nn.CrossEntropyLoss()
    generator = torch.Generator().manual_seed(seed)
    best_loss, best_epoch, best_state = float('inf'), 0, None
    history = []
    for epoch in range(1, epochs + 1):
        model.train()
        indices = torch.randperm(len(data['x_train']), generator=generator)
        loss_sum = 0.0
        for start in range(0, len(indices), 64):
            batch = indices[start:start + 64]
            optimizer.zero_grad(set_to_none=True)
            loss = loss_function(model(data['x_train'][batch]), data['y_train'][batch])
            loss.backward()
            optimizer.step()
            loss_sum += float(loss.item()) * len(batch)
        model.eval()
        with torch.no_grad():
            validation_loss = float(loss_function(model(data['x_validation']), data['y_validation']).item())
        history.append({'epoch': epoch, 'train_loss': loss_sum / len(indices), 'validation_loss': validation_loss})
        if validation_loss < best_loss:
            best_loss, best_epoch = validation_loss, epoch
            best_state = copy.deepcopy(model.state_dict())
    model.load_state_dict(best_state)
    model.eval()
    return model, {'selected_epoch': best_epoch, 'validation_loss': best_loss, 'history': history}


def load_checkpoint(path: Path) -> tuple[nn.Sequential, dict]:
    checkpoint = torch.load(path, map_location='cpu', weights_only=True)
    model = network(checkpoint['features'])
    model.load_state_dict(checkpoint['state'])
    model.eval()
    return model, checkpoint


def run(samples: int, seed: int, epochs: int, requested_output: str | None = None) -> dict:
    torch.set_num_threads(1)
    torch.use_deterministic_algorithms(True)
    data = prepare_data(samples, seed)
    model, training = fit(data, seed, epochs)
    with torch.no_grad():
        logits = model(data['x_test'])
        probabilities = torch.softmax(logits, dim=1)[:, 1].numpy()
        predicted = logits.argmax(dim=1).numpy()
    actual = data['labels'][data['test']]
    baseline = DummyClassifier(strategy='most_frequent').fit(data['features'][data['train']], data['labels'][data['train']])
    directory = output_directory('neural_classifier', requested_output)
    artifact = directory / 'checkpoint.pt'
    torch.save({'state': model.state_dict(), 'features': data['x_train'].shape[1],
                'mean': torch.tensor(data['scaler'].mean_), 'scale': torch.tensor(data['scaler'].scale_),
                'seed': seed, 'selected_epoch': training['selected_epoch']}, artifact)
    restored, checkpoint = load_checkpoint(artifact)
    reloaded_features = ((data['features'][data['test']] - checkpoint['mean'].numpy()) / checkpoint['scale'].numpy()).astype(np.float32)
    with torch.no_grad():
        restored_logits = restored(torch.from_numpy(reloaded_features))
    if not torch.equal(logits, restored_logits):
        raise RuntimeError('Reloaded model and preprocessing changed predictions')
    result = {
        'project': 'neural_classifier', 'seed': seed, 'data_source': 'Deterministic sklearn make_classification synthetic generator; no external dataset',
        'train_rows': len(data['train']), 'validation_rows': len(data['validation']), 'test_rows': len(data['test']),
        'selected_epoch': training['selected_epoch'], 'selected_validation_loss': training['validation_loss'],
        'heldout_accuracy': float(accuracy_score(actual, predicted)), 'heldout_f1': float(f1_score(actual, predicted)),
        'heldout_roc_auc': float(roc_auc_score(actual, probabilities)),
        'baseline_accuracy': float(accuracy_score(actual, baseline.predict(data['features'][data['test']]))),
        'confusion_matrix': confusion_matrix(actual, predicted, labels=[0, 1]).tolist(),
        'reload_logits_identical': True, 'training_history': training['history'],
        'versions': package_versions('numpy', 'scikit-learn', 'torch'),
        'limitations': ['Synthetic accuracy does not predict production performance.',
                        'The checkpoint is selected by validation loss; the test set does not choose epochs.'],
    }
    publish_result(directory, result)
    return result


def overfit_tiny_batch(seed: int, requested_output: str | None = None) -> dict:
    torch.set_num_threads(1)
    torch.manual_seed(seed)
    data = prepare_data(200, seed)
    x, y = data['x_train'][:16], data['y_train'][:16]
    model = network(x.shape[1])
    optimizer = torch.optim.Adam(model.parameters(), lr=0.03)
    criterion = nn.CrossEntropyLoss()
    for step in range(1, 401):
        optimizer.zero_grad(set_to_none=True)
        loss = criterion(model(x), y)
        loss.backward()
        optimizer.step()
        if float(loss.item()) < 0.005:
            break
    with torch.no_grad():
        final_loss = float(criterion(model(x), y).item())
        accuracy = float((model(x).argmax(dim=1) == y).float().mean().item())
    result = {'project': 'tiny_batch_overfit', 'rows': len(x), 'steps': step,
              'training_loss': final_loss, 'training_accuracy': accuracy,
              'limitations': ['This checks optimization mechanics, not generalization.']}
    publish_result(output_directory('tiny_batch_overfit', requested_output), result)
    if accuracy != 1.0 or final_loss >= 0.02:
        raise RuntimeError('Tiny-batch training did not converge')
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--samples', type=int, default=1000)
    parser.add_argument('--seed', type=int, default=42)
    parser.add_argument('--epochs', type=int, default=30)
    parser.add_argument('--overfit', action='store_true')
    parser.add_argument('--output-dir')
    args = parser.parse_args()
    if args.overfit:
        overfit_tiny_batch(args.seed, args.output_dir)
    else:
        run(args.samples, args.seed, args.epochs, args.output_dir)


if __name__ == '__main__':
    main()
