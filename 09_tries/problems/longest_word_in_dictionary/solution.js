import { Trie } from '../../fundamentals/trie/solution.js';

/**
 * 🟡 Longest Word in Dictionary (LC #720)
 * @param {string[]} words
 * @returns {string}
 */
export function longestWordInDictionary(words) {
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
