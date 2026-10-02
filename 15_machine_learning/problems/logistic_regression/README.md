# Logistic regression

Train a one-feature binary classifier with stable sigmoid and gradient descent.

## Contract

fit_logistic_regression(xs, ys, learning_rate, steps) returns a LogisticModel. probability(x) returns a sigmoid probability; predict(x) uses a 0.5 threshold. Require binary labels and equal nonempty inputs. This is a trained baseline, not a neural-network or deployment framework.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/logistic_regression py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
