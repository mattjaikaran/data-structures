# Gradient check

Approximate a multivariable gradient with central differences.

## Contract

finite_difference(function, point, epsilon) assumes a pure scalar function. Require epsilon > 0. Return one derivative per coordinate without changing point.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/fundamentals/gradient_check py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/fundamentals/gradient_check py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
