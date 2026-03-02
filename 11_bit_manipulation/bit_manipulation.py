"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BIT MANIPULATION  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPERATORS          TRUTH TABLE    NOTES
x & y   AND        1&1=1, else 0  isolate bits, check flags
x | y   OR         0|0=0, else 1  set bits
x ^ y   XOR        same=0 diff=1  toggle, find unique
~x      NOT        flip all bits  ~x = -(x+1) in Python
x << n  left shift  x * 2^n       fast multiply
x >> n  right shift x // 2^n      fast divide

ESSENTIAL TRICKS
  x & (x-1)         clear lowest set bit
  x & (-x)          isolate lowest set bit  (= x & ~(x-1))
  x | (x-1)         set all bits below lowest set bit
  x ^ x = 0         anything XOR itself = 0
  x ^ 0 = x         anything XOR 0 = itself
  bin(x).count('1') popcount (number of set bits)
"""

# ┌─────────────────────────────────────────────┐
# │ TABLE OF CONTENTS                           │
# ├─────────────────────────────────────────────┤
# │ 1. Core Bit Operations                      │
# │    - get_bit, set_bit, clear_bit, toggle_bit│
# │    - is_power_of_two, count_bits            │
# │    - lowest_set_bit                         │
# │ 2. Interview Problems                       │
# │    - single_number               (LC #136) 🟢│
# │    - single_number_ii            (LC #137) 🟡│
# │    - single_number_iii           (LC #260) 🟡│
# │    - number_of_1_bits            (LC #191) 🟢│
# │    - reverse_bits                (LC #190) 🟢│
# │    - missing_number              (LC #268) 🟢│
# │    - count_bits_range            (LC #338) 🟢│
# │    - sum_of_two_integers         (LC #371) 🟡│
# │    - find_complement            (LC #1009) 🟢│
# │    - maximum_xor                 (LC #421) 🟡│
# │    - subsets_bitmask              (LC #78) 🟡│
# │    - hamming_distance            (LC #461) 🟢│
# │    - total_hamming_distance      (LC #477) 🟡│
# │    - bitwise_and_range           (LC #201) 🟡│
# │    - power_of_two                (LC #231) 🟢│
# │    - power_of_four               (LC #342) 🟢│
# │    - utf8_validation             (LC #393) 🟡│
# │ 3. Tests                                    │
# └─────────────────────────────────────────────┘

# ══════════════════════════════════════
# ── Core Bit Operations ──────────────────────
# ══════════════════════════════════════

def get_bit(n: int, i: int) -> int:
    """Check if bit i is set."""
    return (n >> i) & 1

def set_bit(n: int, i: int) -> int:
    """Set bit i to 1."""
    return n | (1 << i)

def clear_bit(n: int, i: int) -> int:
    """Clear bit i to 0."""
    return n & ~(1 << i)

def toggle_bit(n: int, i: int) -> int:
    """Flip bit i."""
    return n ^ (1 << i)

def is_power_of_two(n: int) -> bool:
    """Power of 2 has exactly one bit set. n & (n-1) clears lowest bit."""
    return n > 0 and (n & (n-1)) == 0

def count_bits(n: int) -> int:
    """Brian Kernighan: repeatedly clear lowest set bit. O(# set bits)."""
    count = 0
    while n:
        n &= n - 1  # clear lowest set bit
        count += 1
    return count

def lowest_set_bit(n: int) -> int:
    """Isolate the lowest set bit. n & -n = n & ~(n-1)."""
    return n & (-n)


# ══════════════════════════════════════
# ── Interview Problems ──────────────────────
# ══════════════════════════════════════

def single_number(nums: list[int]) -> int:
    """🟢 Single Number (LC #136)
    XOR all numbers. Pairs cancel (a^a=0). Lone number survives.
    """
    result = 0
    for n in nums: result ^= n
    return result


def single_number_ii(nums: list[int]) -> int:
    """🟡 Single Number II (LC #137)
    Every element appears 3x except one (appears once).
    Count each bit mod 3.
    """
    ones = twos = 0
    for n in nums:
        ones = (ones ^ n) & ~twos
        twos = (twos ^ n) & ~ones
    return ones


def single_number_iii(nums: list[int]) -> list[int]:
    """🟡 Single Number III (LC #260)
    Two elements appear once, rest appear twice.
    XOR all → xor of two unique nums. Split by differing bit.
    """
    xor = 0
    for n in nums: xor ^= n
    diff_bit = xor & (-xor)  # lowest set bit where the two numbers differ
    a = b = 0
    for n in nums:
        if n & diff_bit: a ^= n
        else: b ^= n
    return [a, b]


def number_of_1_bits(n: int) -> int:
    """🟢 Number of 1 Bits (LC #191) — Hamming weight"""
    return count_bits(n)


def reverse_bits(n: int) -> int:
    """🟢 Reverse Bits (LC #190) — reverse 32-bit unsigned integer"""
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result


def missing_number(nums: list[int]) -> int:
    """🟢 Missing Number (LC #268)
    XOR all indices 0..n and all values. Pair cancel, lone = missing.
    """
    result = len(nums)
    for i, n in enumerate(nums): result ^= i ^ n
    return result


def count_bits_range(n: int) -> list[int]:
    """🟢 Counting Bits (LC #338)
    dp[i] = dp[i >> 1] + (i & 1)
    Right shift removes last bit; add 1 if it was set.
    """
    dp = [0] * (n+1)
    for i in range(1, n+1): dp[i] = dp[i >> 1] + (i & 1)
    return dp


def sum_of_two_integers(a: int, b: int) -> int:
    """🟡 Sum of Two Integers (LC #371) — add without + or -
    Use XOR for sum bits, AND+shift for carry.
    Python ints are arbitrary precision; mask to 32 bits.
    """
    mask = 0xFFFFFFFF
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    # Handle Python's arbitrary precision negative numbers
    return a if b == 0 else a & mask


def find_complement(num: int) -> int:
    """🟢 Complement of Base 10 Integer (LC #1009)"""
    bit_length = num.bit_length()
    mask = (1 << bit_length) - 1
    return num ^ mask


def maximum_xor(nums: list[int]) -> int:
    """🟡 Maximum XOR of Two Numbers (LC #421)
    Bit-by-bit greedy: from MSB to LSB, greedily try to set each bit.
    """
    max_xor = 0; prefix = 0
    for i in range(31, -1, -1):
        prefix |= (1 << i)
        prefixes = {n & prefix for n in nums}
        candidate = max_xor | (1 << i)
        if any((candidate ^ p) in prefixes for p in prefixes):
            max_xor = candidate
    return max_xor


def subsets_bitmask(nums: list[int]) -> list[list[int]]:
    """🟡 Subsets (LC #78) — use bitmask to enumerate all 2^n subsets"""
    n = len(nums)
    result = []
    for mask in range(1 << n):
        subset = [nums[i] for i in range(n) if mask & (1 << i)]
        result.append(subset)
    return result


def hamming_distance(x: int, y: int) -> int:
    """🟢 Hamming Distance (LC #461) — count positions where bits differ"""
    return count_bits(x ^ y)


def total_hamming_distance(nums: list[int]) -> int:
    """🟡 Total Hamming Distance (LC #477)
    For each bit position, count pairs with different bits:
    ones * zeros (where ones + zeros = n).
    """
    total = 0; n = len(nums)
    for bit in range(32):
        ones = sum((num >> bit) & 1 for num in nums)
        total += ones * (n - ones)
    return total


def bitwise_and_range(left: int, right: int) -> int:
    """🟡 Bitwise AND of Numbers Range (LC #201)
    AND of [left, right] = common prefix of left and right in binary.
    Shift both right until equal, then shift back.
    """
    shift = 0
    while left != right:
        left >>= 1; right >>= 1; shift += 1
    return left << shift


def power_of_two(n: int) -> bool:
    """🟢 Power of Two (LC #231)"""
    return is_power_of_two(n)


def power_of_four(n: int) -> bool:
    """🟢 Power of Four (LC #342)
    Power of 4: power of 2, AND set bit is at even position.
    0x55555555 = ...01010101 (set bits at even positions)
    """
    return n > 0 and (n & (n-1)) == 0 and (n & 0x55555555) != 0


def utf8_validation(data: list[int]) -> bool:
    """🟡 UTF-8 Validation (LC #393)"""
    count = 0
    for byte in data:
        if count == 0:
            if byte >> 5 == 0b110: count = 1
            elif byte >> 4 == 0b1110: count = 2
            elif byte >> 3 == 0b11110: count = 3
            elif byte >> 7: return False
        else:
            if byte >> 6 != 0b10: return False
            count -= 1
    return count == 0


# ══════════════════════════════════════
# ── Tests ──────────────────────
# ══════════════════════════════════════

def run_tests():
    print("Running bit manipulation tests...\n")

    assert get_bit(0b1010, 1) == 1
    assert get_bit(0b1010, 0) == 0
    assert set_bit(0b1010, 0) == 0b1011
    assert clear_bit(0b1011, 0) == 0b1010
    assert toggle_bit(0b1010, 0) == 0b1011
    print("  ✅ get/set/clear/toggle bit")

    assert is_power_of_two(16) and is_power_of_two(1)
    assert not is_power_of_two(0) and not is_power_of_two(6)
    print("  ✅ is_power_of_two")

    assert count_bits(0b1011) == 3
    assert count_bits(0) == 0
    print("  ✅ count_bits (Brian Kernighan)")

    assert single_number([4,1,2,1,2]) == 4
    assert single_number([1]) == 1
    print("  ✅ single_number (XOR)")

    assert single_number_ii([2,2,3,2]) == 3
    assert single_number_ii([0,1,0,1,0,1,99]) == 99
    print("  ✅ single_number_ii (mod 3)")

    result = single_number_iii([1,2,1,3,2,5])
    assert set(result) == {3, 5}
    print("  ✅ single_number_iii (two uniques)")

    assert number_of_1_bits(0b00000000000000000000000000001011) == 3
    assert number_of_1_bits(0b11111111111111111111111111111101) == 31
    print("  ✅ number_of_1_bits")

    assert reverse_bits(0b00000010100101000001111010011100) == 964176192
    print("  ✅ reverse_bits")

    assert missing_number([3,0,1]) == 2
    assert missing_number([0,1]) == 2
    assert missing_number([9,6,4,2,3,5,7,0,1]) == 8
    print("  ✅ missing_number (XOR)")

    assert count_bits_range(5) == [0,1,1,2,1,2]
    assert count_bits_range(2) == [0,1,1]
    print("  ✅ count_bits_range (DP)")

    assert sum_of_two_integers(1, 2) == 3
    assert sum_of_two_integers(-2, 3) == 1
    print("  ✅ sum_of_two_integers (no + operator)")

    assert find_complement(5) == 2   # 101 → 010
    assert find_complement(1) == 0
    print("  ✅ find_complement")

    assert maximum_xor([3,10,5,25,2,8]) == 28
    print("  ✅ maximum_xor (greedy bit-by-bit)")

    subsets = subsets_bitmask([1,2,3])
    assert len(subsets) == 8 and [] in subsets and [1,2,3] in subsets
    print("  ✅ subsets_bitmask (2^n subsets)")

    assert hamming_distance(1, 4) == 2
    assert hamming_distance(3, 1) == 1
    print("  ✅ hamming_distance")

    assert total_hamming_distance([4,14,2]) == 6
    print("  ✅ total_hamming_distance")

    assert bitwise_and_range(5, 7) == 4
    assert bitwise_and_range(1, 2147483647) == 0
    print("  ✅ bitwise_and_range")

    assert power_of_four(16) and power_of_four(1)
    assert not power_of_four(5) and not power_of_four(8)
    print("  ✅ power_of_four")

    assert utf8_validation([197, 130, 1])
    assert not utf8_validation([235, 140, 4])
    print("  ✅ utf8_validation")

    print("\n🎉 All bit manipulation tests passed!")


if __name__ == "__main__":
    run_tests()
