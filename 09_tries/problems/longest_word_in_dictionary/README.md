# Longest word in dictionary

Practice the matching question: [LeetCode #720: Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/).

Find a longest dictionary word whose prefixes also appear in the dictionary.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 09_tries/problems/longest_word_in_dictionary py
# Edit the private solution path printed above.
npm run practice -- attempt 09_tries/problems/longest_word_in_dictionary py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
