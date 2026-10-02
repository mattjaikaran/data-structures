# Group anagrams

Practice the matching question: [LeetCode #49: Group Anagrams](https://leetcode.com/problems/group-anagrams/).

Group words that contain the same characters with the same counts.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 02_hash_maps/problems/group_anagrams py
# Edit the private solution path printed above.
npm run practice -- attempt 02_hash_maps/problems/group_anagrams py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `groupAnagrams` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `group_anagrams` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `groupAnagrams` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `group_anagrams` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const groups = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
assert(groups.length === 3, "groupAnagrams count");
```

[Back to the topic](../../README.md)
