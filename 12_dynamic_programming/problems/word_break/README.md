# Word break

Practice the matching question: [LeetCode #139: Word Break](https://leetcode.com/problems/word-break/).

Determine whether a string can split into words from a dictionary.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/word_break py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/word_break py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
