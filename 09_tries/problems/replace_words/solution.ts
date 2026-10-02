import { Trie } from '../../fundamentals/trie/solution.ts';

export function replaceWords(dictionary: string[], sentence: string): string {
  const t = new Trie(); dictionary.forEach(r => t.insert(r));
  return sentence.split(' ').map(word => {
    let node = t.root, replacement = '';
    for (const c of word) {
      if (!node.children.has(c)) break;
      node = node.children.get(c)!; replacement += c;
      if (node.isEnd) break;
    }
    return node.isEnd ? replacement : word;
  }).join(' ');
}
