/**
 * TRIES  ·  TypeScript
 * Trie, WildcardTrie, autocomplete, replace words, word search II.
 */
export class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
  count = 0;
}

export class Trie {
  root = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) node.children.set(c, new TrieNode());
      node = node.children.get(c)!; node.count++;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const c of word) { if (!node.children.has(c)) return false; node = node.children.get(c)!; }
    return node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const c of prefix) { if (!node.children.has(c)) return false; node = node.children.get(c)!; }
    return true;
  }

  autocomplete(prefix: string): string[] {
    let node = this.root;
    for (const c of prefix) { if (!node.children.has(c)) return []; node = node.children.get(c)!; }
    const results: string[] = [];
    const dfs = (n: TrieNode, cur: string) => {
      if (n.isEnd) results.push(cur);
      for (const [c, child] of [...n.children.entries()].sort()) dfs(child, cur+c);
    };
    dfs(node, prefix); return results;
  }

  delete(word: string): boolean {
    const del = (node: TrieNode, i: number): boolean => {
      if (i === word.length) { if (!node.isEnd) return false; node.isEnd = false; return node.children.size === 0; }
      const c = word[i]; if (!node.children.has(c)) return false;
      const shouldDel = del(node.children.get(c)!, i+1);
      if (shouldDel) node.children.delete(c);
      return shouldDel && !node.isEnd && node.children.size === 0;
    };
    return del(this.root, 0);
  }
}
