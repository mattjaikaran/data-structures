# Longest word in dictionary

Practice the matching question: [LeetCode #720: Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/).

Find a longest dictionary word whose prefixes also appear in the dictionary.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 09_tries/problems/longest_word_in_dictionary js
npm run practice -- 09_tries/problems/longest_word_in_dictionary py
npm run practice -- 09_tries/problems/longest_word_in_dictionary ts
npm run practice -- 09_tries/problems/longest_word_in_dictionary rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `longestWordInDictionary` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_word_dictionary` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `longestWordInDictionary` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `longest_word_in_dictionary` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(longestWordInDictionary(["w", "wo", "wor", "worl", "world"]) === "world", "longest");
```

## Prerequisites

- [trie](../../fundamentals/trie/README.md)

[Back to the topic](../../README.md)
