

def letter_combinations(digits: str) -> list[str]:
    """🟡 Letter Combinations of a Phone Number (LC #17)"""
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    result = []
    def bt(i, path):
        if i == len(digits): result.append(''.join(path)); return
        for c in phone[digits[i]]:
            path.append(c); bt(i+1, path); path.pop()
    bt(0, [])
    return result
