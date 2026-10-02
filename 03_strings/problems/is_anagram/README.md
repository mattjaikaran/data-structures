# Is anagram

Practice the matching question: [LeetCode #242: Valid Anagram](https://leetcode.com/problems/valid-anagram/).

Check whether two strings have the same character counts.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/is_anagram js
npm run practice -- 03_strings/problems/is_anagram py
npm run practice -- 03_strings/problems/is_anagram ts
npm run practice -- 03_strings/problems/is_anagram rs
```

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
