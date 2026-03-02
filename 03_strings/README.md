# Strings

Algorithms for pattern matching, palindromes, and string processing. KMP, Rabin-Karp, Z-Algorithm, and Manacher provide efficient substring search and longest-palindrome detection. Use when you need to search text, validate formats, or compare/transform strings.

## Complexity

| Algorithm   | Time       | Notes |
|-------------|------------|-------|
| KMP        | O(n + m)   | Pattern search, avoids restarting |
| Rabin-Karp | O(n + m)   | Rolling hash, good for multi-pattern |
| Z-Algorithm| O(n)       | Z[i] = longest prefix match at i |
| Manacher   | O(n)       | Longest palindromic substring |

## Key Patterns

- **KMP** — failure function avoids restarting from scratch
- **Rabin-Karp** — rolling hash for substring matching
- **Z-Algorithm** — Z[i] = length of longest match with prefix starting at i
- **Manacher** — O(n) longest palindromic substring via center expansion

## Problems Implemented

| Problem                    | Difficulty | LeetCode |
|----------------------------|------------|----------|
| Valid Palindrome           | Easy       | #125     |
| Valid Anagram              | Easy       | #242     |
| Roman to Integer           | Easy       | #13      |
| Integer to Roman           | Medium     | #12      |
| Count and Say              | Medium     | #38      |
| Multiply Strings           | Medium     | #43      |
| Reverse Words              | Medium     | #151     |
| Zigzag Conversion          | Medium     | #6       |
| Longest Common Prefix      | Easy       | #14      |
| Implement strStr (KMP)     | Easy       | #28      |
| Validate IP Address        | Medium     | #468     |
| String Compression         | Medium     | #443     |
| Scramble String            | Hard       | #87      |
| Distinct Subsequences      | Hard       | #115     |

## Implementations

| Language   | File |
|------------|------|
| Python     | [strings.py](strings.py) |
| JavaScript | [strings.js](strings.js) |
| TypeScript | [strings.ts](strings.ts) |
| Rust       | [strings.rs](strings.rs) |
