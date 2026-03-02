"use strict";

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * STACKS & QUEUES  ·  JavaScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

// ┌─────────────────────────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                                               │
// ├─────────────────────────────────────────────────────────────────┤
// │ 1. Stack class                                                  │
// │ 2. Queue class                                                  │
// │ 3. MinStack class                                               │
// │ 4. Problems                                                     │
// │    - isValidParens             (LC #20)   🟢                    │
// │    - backspaceCompare          (LC #844)  🟢                    │
// │    - evalRPN                   (LC #150)  🟡                    │
// │    - generateParentheses       (LC #22)   🟡                    │
// │    - decodeString              (LC #394)  🟡                    │
// │    - dailyTemperatures         (LC #739)  🟡                    │
// │    - nextGreaterElement        (LC #496)  🟡                    │
// │    - asteroidCollision         (LC #735)  🟡                    │
// │    - removeKDigits             (LC #402)  🟡                    │
// │    - slidingWindowMaximum      (LC #239)  🔴                    │
// │    - largestRectangleHistogram (LC #84)   🔴                    │
// │ 5. Tests                                                       │
// └─────────────────────────────────────────────────────────────────┘

// ══════════════════════════════════════
// PART 1 — IMPLEMENTATIONS
// ══════════════════════════════════════

/** @template T */
class Stack {
  /** @type {T[]} */
  #data = [];

  /** @param {T} val */
  push(val) {
    this.#data.push(val);
  }

  /** @returns {T} */
  pop() {
    return this.#data.pop();
  }

  /** @returns {T} */
  peek() {
    return this.#data[this.#data.length - 1];
  }

  /** @returns {boolean} */
  isEmpty() {
    return this.#data.length === 0;
  }

  /** @returns {number} */
  get size() {
    return this.#data.length;
  }
}

/** @template T */
class Queue {
  /** @type {T[]} */
  #inbox = [];
  /** @type {T[]} */
  #outbox = [];

  /** @param {T} val */
  enqueue(val) {
    this.#inbox.push(val);
  }

  /** @returns {T} */
  dequeue() {
    if (!this.#outbox.length) {
      while (this.#inbox.length) this.#outbox.push(this.#inbox.pop());
    }
    return this.#outbox.pop();
  }

  /** @returns {T} */
  peek() {
    if (!this.#outbox.length) {
      while (this.#inbox.length) this.#outbox.push(this.#inbox.pop());
    }
    return this.#outbox[this.#outbox.length - 1];
  }

  /** @returns {boolean} */
  isEmpty() {
    return !this.#inbox.length && !this.#outbox.length;
  }
}

class MinStack {
  /** @type {number[]} */
  #stack = [];
  /** @type {number[]} */
  #mins = [];

  /** @param {number} val */
  push(val) {
    this.#stack.push(val);
    this.#mins.push(
      this.#mins.length ? Math.min(val, this.#mins[this.#mins.length - 1]) : val
    );
  }

  /** @returns {number} */
  pop() {
    this.#mins.pop();
    return this.#stack.pop();
  }

  /** @returns {number} */
  top() {
    return this.#stack[this.#stack.length - 1];
  }

  /** @returns {number} */
  getMin() {
    return this.#mins[this.#mins.length - 1];
  }
}

// ══════════════════════════════════════
// PART 2 — INTERVIEW PROBLEMS
// ══════════════════════════════════════

/** 🟢 Valid Parentheses (LC #20)
 * @param {string} s
 * @returns {boolean}
 */
function isValidParens(s) {
  const stack = [];
  const match = { ")": "(", "}": "{", "]": "[" };
  for (const ch of s) {
    if ("({[".includes(ch)) stack.push(ch);
    else if (!stack.length || stack[stack.length - 1] !== match[ch]) return false;
    else stack.pop();
  }
  return stack.length === 0;
}

/** 🟢 Backspace String Compare (LC #844)
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function backspaceCompare(s, t) {
  const process = (str) => {
    const stack = [];
    for (const ch of str) {
      if (ch !== "#") stack.push(ch);
      else stack.pop();
    }
    return stack.join("");
  };
  return process(s) === process(t);
}

/** 🟡 Evaluate Reverse Polish Notation (LC #150)
 * @param {string[]} tokens
 * @returns {number}
 */
function evalRPN(tokens) {
  const stack = [];
  for (const t of tokens) {
    if (["+", "-", "*", "/"].includes(t)) {
      const b = stack.pop(),
        a = stack.pop();
      if (t === "+") stack.push(a + b);
      else if (t === "-") stack.push(a - b);
      else if (t === "*") stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else stack.push(parseInt(t, 10));
  }
  return stack[0];
}

/** 🟡 Generate Parentheses (LC #22)
 * @param {number} n
 * @returns {string[]}
 */
function generateParentheses(n) {
  const result = [];
  const bt = (cur, op, cl) => {
    if (cur.length === 2 * n) {
      result.push(cur);
      return;
    }
    if (op < n) bt(cur + "(", op + 1, cl);
    if (cl < op) bt(cur + ")", op, cl + 1);
  };
  bt("", 0, 0);
  return result;
}

/** 🟡 Decode String (LC #394)
 * @param {string} s
 * @returns {string}
 */
function decodeString(s) {
  const countStack = [],
    strStack = [];
  let cur = "",
    k = 0;
  for (const ch of s) {
    if (!isNaN(parseInt(ch, 10))) {
      k = k * 10 + parseInt(ch, 10);
    } else if (ch === "[") {
      countStack.push(k);
      strStack.push(cur);
      cur = "";
      k = 0;
    } else if (ch === "]") {
      cur = strStack.pop() + cur.repeat(countStack.pop());
    } else {
      cur += ch;
    }
  }
  return cur;
}

/** 🟡 Daily Temperatures (LC #739) — monotonic stack
 * @param {number[]} temps
 * @returns {number[]}
 */
function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
}

/** 🟡 Next Greater Element I (LC #496)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  const nge = new Map();
  const stack = [];
  for (const n of nums2) {
    while (stack.length && n > stack[stack.length - 1]) nge.set(stack.pop(), n);
    stack.push(n);
  }
  for (const n of stack) nge.set(n, -1);
  return nums1.map((n) => nge.get(n));
}

/** 🟡 Asteroid Collision (LC #735)
 * @param {number[]} asteroids
 * @returns {number[]}
 */
function asteroidCollision(asteroids) {
  const stack = [];
  for (const a of asteroids) {
    let alive = true;
    while (alive && a < 0 && stack.length && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];
      if (top < -a) stack.pop();
      else if (top === -a) {
        stack.pop();
        alive = false;
      } else alive = false;
    }
    if (alive) stack.push(a);
  }
  return stack;
}

