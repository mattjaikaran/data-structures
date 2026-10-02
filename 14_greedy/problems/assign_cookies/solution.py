
def assign_cookies(greed: list[int], sizes: list[int]) -> int:
    """🟢 Assign Cookies (LC #455) — max content children"""
    greed.sort(); sizes.sort()
    child = cookie = 0
    while child < len(greed) and cookie < len(sizes):
        if sizes[cookie] >= greed[child]: child += 1
        cookie += 1
    return child
