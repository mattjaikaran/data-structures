# Find all anagrams

Practice the matching question: [LeetCode #438: Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/).

Return the start positions of substrings that are anagrams of the pattern.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/find_all_anagrams js
npm run practice -- 02_hash_maps/problems/find_all_anagrams py
npm run practice -- 02_hash_maps/problems/find_all_anagrams ts
npm run practice -- 02_hash_maps/problems/find_all_anagrams rs
```

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
