# Cosine retrieval

Rank supplied vectors by cosine similarity.

## Contract

rank_vectors(query, vectors, k) returns (index, score) pairs in descending similarity, with index tie breaks. Treat zero-norm vectors as similarity 0. Require equal nonzero dimensions and 0 <= k <= vector count. This ranks supplied embeddings; it does not create embeddings or call an LLM.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/problems/cosine_retrieval py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/problems/cosine_retrieval py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
