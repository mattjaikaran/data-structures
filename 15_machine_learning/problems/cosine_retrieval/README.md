# Cosine retrieval

Rank supplied vectors by cosine similarity.

## Contract

rank_vectors(query, vectors, k) returns (index, score) pairs in descending similarity, with index tie breaks. Treat zero-norm vectors as similarity 0. Require equal nonzero dimensions and 0 <= k <= vector count. This ranks supplied embeddings; it does not create embeddings or call an LLM.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/cosine_retrieval py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