/** 🟡 Remove K Digits (LC #402)
 * @param {string} num
 * @param {number} k
 * @returns {string}
 */
function removeKDigits(num, k) {
  const stack = [];
  for (const d of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > d) {
      stack.pop();
      k--;
    }
    stack.push(d);
  }
  const result = (k > 0 ? stack.slice(0, -k) : stack).join("").replace(/^0+/, "");
  return result || "0";
}

/** 🔴 Sliding Window Maximum (LC #239) — monotonic deque
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function slidingWindowMaximum(nums, k) {
  const result = [],
    dq = [];
  for (let i = 0; i < nums.length; i++) {
    while (dq.length && dq[0] < i - k + 1) dq.shift();
    while (dq.length && nums[dq[dq.length - 1]] < nums[i]) dq.pop();
    dq.push(i);
    if (i >= k - 1) result.push(nums[dq[0]]);
  }
  return result;
}

/** 🔴 Largest Rectangle in Histogram (LC #84)
 * @param {number[]} heights
 * @returns {number}
 */
function largestRectangleHistogram(heights) {
  const stack = [];
  let best = 0;
  for (let i = 0; i <= heights.length; i++) {
    const h = i < heights.length ? heights[i] : 0;
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      const [left, barH] = stack.pop();
      best = Math.max(best, barH * (i - left));
      start = left;
    }
    stack.push([start, h]);
  }
  return best;
}

// ══════════════════════════════════════
// PART 3 — TESTS
// ══════════════════════════════════════

/**
 * @param {boolean} cond
 * @param {string} msg
 */
function assert(cond, msg) {
  if (!cond) throw new Error(`FAIL: ${msg}`);
}

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runTests() {
  console.log("Running stack/queue tests...\n");

  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  assert(s.peek() === 3 && s.pop() === 3 && s.size === 2, "Stack");
  console.log("  ✅ Stack");

  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  assert(q.dequeue() === 1 && q.peek() === 2, "Queue");
  console.log("  ✅ Queue");

  const ms = new MinStack();
  ms.push(5);
  ms.push(3);
  ms.push(7);
  ms.push(2);
  assert(ms.getMin() === 2, "MinStack min");
  ms.pop();
  assert(ms.getMin() === 3, "MinStack after pop");
  console.log("  ✅ MinStack");

  assert(isValidParens("()[]{}"), "valid parens 1");
  assert(isValidParens("([])"), "valid parens 2");
  assert(!isValidParens("(]"), "invalid parens 1");
  assert(isValidParens(""), "empty parens");
  console.log("  ✅ isValidParens");

  assert(backspaceCompare("ab#c", "ad#c"), "backspace 1");
  assert(!backspaceCompare("a#c", "b"), "backspace 2");
  console.log("  ✅ backspaceCompare");

  assert(evalRPN(["2", "1", "+", "3", "*"]) === 9, "rpn 1");
  assert(evalRPN(["4", "13", "5", "/", "+"]) === 6, "rpn 2");
  console.log("  ✅ evalRPN");

  assert(deepEq(generateParentheses(1), ["()"]), "gen parens n=1");
  assert(generateParentheses(3).length === 5, "gen parens n=3 count");
  console.log("  ✅ generateParentheses");

  assert(decodeString("3[a2[c]]") === "accaccacc", "decode nested");
  assert(decodeString("3[a]2[bc]") === "aaabcbc", "decode basic");
  console.log("  ✅ decodeString");

  assert(
    deepEq(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]),
    "daily temps"
  );
  console.log("  ✅ dailyTemperatures");

  assert(
    deepEq(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]),
    "nge"
  );
  console.log("  ✅ nextGreaterElement");

  assert(deepEq(asteroidCollision([5, 10, -5]), [5, 10]), "asteroids 1");
  assert(deepEq(asteroidCollision([8, -8]), []), "asteroids 2");
  assert(deepEq(asteroidCollision([10, 2, -5]), [10]), "asteroids 3");
  console.log("  ✅ asteroidCollision");

  assert(removeKDigits("1432219", 3) === "1219", "remove k 1");
  assert(removeKDigits("10200", 1) === "200", "remove k 2");
  assert(removeKDigits("10", 2) === "0", "remove k 3");
  console.log("  ✅ removeKDigits");

  assert(
    deepEq(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]),
    "sw max"
  );
  console.log("  ✅ slidingWindowMaximum");

  assert(largestRectangleHistogram([2, 1, 5, 6, 2, 3]) === 10, "histogram");
  assert(largestRectangleHistogram([2, 4]) === 4, "histogram 2");
  console.log("  ✅ largestRectangleHistogram");

  console.log("\n✓ stacks_queues — all tests passed");
}

runTests();
