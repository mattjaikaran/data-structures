# Scaled dot-product attention

Compute scaled dot-product attention and optional causal masking.

## Contract

attention(queries, keys, values, causal=False) computes softmax(Q K^T / sqrt(key_width)) V. Require nonempty rectangular inputs, equal query/key widths, and one value row per key. Causal mode requires equal query/key row counts and blocks future key positions. Return attended vectors, not a trained transformer.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/problems/scaled_dot_product_attention py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
