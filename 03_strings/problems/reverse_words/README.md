# Reverse words

Practice the matching question: [LeetCode #151: Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/).

Reverse word order and normalize separating whitespace.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/reverse_words js
npm run practice -- 03_strings/problems/reverse_words py
npm run practice -- 03_strings/problems/reverse_words ts
npm run practice -- 03_strings/problems/reverse_words rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `reverseWords` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `reverse_words` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `reverseWords` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `reverse_words` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(reverseWords("  the sky is blue  ") === "blue is sky the", "reverseWords");
```

[Back to the topic](../../README.md)
