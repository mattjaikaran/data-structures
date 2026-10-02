# Linear regression

Train a one-feature linear model with batch gradient descent.

## Contract

fit_linear_regression(xs, ys, learning_rate, steps) minimizes mean squared error and returns a LinearModel with slope, bias, and predict(x). Require equal nonempty data, positive rate, and positive integer steps. Choose scaled inputs and a suitable rate; convergence is not guaranteed for every rate.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/linear_regression py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
