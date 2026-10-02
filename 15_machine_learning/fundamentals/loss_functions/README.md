# Loss functions

Compute regression and binary-classification losses.

## Contract

mean_squared_error and binary_cross_entropy require equal nonempty lengths. Binary labels must be 0 or 1 and probabilities must be in [0, 1]. An impossible binary prediction has infinite loss; a certain correct prediction has zero loss.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/fundamentals/loss_functions py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
