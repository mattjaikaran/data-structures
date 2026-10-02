# Classification metrics

Compute binary confusion counts and derived metrics.

## Contract

binary_metrics(actual, predicted) returns TN, FP, FN, TP, precision, recall, F1, and accuracy in a BinaryMetrics object. Require equal nonempty binary inputs. Use 0 for undefined precision, recall, or F1 denominators.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/classification_metrics py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
