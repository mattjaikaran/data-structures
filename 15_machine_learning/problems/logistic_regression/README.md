# Logistic regression

Train a one-feature binary classifier with stable sigmoid and gradient descent.

## Contract

fit_logistic_regression(xs, ys, learning_rate, steps) returns a LogisticModel. probability(x) returns a sigmoid probability; predict(x) uses a 0.5 threshold. Require binary labels and equal nonempty inputs. This is a trained baseline, not a neural-network or deployment framework.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/problems/logistic_regression py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/problems/logistic_regression py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
