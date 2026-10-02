
class QueueViaStacks:
    """
    Queue built from two stacks. O(1) amortized dequeue.
    inbox: all pushes go here
    outbox: pops come from here; refilled from inbox when empty
    """
    def __init__(self) -> None:
        self._inbox: list = []
        self._outbox: list = []

    def enqueue(self, val) -> None:
        self._inbox.append(val)

    def dequeue(self):
        if not self._outbox:
            while self._inbox:
                self._outbox.append(self._inbox.pop())
        return self._outbox.pop()

    def peek(self):
        if not self._outbox:
            while self._inbox:
                self._outbox.append(self._inbox.pop())
        return self._outbox[-1]

    def is_empty(self) -> bool:
        return not self._inbox and not self._outbox
