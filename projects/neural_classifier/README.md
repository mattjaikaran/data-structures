# Neural classifier

Train a real CPU PyTorch classifier on deterministic synthetic data. Read [train.py](train.py) for splitting, preprocessing, mini-batch optimization, validation selection, and checkpoint restoration.

## Run

```bash
# Check optimization on 16 training rows first.
uv run --frozen --extra deep-learning python projects/neural_classifier/train.py --overfit

# Train and evaluate with separate validation and test rows.
uv run --frozen --extra deep-learning python projects/neural_classifier/train.py
```

Use `--samples`, `--seed`, `--epochs`, or `--output-dir` for controlled experiments. You need no GPU, dataset download, or API key.

## Follow the experiment

1. Generate 1,000 rows with eight features and two classes. Use stratified 60/20/20 training, validation, and test splits.
2. Fit the scaler on training rows only. Convert transformed inputs to float32 tensors.
3. Train an 8 → 32 → 16 → 2 network with ReLU, cross-entropy, Adam, and mini-batches of 64.
4. Select the lowest validation-loss checkpoint across 30 epochs. Keep test labels out of checkpoint selection.
5. Report held-out accuracy, F1, ROC AUC, and the confusion matrix. Compare accuracy with a training-majority baseline.
6. Save `checkpoint.pt` with weights and fitted preprocessing. Reload with `weights_only=True`, reconstruct the model, and require identical held-out logits.

The default seeded CPU smoke achieved **95.5%** held-out accuracy, compared with **50.5%** for the majority baseline. Validation selected epoch 9. The separate tiny-batch check reached 100% training accuracy in 15 steps; that checks optimization, not generalization. Inspect your `metrics.json` for exact scores and the full loss history.

## Restore for inference

Run this from the repository root after training:

```python
from pathlib import Path
import numpy as np
import torch
from projects.neural_classifier.train import load_checkpoint

model, checkpoint = load_checkpoint(
    Path('.private/project-runs/neural_classifier/checkpoint.pt')
)
raw = np.zeros((1, checkpoint['features']), dtype=np.float64)
scaled = ((raw - checkpoint['mean'].numpy()) / checkpoint['scale'].numpy()).astype(np.float32)
with torch.no_grad():
    probabilities = torch.softmax(model(torch.from_numpy(scaled)), dim=1)
print(probabilities)
```

Keep input features in the training order. Use the saved scaler; do not fit a new scaler at prediction time. Load only trusted artifacts.

## Limits

Synthetic accuracy does not predict production performance. Use development data to choose hyperparameters and reserve test data for final evaluation. CPU determinism does not guarantee identical numbers across all PyTorch versions and hardware.

[Projects](../README.md) · [Neural forward exercise](../../15_machine_learning/fundamentals/neural_network_forward/README.md)
