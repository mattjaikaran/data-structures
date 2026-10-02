# Is anagram

Practice the matching question: [LeetCode #242: Valid Anagram](https://leetcode.com/problems/valid-anagram/).

Check whether two strings have the same character counts.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/problems/is_anagram py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/problems/is_anagram py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `isAnagram` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `is_anagram` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `isAnagram` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `is_anagram` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(isAnagram("anagram", "nagaram") && !isAnagram("rat", "car"), "anagram");
```

[Back to the topic](../../README.md)
