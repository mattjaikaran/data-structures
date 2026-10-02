from __future__ import annotations

class DynamicArray:
    """
    Manual dynamic array to illustrate what Python's list does internally.
    Uses a fixed-size backing array that doubles when capacity is exceeded.
    """

    def __init__(self) -> None:
        self._cap: int = 4
        self._size: int = 0
        self._data: list = [None] * self._cap

    # ── Core API ──────────────────────────────

    def __len__(self) -> int:
        return self._size

    def __getitem__(self, i: int):
        self._check_bounds(i)
        return self._data[i]

    def __setitem__(self, i: int, val) -> None:
        self._check_bounds(i)
        self._data[i] = val

    def __repr__(self) -> str:
        return f"[{', '.join(str(self._data[i]) for i in range(self._size))}]"

    def append(self, val) -> None:
        """O(1) amortized."""
        if self._size == self._cap:
            self._resize(self._cap * 2)
        self._data[self._size] = val
        self._size += 1

    def insert(self, i: int, val) -> None:
        """O(n) — shifts elements right."""
        if not (0 <= i <= self._size):
            raise IndexError(f"Index {i} out of range")
        if self._size == self._cap:
            self._resize(self._cap * 2)
        for j in range(self._size, i, -1):
            self._data[j] = self._data[j - 1]
        self._data[i] = val
        self._size += 1

    def remove(self, i: int):
        """O(n) — shifts elements left."""
        self._check_bounds(i)
        val = self._data[i]
        for j in range(i, self._size - 1):
            self._data[j] = self._data[j + 1]
        self._data[self._size - 1] = None
        self._size -= 1
        if self._size < self._cap // 4 and self._cap > 4:
            self._resize(self._cap // 2)
        return val

    # ── Internals ─────────────────────────────

    def _resize(self, new_cap: int) -> None:
        new_data = [None] * new_cap
        for i in range(self._size):
            new_data[i] = self._data[i]
        self._data = new_data
        self._cap = new_cap

    def _check_bounds(self, i: int) -> None:
        if not (0 <= i < self._size):
            raise IndexError(f"Index {i} out of range (size={self._size})")
