
def minimum_cost_tree(arr: list[int]) -> int:
    """🔴 Minimum Cost Tree From Leaf Values (LC #1130)
    Monotonic stack approach: O(n)
    """
    stack, cost = [float('inf')], 0
    for n in arr:
        while stack[-1] <= n:
            mid = stack.pop()
            cost += mid * min(stack[-1], n)
        stack.append(n)
    while len(stack) > 2:
        cost += stack.pop() * stack[-1]
    return cost
