"use strict";
/**
 * TRIES  ·  JavaScript
 * Trie, WildcardTrie, autocomplete, replace words, word search II.
 */

// ┌─────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                           │
// ├─────────────────────────────────────────────┤
// │ 1. TrieNode class                           │
// │ 2. Trie class                               │
// │ 3. WildcardTrie class                       │
// │ 4. Problems                                 │
// │    - replaceWords               (LC #648) 🟡│
// │    - wordSearchII               (LC #212) 🔴│
// │    - longestWordInDictionary    (LC #720) 🟡│
// │ 5. Tests                                    │
// └─────────────────────────────────────────────┘

// ══════════════════════════════════════
// ── TrieNode class ──────────────────────
// ══════════════════════════════════════

/** @typedef {{ children: Map<string, TrieNode>, isEnd: boolean, count: number }} TrieNode */

class TrieNode {
  /** @type {Map<string, TrieNode>} */
  children = new Map();
  /** @type {boolean} */
  isEnd = false;
  /** @type {number} */
  count = 0;
}

// ══════════════════════════════════════
// ── Trie class ──────────────────────
// ══════════════════════════════════════

class Trie {
  /** @type {TrieNode} */
  root = new TrieNode();

  /**
   * @param {string} word
   */
  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) node.children.set(c, new TrieNode());
      node = node.children.get(c);
      node.count++;
    }
    node.isEnd = true;
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) return false;
      node = node.children.get(c);
    }
    return node.isEnd;
  }

  /**
   * @param {string} prefix
   * @returns {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children.has(c)) return false;
      node = node.children.get(c);
    }
    return true;
  }

  /**
   * @param {string} prefix
   * @returns {string[]}
   */
  autocomplete(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children.has(c)) return [];
      node = node.children.get(c);
    }
    const results = [];
    const dfs = (n, cur) => {
      if (n.isEnd) results.push(cur);
      for (const [c, child] of [...n.children.entries()].sort()) dfs(child, cur + c);
    };
    dfs(node, prefix);
    return results;
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  delete(word) {
    const del = (node, i) => {
      if (i === word.length) {
        if (!node.isEnd) return false;
        node.isEnd = false;
        return node.children.size === 0;
      }
      const c = word[i];
      if (!node.children.has(c)) return false;
      const shouldDel = del(node.children.get(c), i + 1);
      if (shouldDel) node.children.delete(c);
      return shouldDel && !node.isEnd && node.children.size === 0;
    };
    return del(this.root, 0);
  }
}

// ══════════════════════════════════════
// ── WildcardTrie class ──────────────────────
// ══════════════════════════════════════

class WildcardTrie {
  /** @type {TrieNode} */
  root = new TrieNode();

  /**
   * @param {string} word
   */
  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) node.children.set(c, new TrieNode());
      node = node.children.get(c);
    }
    node.isEnd = true;
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    const dfs = (node, i) => {
      if (i === word.length) return node.isEnd;
      const c = word[i];
      if (c === ".") return [...node.children.values()].some((child) => dfs(child, i + 1));
      return node.children.has(c) ? dfs(node.children.get(c), i + 1) : false;
    };
    return dfs(this.root, 0);
  }
}

// ══════════════════════════════════════
// ── Problems ──────────────────────
// ══════════════════════════════════════

/**
 * 🟡 Replace Words (LC #648) — replace with shortest root
 * @param {string[]} dictionary
 * @param {string} sentence
 * @returns {string}
 */
function replaceWords(dictionary, sentence) {
  const t = new Trie();
  dictionary.forEach((r) => t.insert(r));
  return sentence
    .split(" ")
    .map((word) => {
      let node = t.root;
      let replacement = "";
      for (const c of word) {
        if (!node.children.has(c)) break;
        node = node.children.get(c);
        replacement += c;
        if (node.isEnd) break;
      }
      return node.isEnd ? replacement : word;
    })
    .join(" ");
}

/**
 * 🔴 Word Search II (LC #212) — Trie + DFS backtracking
 * @param {string[][]} board
 * @param {string[]} words
 * @returns {string[]}
 */
function wordSearchII(board, words) {
  const t = new Trie();
  words.forEach((w) => t.insert(w));
  const rows = board.length;
  const cols = board[0].length;
  const found = new Set();
  const dfs = (node, r, c, path) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || !node.children.has(board[r][c])) return;
    const ch = board[r][c];
    node = node.children.get(ch);
    path += ch;
    if (node.isEnd) found.add(path);
    board[r][c] = "#";
    for (const [dr, dc] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ])
      dfs(node, r + dr, c + dc, path);
    board[r][c] = ch;
  };
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) dfs(t.root, r, c, "");
  return [...found];
}

/**
 * 🟡 Longest Word in Dictionary (LC #720)
 * @param {string[]} words
 * @returns {string}
 */
function longestWordInDictionary(words) {
  const t = new Trie();
  words.forEach((w) => t.insert(w));
  let best = "";
  const dfs = (node, cur) => {
    if (cur.length > best.length || (cur.length === best.length && cur < best)) best = cur;
    for (const [c, child] of [...node.children.entries()].sort())
      if (child.isEnd) dfs(child, cur + c);
  };
  dfs(t.root, "");
  return best;
}

// ══════════════════════════════════════
// ── Tests ──────────────────────
// ══════════════════════════════════════

function runTests() {
  const t = new Trie();
  ["apple", "app", "application", "apply"].forEach((w) => t.insert(w));
  console.assert(t.search("apple") && t.search("app"), "search found");
  console.assert(!t.search("ap") && !t.search("apples"), "search not found");
  console.assert(t.startsWith("app") && !t.startsWith("xyz"), "startsWith");

  const autocompleteResult = t.autocomplete("app");
  console.assert(
    JSON.stringify(autocompleteResult.sort()) === JSON.stringify(["app", "apple", "application", "apply"].sort()),
    "autocomplete"
  );

  t.delete("app");
  console.assert(!t.search("app") && t.search("apple"), "delete");

  const wt = new WildcardTrie();
  ["bad", "dad", "mad"].forEach((w) => wt.insert(w));
  console.assert(wt.search("bad") && wt.search(".ad") && wt.search("b.."), "wildcard match");
  console.assert(!wt.search("pad") && !wt.search("ba"), "wildcard no match");

  console.assert(
    replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery") === "the cat was rat by the bat",
    "replaceWords"
  );

  const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
  const found = new Set(wordSearchII(board, ["oath", "pea", "eat", "rain"]));
  console.assert(found.has("oath") && found.has("eat"), "wordSearch");

  console.assert(longestWordInDictionary(["w", "wo", "wor", "worl", "world"]) === "world", "longest");

  console.log("✓ tries — all tests passed");
}

runTests();
