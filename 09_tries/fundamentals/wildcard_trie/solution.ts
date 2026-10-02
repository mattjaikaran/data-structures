import { TrieNode } from '../../fundamentals/trie/solution.ts';

export class WildcardTrie {
  root = new TrieNode();
  insert(word: string): void {
    let node = this.root;
    for (const c of word) { if (!node.children.has(c)) node.children.set(c, new TrieNode()); node = node.children.get(c)!; }
    node.isEnd = true;
  }
  search(word: string): boolean {
    const dfs = (node: TrieNode, i: number): boolean => {
      if (i === word.length) return node.isEnd;
      const c = word[i];
      if (c === '.') return [...node.children.values()].some(child => dfs(child, i+1));
      return node.children.has(c) ? dfs(node.children.get(c)!, i+1) : false;
    };
    return dfs(this.root, 0);
  }
}
