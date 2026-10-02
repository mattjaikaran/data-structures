# Matrix multiply

Multiply rectangular matrices without NumPy.

## Contract

matrix_multiply(a, b) requires nonempty rectangular matrices and a column count equal to b row count. Return a new matrix; preserve both inputs.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/fundamentals/matrix_multiply py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
