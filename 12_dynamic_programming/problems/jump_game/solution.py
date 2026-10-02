
def jump_game(nums: list[int]) -> bool:
    """🟡 Jump Game (LC #55) — can you reach the last index?
    Greedy DP: track the furthest reachable index.
    """
    reach = 0
    for i, n in enumerate(nums):
        if i > reach: return False
        reach = max(reach, i + n)
    return True
