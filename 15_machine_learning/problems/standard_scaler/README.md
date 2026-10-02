# Standard scaler

Fit feature statistics on training data and reuse them on held-out rows.

## Contract

StandardScaler.fit(rows) stores population means and standard deviations. Use scale 1 for constant features. transform(rows) never refits or mutates input; reject dimension mismatches. Fit only on training rows to prevent leakage.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/standard_scaler py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
