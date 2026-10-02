# K-nearest neighbors

Classify a query from its closest labeled training rows.

## Contract

knn_predict(training, labels, query, k) uses squared Euclidean distance. Break equal-distance neighbor ties by training index; break vote ties by the smallest integer label. Require matching nonzero dimensions and 1 <= k <= training size.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/k_nearest_neighbors py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
