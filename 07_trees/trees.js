"use strict";

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * TREES  ·  JavaScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * BST: left < node < right. O(log n) avg, O(n) worst.
 * Traversals: inorder(sorted), preorder, postorder, BFS level-order.
 */

// ┌─────────────────────────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                                               │
// ├─────────────────────────────────────────────────────────────────┤
// │ 1. TreeNode class                                               │
// │ 2. fromArray helper                                             │
// │ 3. BST class                                                    │
// │ 4. Traversals                                                   │
// │    - inorder, levelOrder                                        │
// │ 5. Problems                                                     │
// │    - maxDepth, invertTree, isSymmetric, isValidBST      🟢      │
// │    - lowestCommonAncestor, rightSideView, kthSmallest   🟡      │
// │    - buildTreeFromPreIn, diameterOfBinaryTree           🟡      │
// │    - isBalanced, zigzagLevelOrder                      🟡      │
// │    - maxPathSum                                         🔴      │
// │ 6. Tests                                                       │
// └─────────────────────────────────────────────────────────────────┘

class TreeNode {
  /**
   * @param {number} val
   */
  constructor(val) {
    this.val = val;
    /** @type {TreeNode|null} */
    this.left = null;
    /** @type {TreeNode|null} */
    this.right = null;
  }
}

// ── Build helper ───────────────────────────────

/** @param {(number|null)[]} vals
 * @returns {TreeNode|null}
 */
function fromArray(vals) {
  if (!vals.length || vals[0] == null) return null;
  const root = new TreeNode(vals[0]);
  const q = [root];
  let i = 1;
  while (q.length && i < vals.length) {
    const node = q.shift();
    if (i < vals.length && vals[i] != null) {
      node.left = new TreeNode(vals[i]);
      q.push(node.left);
    }
    i++;
    if (i < vals.length && vals[i] != null) {
      node.right = new TreeNode(vals[i]);
      q.push(node.right);
    }
    i++;
  }
  return root;
}

// ── BST ───────────────────────────────────────

class BST {
  constructor() {
    /** @type {TreeNode|null} */
    this.root = null;
  }

  /** @param {number} v */
  insert(v) {
    this.root = this._ins(this.root, v);
  }

  /** @param {TreeNode|null} n
   * @param {number} v
   * @returns {TreeNode}
   */
  _ins(n, v) {
    if (!n) return new TreeNode(v);
    if (v < n.val) n.left = this._ins(n.left, v);
    else if (v > n.val) n.right = this._ins(n.right, v);
    return n;
  }

  /** @returns {number[]} */
  inorder() {
    const r = [];
    const dfs = (n) => {
      if (!n) return;
      dfs(n.left);
      r.push(n.val);
      dfs(n.right);
    };
    dfs(this.root);
    return r;
  }
}

// ── Traversals ────────────────────────────────

/** @param {TreeNode|null} root
 * @returns {number[]}
 */
function inorder(root) {
  const r = [];
  const dfs = (n) => {
    if (!n) return;
    dfs(n.left);
    r.push(n.val);
    dfs(n.right);
  };
  dfs(root);
  return r;
}

/** @param {TreeNode|null} root
 * @returns {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];
  const res = [],
    q = [root];
  while (q.length) {
    const level = [],
      len = q.length;
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      level.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    res.push(level);
  }
  return res;
}

// ══════════════════════════════════════
// PROBLEMS
// ══════════════════════════════════════

/** 🟢 Maximum Depth of Binary Tree (LC #104)
 * @param {TreeNode|null} r
 * @returns {number}
 */
function maxDepth(r) {
  return r ? 1 + Math.max(maxDepth(r.left), maxDepth(r.right)) : 0;
}

/** 🟢 Invert Binary Tree (LC #226)
 * @param {TreeNode|null} r
 * @returns {TreeNode|null}
 */
function invertTree(r) {
  if (!r) return null;
  [r.left, r.right] = [invertTree(r.right), invertTree(r.left)];
  return r;
}

/** 🟢 Symmetric Tree (LC #101)
 * @param {TreeNode|null} r
 * @returns {boolean}
 */
function isSymmetric(r) {
  const m = (l, ri) =>
    !l && !ri ? true : !l || !ri ? false : l.val === ri.val && m(l.left, ri.right) && m(l.right, ri.left);
  return r ? m(r.left, r.right) : true;
}

/** 🟡 Lowest Common Ancestor (LC #236)
 * @param {TreeNode|null} r
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode|null}
 */
function lowestCommonAncestor(r, p, q) {
  if (!r || r === p || r === q) return r;
  const l = lowestCommonAncestor(r.left, p, q),
    ri = lowestCommonAncestor(r.right, p, q);
  return l && ri ? r : l ?? ri;
}

/** 🔴 Binary Tree Maximum Path Sum (LC #124)
 * @param {TreeNode|null} r
 * @returns {number}
 */
function maxPathSum(r) {
  let best = -Infinity;
  const g = (n) => {
    if (!n) return 0;
    const l = Math.max(g(n.left), 0),
      ri = Math.max(g(n.right), 0);
    best = Math.max(best, l + ri + n.val);
    return n.val + Math.max(l, ri);
  };
  g(r);
  return best;
}

/** 🟡 Binary Tree Right Side View (LC #199)
 * @param {TreeNode|null} r
 * @returns {number[]}
 */
function rightSideView(r) {
  const res = [];
  if (!r) return res;
  const q = [r];
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      if (i === len - 1) res.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }
  return res;
}

/** 🟡 Kth Smallest Element in BST (LC #230)
 * @param {TreeNode|null} r
 * @param {number} k
 * @returns {number}
 */
