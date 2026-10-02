# Descriptive statistics

Compute a mean and population variance.

## Contract

mean_variance(values) returns (mean, population variance), dividing by n rather than n - 1. Reject empty data. Use a centered second pass.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/fundamentals/descriptive_statistics py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
