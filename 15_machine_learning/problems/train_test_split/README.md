# Train test split

Split features and labels reproducibly without changing global randomness.

## Contract

Return (x_train, x_test, y_train, y_test). Shuffle indices with a local random generator. Use ceil(n * test_fraction) test rows; require nonempty train and test sets. Preserve pairing and input order. Return row references, not deep copies.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/problems/train_test_split py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/problems/train_test_split py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
