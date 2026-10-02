from collections import deque

class Queue:
    """Backed by collections.deque for O(1) enqueue and dequeue."""
    def __init__(self) -> None:
        self._data: deque = deque()

    def enqueue(self, val) -> None:      self._data.append(val)
    def dequeue(self):                   return self._data.popleft()
    def peek(self):                      return self._data[0]
    def is_empty(self) -> bool:          return not self._data
    def __len__(self) -> int:            return len(self._data)
