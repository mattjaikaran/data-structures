import { TrieNode } from '../../fundamentals/trie/solution.js';

export class WildcardTrie {
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
