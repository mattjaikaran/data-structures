/** @typedef {{ children: Map<string, TrieNode>, isEnd: boolean, count: number }} TrieNode */
export class TrieNode {
  /** @type {Map<string, TrieNode>} */
  children = new Map();
  /** @type {boolean} */
  isEnd = false;
  /** @type {number} */
  count = 0;
}

export class Trie {
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
