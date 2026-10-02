import { Trie, TrieNode } from '../../fundamentals/trie/solution.ts';

export function longestWordInDictionary(words: string[]): string {
  const t = new Trie(); words.forEach(w => t.insert(w));
  let best = '';
  const dfs = (node: TrieNode, cur: string) => {
    if (cur.length > best.length || (cur.length === best.length && cur < best)) best = cur;
    for (const [c, child] of [...node.children.entries()].sort()) if (child.isEnd) dfs(child, cur+c);
  };
  dfs(t.root, ''); return best;
}
