# Train test split

Split features and labels reproducibly without changing global randomness.

## Contract

Return (x_train, x_test, y_train, y_test). Shuffle indices with a local random generator. Use ceil(n * test_fraction) test rows; require nonempty train and test sets. Preserve pairing and input order. Return row references, not deep copies.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/train_test_split py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
