"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STACKS & QUEUES  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STACK  — LIFO (Last In, First Out)
  Think: browser back button, undo/redo, call stack, DFS
  Push/pop from the same end (top).

QUEUE  — FIFO (First In, First Out)
  Think: printer queue, BFS, task scheduling
  Enqueue at back, dequeue from front.
  Use collections.deque — never list.pop(0) which is O(n).

DEQUE  — O(1) at BOTH ends. Best of both worlds.

MONOTONIC STACK — maintains elements in sorted order
  Used for: next greater element, histogram, span problems.

COMPLEXITY
  Stack push/pop/peek:   O(1)
  Queue enqueue/dequeue: O(1) with deque
  Search in either:      O(n)
"""

# ┌─────────────────────────────────────────────────────────────────┐
# │ TABLE OF CONTENTS                                               │
# ├─────────────────────────────────────────────────────────────────┤
# │ 1. Stack class                                                  │
# │ 2. Queue class                                                  │
# │ 3. MinStack class                                               │
# │ 4. QueueViaStacks class                                         │
# │ 5. Problems                                                     │
# │    - is_valid_parens         (LC #20)   🟢                      │
# │    - backspace_compare       (LC #844)  🟢                      │
# │    - eval_rpn                (LC #150)  🟡                      │
# │    - generate_parentheses    (LC #22)   🟡                      │
# │    - decode_string           (LC #394)   🟡                      │
# │    - daily_temperatures      (LC #739)  🟡                      │
# │    - next_greater_element    (LC #496)  🟡                      │
# │    - asteroid_collision      (LC #735)  🟡                      │
# │    - remove_k_digits         (LC #402)  🟡                      │
# │    - sliding_window_maximum  (LC #239)  🔴                      │
# │    - largest_rectangle_histogram (LC #84)  🔴                   │
# │    - basic_calculator        (LC #224)  🔴                      │
# │ 6. Tests                                                       │
# └─────────────────────────────────────────────────────────────────┘

from collections import deque
from typing import Optional


# ══════════════════════════════════════
# PART 1 — IMPLEMENTATIONS
# ══════════════════════════════════════

class Stack:
    def __init__(self) -> None:
        self._data: list = []

    def push(self, val) -> None:         self._data.append(val)
    def pop(self):                        return self._data.pop()
    def peek(self):                       return self._data[-1]
    def is_empty(self) -> bool:          return not self._data
    def __len__(self) -> int:            return len(self._data)
    def __repr__(self) -> str:           return f"Stack({self._data} ← top)"


class Queue:
    """Backed by collections.deque for O(1) enqueue and dequeue."""
    def __init__(self) -> None:
        self._data: deque = deque()

    def enqueue(self, val) -> None:      self._data.append(val)
    def dequeue(self):                   return self._data.popleft()
    def peek(self):                      return self._data[0]
    def is_empty(self) -> bool:          return not self._data
    def __len__(self) -> int:            return len(self._data)


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


# ══════════════════════════════════════
# PART 2 — INTERVIEW PROBLEMS
# ══════════════════════════════════════

# ── 🟢 Easy ───────────────────────────────────

def is_valid_parens(s: str) -> bool:
    """🟢 Valid Parentheses (LC #20) — O(n) time, O(n) space."""
    stack: list[str] = []
    match = {')': '(', '}': '{', ']': '['}
    for ch in s:
        if ch in '({[':
            stack.append(ch)
        elif not stack or stack[-1] != match[ch]:
            return False
        else:
            stack.pop()
    return not stack


def backspace_compare(s: str, t: str) -> bool:
    """🟢 Backspace String Compare (LC #844). '#' = backspace. O(n)."""
    def process(string: str) -> str:
        stack: list[str] = []
        for ch in string:
            if ch != '#': stack.append(ch)
            elif stack: stack.pop()
        return ''.join(stack)
    return process(s) == process(t)


# ── 🟡 Medium ──────────────────────────────────

def eval_rpn(tokens: list[str]) -> int:
    """🟡 Evaluate Reverse Polish Notation (LC #150) — O(n)."""
    stack: list[int] = []
    ops = {'+': lambda a,b: a+b, '-': lambda a,b: a-b,
           '*': lambda a,b: a*b, '/': lambda a,b: int(a/b)}
    for t in tokens:
        if t in ops:
            b, a = stack.pop(), stack.pop()
            stack.append(ops[t](a, b))
        else:
            stack.append(int(t))
    return stack[0]


def generate_parentheses(n: int) -> list[str]:
    """🟡 Generate Parentheses (LC #22) — backtracking."""
    result: list[str] = []
    def bt(cur: str, op: int, cl: int) -> None:
        if len(cur) == 2 * n: result.append(cur); return
        if op < n: bt(cur + '(', op + 1, cl)
        if cl < op: bt(cur + ')', op, cl + 1)
    bt('', 0, 0)
    return result


def decode_string(s: str) -> str:
    """🟡 Decode String (LC #394). '3[a2[c]]' → 'accaccacc'. O(n)."""
    count_stack: list[int] = []
    str_stack: list[str] = []
    cur, k = '', 0
    for ch in s:
        if ch.isdigit():
            k = k * 10 + int(ch)
        elif ch == '[':
            count_stack.append(k); str_stack.append(cur); cur = ''; k = 0
        elif ch == ']':
            cur = str_stack.pop() + cur * count_stack.pop()
        else:
            cur += ch
    return cur


def daily_temperatures(temps: list[int]) -> list[int]:
    """🟡 Daily Temperatures (LC #739) — monotonic decreasing stack. O(n)."""
    result = [0] * len(temps)
    stack: list[int] = []  # indices
    for i, t in enumerate(temps):
        while stack and t > temps[stack[-1]]:
            idx = stack.pop()
            result[idx] = i - idx
        stack.append(i)
    return result


def next_greater_element(nums1: list[int], nums2: list[int]) -> list[int]:
    """🟡 Next Greater Element I (LC #496) — monotonic stack + hash map. O(n)."""
    nge: dict[int, int] = {}
    stack: list[int] = []
    for n in nums2:
        while stack and n > stack[-1]:
            nge[stack.pop()] = n
        stack.append(n)
    for n in stack:
        nge[n] = -1
    return [nge[n] for n in nums1]


def asteroid_collision(asteroids: list[int]) -> list[int]:
    """🟡 Asteroid Collision (LC #735). O(n)."""
    stack: list[int] = []
    for a in asteroids:
        alive = True
        while alive and a < 0 and stack and stack[-1] > 0:
            if stack[-1] < -a:   stack.pop()
            elif stack[-1] == -a: stack.pop(); alive = False
            else:                 alive = False
        if alive: stack.append(a)
    return stack


def remove_k_digits(num: str, k: int) -> str:
    """🟡 Remove K Digits (LC #402) — monotonic increasing stack. O(n)."""
    stack: list[str] = []
    for d in num:
        while k and stack and stack[-1] > d:
            stack.pop(); k -= 1
        stack.append(d)
    result = ''.join(stack[:-k] if k else stack).lstrip('0')
    return result or '0'


# ── 🔴 Hard ───────────────────────────────────

def sliding_window_maximum(nums: list[int], k: int) -> list[int]:
    """🔴 Sliding Window Maximum (LC #239) — monotonic deque. O(n)."""
    dq: deque[int] = deque()  # indices, decreasing values
    result: list[int] = []
    for i, n in enumerate(nums):
        while dq and dq[0] < i - k + 1: dq.popleft()
        while dq and nums[dq[-1]] < n:  dq.pop()
        dq.append(i)
        if i >= k - 1: result.append(nums[dq[0]])
    return result


def largest_rectangle_histogram(heights: list[int]) -> int:
    """🔴 Largest Rectangle in Histogram (LC #84) — monotonic stack. O(n)."""
    stack: list[tuple[int,int]] = []
    best = 0
    for i, h in enumerate(heights + [0]):
        start = i
        while stack and stack[-1][1] > h:
            left, bar_h = stack.pop()
            best = max(best, bar_h * (i - left))
            start = left
        stack.append((start, h))
    return best


def basic_calculator(s: str) -> int:
    """🔴 Basic Calculator (LC #224) — stack for nested parens. O(n)."""
    stack: list[int] = []
    result = sign = 0
    sign = 1
    i = 0
    while i < len(s):
        ch = s[i]
        if ch.isdigit():
            num = 0
            while i < len(s) and s[i].isdigit():
                num = num * 10 + int(s[i]); i += 1
            result += sign * num; continue
        elif ch == '+': sign = 1
        elif ch == '-': sign = -1
        elif ch == '(': stack.append(result); stack.append(sign); result = 0; sign = 1
        elif ch == ')': result = stack.pop() * result + stack.pop()
        i += 1
    return result


# ══════════════════════════════════════
# PART 3 — TESTS
# ══════════════════════════════════════

def run_tests() -> None:
    print("Running stack/queue tests...\n")

    # Stack
    s = Stack()
    s.push(1); s.push(2); s.push(3)
    assert s.peek() == 3 and s.pop() == 3 and len(s) == 2
    print("  ✅ Stack: push / pop / peek")

    # Queue
    q = Queue()
    q.enqueue(1); q.enqueue(2); q.enqueue(3)
    assert q.dequeue() == 1 and q.peek() == 2
    print("  ✅ Queue: enqueue / dequeue / peek")

    # MinStack
    ms = MinStack()
    ms.push(5); ms.push(3); ms.push(7); ms.push(2)
    assert ms.get_min() == 2
    ms.pop()
    assert ms.get_min() == 3
    print("  ✅ MinStack: push / pop / get_min")

    # QueueViaStacks
    qvs = QueueViaStacks()
    qvs.enqueue(1); qvs.enqueue(2); qvs.enqueue(3)
    assert qvs.dequeue() == 1 and qvs.peek() == 2
    print("  ✅ QueueViaStacks: enqueue / dequeue / peek")

    # Valid Parens
    assert is_valid_parens("()[]{}")
    assert is_valid_parens("([])")
    assert not is_valid_parens("(]")
    assert not is_valid_parens("([)]")
    assert is_valid_parens("")
    print("  ✅ is_valid_parens: valid / nested / invalid / empty")

    # Backspace Compare
    assert backspace_compare("ab#c", "ad#c")
    assert backspace_compare("ab##", "c#d#")
    assert not backspace_compare("a#c", "b")
    print("  ✅ backspace_compare")

    # Eval RPN
    assert eval_rpn(["2","1","+","3","*"]) == 9
    assert eval_rpn(["4","13","5","/","+"]) == 6
    assert eval_rpn(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) == 22
    print("  ✅ eval_rpn: basic / division / complex")

    # Generate Parentheses
    assert sorted(generate_parentheses(3)) == sorted(["((()))","(()())","(())()","()(())","()()()"])
    assert generate_parentheses(1) == ["()"]
    print("  ✅ generate_parentheses: n=3 / n=1")

    # Decode String
    assert decode_string("3[a]2[bc]") == "aaabcbc"
    assert decode_string("3[a2[c]]") == "accaccacc"
    assert decode_string("2[abc]3[cd]ef") == "abcabccdcdcdef"
    print("  ✅ decode_string: basic / nested / mixed")

    # Daily Temperatures
    assert daily_temperatures([73,74,75,71,69,72,76,73]) == [1,1,4,2,1,1,0,0]
    assert daily_temperatures([30,40,50,60]) == [1,1,1,0]
    print("  ✅ daily_temperatures: standard / ascending")

    # Next Greater Element
    assert next_greater_element([4,1,2],[1,3,4,2]) == [-1,3,-1]
    assert next_greater_element([2,4],[1,2,3,4]) == [3,-1]
    print("  ✅ next_greater_element")

    # Asteroid Collision
    assert asteroid_collision([5,10,-5]) == [5,10]
    assert asteroid_collision([8,-8]) == []
    assert asteroid_collision([10,2,-5]) == [10]
    assert asteroid_collision([-2,-1,1,2]) == [-2,-1,1,2]
    print("  ✅ asteroid_collision: survive / destroy / chain / no collision")

    # Remove K Digits
    assert remove_k_digits("1432219", 3) == "1219"
    assert remove_k_digits("10200", 1) == "200"
    assert remove_k_digits("10", 2) == "0"
    print("  ✅ remove_k_digits: standard / leading zeros / all removed")

    # Sliding Window Maximum
    assert sliding_window_maximum([1,3,-1,-3,5,3,6,7], 3) == [3,3,5,5,6,7]
    assert sliding_window_maximum([1], 1) == [1]
    print("  ✅ sliding_window_maximum: standard / single")

    # Largest Rectangle Histogram
    assert largest_rectangle_histogram([2,1,5,6,2,3]) == 10
    assert largest_rectangle_histogram([2,4]) == 4
    print("  ✅ largest_rectangle_histogram")

    # Basic Calculator
    assert basic_calculator("1 + 1") == 2
    assert basic_calculator(" 2-1 + 2 ") == 3
    assert basic_calculator("(1+(4+5+2)-3)+(6+8)") == 23
    print("  ✅ basic_calculator: simple / spaces / nested parens")

    print("\n🎉 All stack/queue tests passed!")

if __name__ == "__main__":
    run_tests()
