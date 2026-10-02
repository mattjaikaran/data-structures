# Strings

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 03_strings py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [kmp search](fundamentals/kmp_search/README.md) | [js](fundamentals/kmp_search/solution.js) | [py](fundamentals/kmp_search/solution.py) | [ts](fundamentals/kmp_search/solution.ts) | [rs](fundamentals/kmp_search/solution.rs) |
| [z search](fundamentals/z_search/README.md) | [js](fundamentals/z_search/solution.js) | [py](fundamentals/z_search/solution.py) | [ts](fundamentals/z_search/solution.ts) | [rs](fundamentals/z_search/solution.rs) |
| [manacher](fundamentals/manacher/README.md) | [js](fundamentals/manacher/solution.js) | [py](fundamentals/manacher/solution.py) | [ts](fundamentals/manacher/solution.ts) | [rs](fundamentals/manacher/solution.rs) |
| [rabin karp](fundamentals/rabin_karp/README.md) | — | [py](fundamentals/rabin_karp/solution.py) | — | — |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [is palindrome](problems/is_palindrome/README.md) | [js](problems/is_palindrome/solution.js) | [py](problems/is_palindrome/solution.py) | [ts](problems/is_palindrome/solution.ts) | [rs](problems/is_palindrome/solution.rs) |
| [is anagram](problems/is_anagram/README.md) | [js](problems/is_anagram/solution.js) | [py](problems/is_anagram/solution.py) | [ts](problems/is_anagram/solution.ts) | [rs](problems/is_anagram/solution.rs) |
| [roman to int](problems/roman_to_int/README.md) | [js](problems/roman_to_int/solution.js) | [py](problems/roman_to_int/solution.py) | [ts](problems/roman_to_int/solution.ts) | [rs](problems/roman_to_int/solution.rs) |
| [int to roman](problems/int_to_roman/README.md) | [js](problems/int_to_roman/solution.js) | [py](problems/int_to_roman/solution.py) | [ts](problems/int_to_roman/solution.ts) | [rs](problems/int_to_roman/solution.rs) |
| [reverse words](problems/reverse_words/README.md) | [js](problems/reverse_words/solution.js) | [py](problems/reverse_words/solution.py) | [ts](problems/reverse_words/solution.ts) | [rs](problems/reverse_words/solution.rs) |
| [zigzag conversion](problems/zigzag_conversion/README.md) | [js](problems/zigzag_conversion/solution.js) | [py](problems/zigzag_conversion/solution.py) | [ts](problems/zigzag_conversion/solution.ts) | — |
| [longest common prefix](problems/longest_common_prefix/README.md) | [js](problems/longest_common_prefix/solution.js) | [py](problems/longest_common_prefix/solution.py) | [ts](problems/longest_common_prefix/solution.ts) | [rs](problems/longest_common_prefix/solution.rs) |
| [multiply strings](problems/multiply_strings/README.md) | [js](problems/multiply_strings/solution.js) | [py](problems/multiply_strings/solution.py) | [ts](problems/multiply_strings/solution.ts) | [rs](problems/multiply_strings/solution.rs) |
| [string compression](problems/string_compression/README.md) | [js](problems/string_compression/solution.js) | [py](problems/string_compression/solution.py) | [ts](problems/string_compression/solution.ts) | — |
| [num distinct](problems/num_distinct/README.md) | [js](problems/num_distinct/solution.js) | [py](problems/num_distinct/solution.py) | [ts](problems/num_distinct/solution.ts) | [rs](problems/num_distinct/solution.rs) |
| [count and say](problems/count_and_say/README.md) | — | [py](problems/count_and_say/solution.py) | — | — |
| [strstr](problems/strstr/README.md) | — | [py](problems/strstr/solution.py) | — | — |
| [valid ip address](problems/valid_ip_address/README.md) | — | [py](problems/valid_ip_address/solution.py) | — | — |
| [is scramble](problems/is_scramble/README.md) | — | [py](problems/is_scramble/solution.py) | — | — |
| [valid palindrome ii](problems/valid_palindrome_ii/README.md) | [js](problems/valid_palindrome_ii/solution.js) | [py](problems/valid_palindrome_ii/solution.py) | [ts](problems/valid_palindrome_ii/solution.ts) | [rs](problems/valid_palindrome_ii/solution.rs) |

## Complexity

| Algorithm   | Time       | Notes |
|-------------|------------|-------|
| KMP        | O(n + m)   | Pattern search, avoids restarting |
| Rabin-Karp | O(n + m)   | Rolling hash, good for multi-pattern |
| Z-Algorithm| O(n)       | Z[i] = longest prefix match at i |
| Manacher   | O(n)       | Longest palindromic substring |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
