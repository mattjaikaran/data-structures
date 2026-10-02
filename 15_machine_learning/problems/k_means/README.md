# K-means

Cluster vectors with deterministic Lloyd updates.

## Contract

k_means(points, initial_centers, max_steps, tolerance) returns (centers, labels). Break distance ties by center index. Keep the previous center for empty clusters. Recompute labels against the returned centers, including when the iteration limit is reached. Do not mutate inputs.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/k_means py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
