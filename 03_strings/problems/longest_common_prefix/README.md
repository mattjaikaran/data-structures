# Longest common prefix

Practice the matching question: [LeetCode #14: Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/).

Return the shared starting substring of every input word.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/longest_common_prefix js
npm run practice -- 03_strings/problems/longest_common_prefix py
npm run practice -- 03_strings/problems/longest_common_prefix ts
npm run practice -- 03_strings/problems/longest_common_prefix rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `longestCommonPrefix` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_common_prefix` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `longestCommonPrefix` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `longest_common_prefix` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(longestCommonPrefix(["flower", "flow", "flight"]) === "fl", "lcp");
```

[Back to the topic](../../README.md)
