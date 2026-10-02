
class MinStack:
    """
    Stack with O(1) get_min().
    Parallel min_stack tracks the running minimum at every level.
    """
    def __init__(self) -> None:
        self._stack: list[int] = []
        self._min: list[int] = []

    def push(self, val: int) -> None:
        self._stack.append(val)
        self._min.append(val if not self._min else min(val, self._min[-1]))

    def pop(self) -> int:
        self._min.pop()
        return self._stack.pop()

    def top(self) -> int:    return self._stack[-1]
    def get_min(self) -> int: return self._min[-1]
