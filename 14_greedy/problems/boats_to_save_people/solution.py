
def boats_to_save_people(people: list[int], limit: int) -> int:
    """🟡 Boats to Save People (LC #881) — at most 2 per boat"""
    people.sort()
    l, r = 0, len(people) - 1; boats = 0
    while l <= r:
        if people[l] + people[r] <= limit: l += 1
        r -= 1; boats += 1
    return boats
