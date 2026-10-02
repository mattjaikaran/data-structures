
def jump_game_ii(nums: list[int]) -> int:
    """🟡 Jump Game II (LC #45) — minimum jumps to reach end"""
    jumps = cur_end = cur_far = 0
    for i in range(len(nums)-1):
        cur_far = max(cur_far, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = cur_far
    return jumps
