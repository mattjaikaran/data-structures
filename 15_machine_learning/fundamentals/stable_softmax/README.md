# Stable softmax

Convert logits into normalized probabilities without overflow.

## Contract

softmax(logits) subtracts the largest logit before exponentiation. Accept finite logits and negative-infinity masks, with at least one finite value. Reject empty, NaN, positive-infinity, and fully masked inputs.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/fundamentals/stable_softmax py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
