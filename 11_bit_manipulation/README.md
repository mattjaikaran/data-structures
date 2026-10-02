# Bit manipulation

Start with fundamentals. Then choose one problem, edit its solution file, and run
its tests. Use JavaScript to understand the algorithm, then write Python without
looking at the reference solution. Add TypeScript and Rust after that.

Run all available exercises for this topic with:

```bash
npm run practice -- 11_bit_manipulation py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [get bit](fundamentals/get_bit/README.md) | [js](fundamentals/get_bit/solution.js) | [py](fundamentals/get_bit/solution.py) | [ts](fundamentals/get_bit/solution.ts) | [rs](fundamentals/get_bit/solution.rs) |
| [set bit](fundamentals/set_bit/README.md) | [js](fundamentals/set_bit/solution.js) | [py](fundamentals/set_bit/solution.py) | [ts](fundamentals/set_bit/solution.ts) | [rs](fundamentals/set_bit/solution.rs) |
| [clear bit](fundamentals/clear_bit/README.md) | [js](fundamentals/clear_bit/solution.js) | [py](fundamentals/clear_bit/solution.py) | [ts](fundamentals/clear_bit/solution.ts) | [rs](fundamentals/clear_bit/solution.rs) |
| [toggle bit](fundamentals/toggle_bit/README.md) | [js](fundamentals/toggle_bit/solution.js) | [py](fundamentals/toggle_bit/solution.py) | [ts](fundamentals/toggle_bit/solution.ts) | — |
| [is power of two](fundamentals/is_power_of_two/README.md) | [js](fundamentals/is_power_of_two/solution.js) | [py](fundamentals/is_power_of_two/solution.py) | [ts](fundamentals/is_power_of_two/solution.ts) | [rs](fundamentals/is_power_of_two/solution.rs) |
| [count bits](fundamentals/count_bits/README.md) | [js](fundamentals/count_bits/solution.js) | [py](fundamentals/count_bits/solution.py) | [ts](fundamentals/count_bits/solution.ts) | [rs](fundamentals/count_bits/solution.rs) |
| [lowest set bit](fundamentals/lowest_set_bit/README.md) | — | [py](fundamentals/lowest_set_bit/solution.py) | — | — |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [single number](problems/single_number/README.md) | [js](problems/single_number/solution.js) | [py](problems/single_number/solution.py) | [ts](problems/single_number/solution.ts) | [rs](problems/single_number/solution.rs) |
| [single number ii](problems/single_number_ii/README.md) | [js](problems/single_number_ii/solution.js) | [py](problems/single_number_ii/solution.py) | [ts](problems/single_number_ii/solution.ts) | [rs](problems/single_number_ii/solution.rs) |
| [single number iii](problems/single_number_iii/README.md) | [js](problems/single_number_iii/solution.js) | [py](problems/single_number_iii/solution.py) | [ts](problems/single_number_iii/solution.ts) | [rs](problems/single_number_iii/solution.rs) |
| [reverse bits](problems/reverse_bits/README.md) | [js](problems/reverse_bits/solution.js) | [py](problems/reverse_bits/solution.py) | [ts](problems/reverse_bits/solution.ts) | [rs](problems/reverse_bits/solution.rs) |
| [missing number](problems/missing_number/README.md) | [js](problems/missing_number/solution.js) | [py](problems/missing_number/solution.py) | [ts](problems/missing_number/solution.ts) | [rs](problems/missing_number/solution.rs) |
| [count bits range](problems/count_bits_range/README.md) | [js](problems/count_bits_range/solution.js) | [py](problems/count_bits_range/solution.py) | [ts](problems/count_bits_range/solution.ts) | [rs](problems/count_bits_range/solution.rs) |
| [hamming distance](problems/hamming_distance/README.md) | [js](problems/hamming_distance/solution.js) | [py](problems/hamming_distance/solution.py) | [ts](problems/hamming_distance/solution.ts) | [rs](problems/hamming_distance/solution.rs) |
| [total hamming distance](problems/total_hamming_distance/README.md) | [js](problems/total_hamming_distance/solution.js) | [py](problems/total_hamming_distance/solution.py) | [ts](problems/total_hamming_distance/solution.ts) | — |
| [bitwise and range](problems/bitwise_and_range/README.md) | [js](problems/bitwise_and_range/solution.js) | [py](problems/bitwise_and_range/solution.py) | [ts](problems/bitwise_and_range/solution.ts) | [rs](problems/bitwise_and_range/solution.rs) |
| [power of four](problems/power_of_four/README.md) | [js](problems/power_of_four/solution.js) | [py](problems/power_of_four/solution.py) | [ts](problems/power_of_four/solution.ts) | — |
| [subsets bitmask](problems/subsets_bitmask/README.md) | [js](problems/subsets_bitmask/solution.js) | [py](problems/subsets_bitmask/solution.py) | [ts](problems/subsets_bitmask/solution.ts) | [rs](problems/subsets_bitmask/solution.rs) |
| [maximum xor](problems/maximum_xor/README.md) | [js](problems/maximum_xor/solution.js) | [py](problems/maximum_xor/solution.py) | [ts](problems/maximum_xor/solution.ts) | [rs](problems/maximum_xor/solution.rs) |
| [sum of two integers](problems/sum_of_two_integers/README.md) | — | [py](problems/sum_of_two_integers/solution.py) | — | — |
| [find complement](problems/find_complement/README.md) | — | [py](problems/find_complement/solution.py) | — | — |
| [utf8 validation](problems/utf8_validation/README.md) | — | [py](problems/utf8_validation/solution.py) | — | — |

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| get/set/clear/toggle bit | O(1) | O(1) |
| count_bits (Brian Kernighan) | O(# set bits) | O(32) |
| XOR-based single number | O(n) | O(n) |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
