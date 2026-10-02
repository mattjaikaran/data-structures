# K-means

Cluster vectors with deterministic Lloyd updates.

## Contract

k_means(points, initial_centers, max_steps, tolerance) returns (centers, labels). Break distance ties by center index. Keep the previous center for empty clusters. Recompute labels against the returned centers, including when the iteration limit is reached. Do not mutate inputs.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/problems/k_means py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/problems/k_means py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
