# Group anagrams

Practice the matching question: [LeetCode #49: Group Anagrams](https://leetcode.com/problems/group-anagrams/).

Group words that contain the same characters with the same counts.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/group_anagrams js
npm run practice -- 02_hash_maps/problems/group_anagrams py
npm run practice -- 02_hash_maps/problems/group_anagrams ts
npm run practice -- 02_hash_maps/problems/group_anagrams rs
```

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
