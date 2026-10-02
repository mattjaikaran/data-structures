# Longest substring no repeat

Practice the matching question: [LeetCode #3: Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/).

Return the length of the longest contiguous substring with no repeated character.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/longest_substring_no_repeat js
npm run practice -- 02_hash_maps/problems/longest_substring_no_repeat py
npm run practice -- 02_hash_maps/problems/longest_substring_no_repeat ts
npm run practice -- 02_hash_maps/problems/longest_substring_no_repeat rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `lengthOfLongestSubstring` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_substring_no_repeat` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `lengthOfLongestSubstring` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `length_of_longest_substring` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(lengthOfLongestSubstring("abcabcbb") === 3, "longestSub");
```

[Back to the topic](../../README.md)
