# Find all anagrams

Practice the matching question: [LeetCode #438: Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/).

Return the start positions of substrings that are anagrams of the pattern.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 02_hash_maps/problems/find_all_anagrams py
# Edit the private solution path printed above.
npm run practice -- attempt 02_hash_maps/problems/find_all_anagrams py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `findAllAnagrams` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `find_all_anagrams` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `findAllAnagrams` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `find_all_anagrams` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(findAllAnagrams("cbaebabacd", "abc"), [0, 6]), "anagrams");
```

[Back to the topic](../../README.md)
