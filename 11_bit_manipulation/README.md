# Bit Manipulation

Essential operators: AND (isolate bits), OR (set bits), XOR (toggle, find unique). Tricks: `x & (x-1)` clears lowest set bit; `x & (-x)` isolates it; `x ^ x = 0`; `bin(x).count('1')` for popcount.

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| get/set/clear/toggle bit | O(1) | O(1) |
| count_bits (Brian Kernighan) | O(# set bits) | O(32) |
| XOR-based single number | O(n) | O(n) |

## Key Patterns

- **XOR for Pairs** — `a ^ a = 0`; XOR all to find lone element
- **x & (x-1)** — clear lowest set bit; power-of-two check
- **x & (-x)** — isolate lowest set bit
- **Bitmask Subsets** — iterate `mask` 0..2^n, check `mask & (1<<i)`
- **Bit-by-Bit Greedy** — MSB to LSB for max XOR

## Problems Implemented

| Problem | Difficulty | LeetCode |
|---------|-----------|----------|
| Single Number | Easy | #136 |
| Single Number II | Medium | #137 |
| Single Number III | Medium | #260 |
| Number of 1 Bits | Easy | #191 |
| Reverse Bits | Easy | #190 |
| Missing Number | Easy | #268 |
| Counting Bits | Easy | #338 |
| Sum of Two Integers | Medium | #371 |
| Complement of Base 10 Integer | Easy | #1009 |
| Maximum XOR of Two Numbers | Medium | #421 |
| Subsets (bitmask) | Medium | #78 |
| Hamming Distance | Easy | #461 |
| Total Hamming Distance | Medium | #477 |
| Bitwise AND of Numbers Range | Medium | #201 |
| Power of Two | Easy | #231 |
| Power of Four | Easy | #342 |
| UTF-8 Validation | Medium | #393 |

## Implementations

| Language | File |
|----------|------|
| Python | [bit_manipulation.py](bit_manipulation.py) |
| JavaScript | [bit_manipulation.js](bit_manipulation.js) |
| TypeScript | [bit_manipulation.ts](bit_manipulation.ts) |
| Rust | [bit_manipulation.rs](bit_manipulation.rs) |