function kthSmallest(r, k) {
  const stack = [];
  let cur = r,
    cnt = 0;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (++cnt === k) return cur.val;
    cur = cur.right;
  }
  return -1;
}

/** 🟢 Validate Binary Search Tree (LC #98)
 * @param {TreeNode|null} r
 * @returns {boolean}
 */
function isValidBST(r) {
  const v = (n, lo, hi) =>
    !n ? true : n.val > lo && n.val < hi && v(n.left, lo, n.val) && v(n.right, n.val, hi);
  return v(r, -Infinity, Infinity);
}

/** 🟡 Construct Binary Tree from Preorder and Inorder (LC #105)
 * @param {number[]} pre
 * @param {number[]} ino
 * @returns {TreeNode|null}
 */
function buildTreeFromPreIn(pre, ino) {
  if (!pre.length) return null;
  const root = new TreeNode(pre[0]),
    mid = ino.indexOf(pre[0]);
  root.left = buildTreeFromPreIn(pre.slice(1, mid + 1), ino.slice(0, mid));
  root.right = buildTreeFromPreIn(pre.slice(mid + 1), ino.slice(mid + 1));
  return root;
}

/** 🟢 Diameter of Binary Tree (LC #543)
 * @param {TreeNode|null} r
 * @returns {number}
 */
function diameterOfBinaryTree(r) {
  let best = 0;
  const h = (n) => {
    if (!n) return 0;
    const l = h(n.left),
      ri = h(n.right);
    best = Math.max(best, l + ri);
    return 1 + Math.max(l, ri);
  };
  h(r);
  return best;
}

/** 🟡 Balanced Binary Tree (LC #110)
 * @param {TreeNode|null} r
 * @returns {boolean}
 */
function isBalanced(r) {
  const h = (n) => {
    if (!n) return 0;
    const l = h(n.left),
      ri = h(n.right);
    if (l < 0 || ri < 0 || Math.abs(l - ri) > 1) return -1;
    return 1 + Math.max(l, ri);
  };
  return h(r) >= 0;
}

/** 🟡 Binary Tree Zigzag Level Order (LC #103)
 * @param {TreeNode|null} r
 * @returns {number[][]}
 */
function zigzagLevelOrder(r) {
  const res = [];
  if (!r) return res;
  const q = [r];
  let leftToRight = true;
  while (q.length) {
    const len = q.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      leftToRight ? level.push(n.val) : level.unshift(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    res.push(level);
    leftToRight = !leftToRight;
  }
  return res;
}

// ══════════════════════════════════════
// TESTS
// ══════════════════════════════════════

/** @param {boolean} c
 * @param {string} m
 */
function assert(c, m) {
  if (!c) throw new Error(`FAIL: ${m}`);
}

/** @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  console.log("Running tree tests...\n");

  const bst = new BST();
  [5, 3, 7, 1, 4, 6, 8].forEach((v) => bst.insert(v));
  assert(eq(bst.inorder(), [1, 3, 4, 5, 6, 7, 8]), "bst inorder");
  console.log("  ✅ BST: insert / inorder");

  const t = fromArray([3, 9, 20, null, null, 15, 7]);
  assert(maxDepth(t) === 3, "maxDepth");
  assert(eq(levelOrder(t), [[3], [9, 20], [15, 7]]), "levelOrder");
  console.log("  ✅ maxDepth / levelOrder");

  const inv = fromArray([4, 2, 7, 1, 3, 6, 9]);
  invertTree(inv);
  assert(inorder(inv)[0] === 9, "invertTree");
  console.log("  ✅ invertTree");

  assert(isSymmetric(fromArray([1, 2, 2, 3, 4, 4, 3])), "symmetric");
  assert(!isSymmetric(fromArray([1, 2, 2, null, 3, null, 3])), "asymmetric");
  console.log("  ✅ isSymmetric");

  assert(isValidBST(fromArray([2, 1, 3])), "validBST");
  assert(!isValidBST(fromArray([5, 1, 4, null, null, 3, 6])), "invalidBST");
  console.log("  ✅ isValidBST");

  assert(maxPathSum(fromArray([-10, 9, 20, null, null, 15, 7])) === 42, "maxPathSum");
  console.log("  ✅ maxPathSum");

  assert(eq(rightSideView(fromArray([1, 2, 3, null, 5, null, 4])), [1, 3, 4]), "rightSideView");
  console.log("  ✅ rightSideView");

  const bst3 = new BST();
  [3, 1, 4, null, 2].forEach((v) => v != null && bst3.insert(v));
  assert(kthSmallest(bst3.root, 1) === 1, "kthSmallest");
  console.log("  ✅ kthSmallest");

  assert(diameterOfBinaryTree(fromArray([1, 2, 3, 4, 5])) === 3, "diameter");
  console.log("  ✅ diameterOfBinaryTree");

  assert(isBalanced(fromArray([3, 9, 20, null, null, 15, 7])), "balanced");
  assert(!isBalanced(fromArray([1, 2, 2, 3, 3, null, null, 4, 4])), "unbalanced");
  console.log("  ✅ isBalanced");

  assert(
    eq(
      buildTreeFromPreIn([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]),
      fromArray([3, 9, 20, null, null, 15, 7])
    ),
    "buildFromPreIn"
  );
  console.log("  ✅ buildFromPreIn");

  assert(
    eq(zigzagLevelOrder(fromArray([3, 9, 20, null, null, 15, 7])), [
      [3],
      [20, 9],
      [15, 7],
    ]),
    "zigzag"
  );
  console.log("  ✅ zigzagLevelOrder");

  console.log("\n✓ trees — all tests passed");
}
runTests();
