# Word break

Practice the matching question: [LeetCode #139: Word Break](https://leetcode.com/problems/word-break/).

Determine whether a string can split into words from a dictionary.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/word_break js
npm run practice -- 12_dynamic_programming/problems/word_break py
npm run practice -- 12_dynamic_programming/problems/word_break ts
npm run practice -- 12_dynamic_programming/problems/word_break rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `wordBreak` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `word_break` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `wordBreak` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `word_break` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(wordBreak("leetcode",["leet","code"])&&!wordBreak("catsandog",["cats","dog","sand","and","cat"]),"wordBreak");
```

[Back to the topic](../../README.md)
