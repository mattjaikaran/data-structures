# Classification metrics

Compute binary confusion counts and derived metrics.

## Contract

binary_metrics(actual, predicted) returns TN, FP, FN, TP, precision, recall, F1, and accuracy in a BinaryMetrics object. Require equal nonempty binary inputs. Use 0 for undefined precision, recall, or F1 denominators.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/problems/classification_metrics py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/problems/classification_metrics py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
