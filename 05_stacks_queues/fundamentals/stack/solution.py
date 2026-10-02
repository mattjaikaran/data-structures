
class Stack:
    def __init__(self) -> None:
        self._data: list = []

    def push(self, val) -> None:         self._data.append(val)
    def pop(self):                        return self._data.pop()
    def peek(self):                       return self._data[-1]
    def is_empty(self) -> bool:          return not self._data
    def __len__(self) -> int:            return len(self._data)
    def __repr__(self) -> str:           return f"Stack({self._data} ← top)"
