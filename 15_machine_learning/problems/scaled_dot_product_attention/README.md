# Scaled dot-product attention

Compute scaled dot-product attention and optional causal masking.

## Contract

attention(queries, keys, values, causal=False) computes softmax(Q K^T / sqrt(key_width)) V. Require nonempty rectangular inputs, equal query/key widths, and one value row per key. Causal mode requires equal query/key row counts and blocks future key positions. Return attended vectors, not a trained transformer.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/problems/scaled_dot_product_attention py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/problems/scaled_dot_product_attention py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
