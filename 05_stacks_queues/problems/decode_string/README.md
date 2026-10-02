# Decode string

Practice the matching question: [LeetCode #394: Decode String](https://leetcode.com/problems/decode-string/).

Expand bracketed repetitions, including nested repetitions.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/decode_string py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/decode_string py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `decodeString` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `decode_string` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `decodeString` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `decode_string` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(decodeString("3[a2[c]]") === "accaccacc", "decode nested");
```

## Solution notes

Decode String (LC #394). '3[a2[c]]' → 'accaccacc'. O(n).

[Back to the topic](../../README.md)
