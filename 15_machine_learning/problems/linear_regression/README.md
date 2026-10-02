# Linear regression

Train a one-feature linear model with batch gradient descent.

## Contract

fit_linear_regression(xs, ys, learning_rate, steps) minimizes mean squared error and returns a LinearModel with slope, bias, and predict(x). Require equal nonempty data, positive rate, and positive integer steps. Choose scaled inputs and a suitable rate; convergence is not guaranteed for every rate.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/problems/linear_regression py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/problems/linear_regression py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
