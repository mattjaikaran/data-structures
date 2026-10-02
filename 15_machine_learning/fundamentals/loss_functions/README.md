# Loss functions

Compute regression and binary-classification losses.

## Contract

mean_squared_error and binary_cross_entropy require equal nonempty lengths. Binary labels must be 0 or 1 and probabilities must be in [0, 1]. An impossible binary prediction has infinite loss; a certain correct prediction has zero loss.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/fundamentals/loss_functions py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/fundamentals/loss_functions py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
