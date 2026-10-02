import { Trie } from '../../fundamentals/trie/solution.js';

/**
 * 🟡 Replace Words (LC #648) — replace with shortest root
 * @param {string[]} dictionary
 * @param {string} sentence
 * @returns {string}
 */
export function replaceWords(dictionary, sentence) {
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
