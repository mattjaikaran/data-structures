# Decode string

Practice the matching question: [LeetCode #394: Decode String](https://leetcode.com/problems/decode-string/).

Expand bracketed repetitions, including nested repetitions.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/decode_string js
npm run practice -- 05_stacks_queues/problems/decode_string py
npm run practice -- 05_stacks_queues/problems/decode_string ts
npm run practice -- 05_stacks_queues/problems/decode_string rs
```

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
