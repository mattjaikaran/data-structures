# Word ladder

Practice the matching question: [LeetCode #127: Word Ladder](https://leetcode.com/problems/word-ladder/).

Return the length of a shortest word transformation chain that changes one character at a time.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/word_ladder js
npm run practice -- 10_graphs/problems/word_ladder py
npm run practice -- 10_graphs/problems/word_ladder ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `wordLadder` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `word_ladder` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `wordLadder` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 5, "wordLadder");
```

[Back to the topic](../../README.md)
