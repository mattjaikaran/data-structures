# Gradient check

Approximate a multivariable gradient with central differences.

## Contract

finite_difference(function, point, epsilon) assumes a pure scalar function. Require epsilon > 0. Return one derivative per coordinate without changing point.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/fundamentals/gradient_check py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
