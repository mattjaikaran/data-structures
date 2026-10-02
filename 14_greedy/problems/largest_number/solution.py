
def largest_number(nums: list[int]) -> str:
    """🟡 Largest Number (LC #179) — arrange to form largest number"""
    import functools
    def cmp(a, b):
        return -1 if a+b > b+a else (1 if a+b < b+a else 0)
    strs = sorted([str(n) for n in nums], key=functools.cmp_to_key(cmp))
    result = ''.join(strs)
    return '0' if result[0] == '0' else result
