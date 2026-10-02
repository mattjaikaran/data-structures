# Stable softmax

Convert logits into normalized probabilities without overflow.

## Contract

softmax(logits) subtracts the largest logit before exponentiation. Accept finite logits and negative-infinity masks, with at least one finite value. Reject empty, NaN, positive-infinity, and fully masked inputs.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 15_machine_learning/fundamentals/stable_softmax py
# Edit the private solution path printed above.
npm run practice -- attempt 15_machine_learning/fundamentals/stable_softmax py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
