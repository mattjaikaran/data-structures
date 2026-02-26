/**
 * TRIES  ·  TypeScript
 * Trie, WildcardTrie, autocomplete, replace words, word search II.
 */

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
  count = 0;
}

class Trie {
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

class WildcardTrie {
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

// ── Problems ──────────────────────────────────
function replaceWords(dictionary: string[], sentence: string): string {
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

function wordSearchII(board: string[][], words: string[]): string[] {
  const t = new Trie(); words.forEach(w => t.insert(w));
  const rows = board.length, cols = board[0].length, found = new Set<string>();
  const dfs = (node: TrieNode, r: number, c: number, path: string) => {
    if (r<0||r>=rows||c<0||c>=cols||!node.children.has(board[r][c])) return;
    const ch = board[r][c]; node = node.children.get(ch)!; path += ch;
    if (node.isEnd) found.add(path);
    board[r][c] = '#';
    for (const [dr,dc] of [[0,1],[0,-1],[1,0],[-1,0]]) dfs(node, r+dr, c+dc, path);
    board[r][c] = ch;
  };
  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) dfs(t.root, r, c, '');
  return [...found];
}

function longestWordInDictionary(words: string[]): string {
  const t = new Trie(); words.forEach(w => t.insert(w));
  let best = '';
  const dfs = (node: TrieNode, cur: string) => {
    if (cur.length > best.length || (cur.length === best.length && cur < best)) best = cur;
    for (const [c, child] of [...node.children.entries()].sort()) if (child.isEnd) dfs(child, cur+c);
  };
  dfs(t.root, ''); return best;
}

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string) { if (!c) throw new Error(`FAIL: ${m}`); }
const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  console.log("Running trie tests...\n");

  const t = new Trie();
  ["apple","app","application","apply"].forEach(w => t.insert(w));
  assert(t.search("apple")&&t.search("app"),"search found");
  assert(!t.search("ap")&&!t.search("apples"),"search not found");
  assert(t.startsWith("app")&&!t.startsWith("xyz"),"startsWith");
  console.log("  ✅ Trie: insert / search / startsWith");

  assert(eq(t.autocomplete("app"),["app","apple","application","apply"]),"autocomplete");
  console.log("  ✅ Trie: autocomplete");

  t.delete("app");
  assert(!t.search("app")&&t.search("apple"),"delete");
  console.log("  ✅ Trie: delete");

  const wt = new WildcardTrie();
  ["bad","dad","mad"].forEach(w => wt.insert(w));
  assert(wt.search("bad")&&wt.search(".ad")&&wt.search("b.."),"wildcard match");
  assert(!wt.search("pad")&&!wt.search("ba"),"wildcard no match");
  console.log("  ✅ WildcardTrie: exact / wildcard / mismatch");

  assert(replaceWords(["cat","bat","rat"],"the cattle was rattled by the battery")==="the cat was rat by the bat","replaceWords");
  console.log("  ✅ replaceWords");

  const board=[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
  const found=new Set(wordSearchII(board,["oath","pea","eat","rain"]));
  assert(found.has("oath")&&found.has("eat"),"wordSearch");
  console.log("  ✅ wordSearchII");

  assert(longestWordInDictionary(["w","wo","wor","worl","world"])==="world","longest");
  console.log("  ✅ longestWordInDictionary");

  console.log("\n🎉 All trie tests passed!");
}
runTests();
export { TrieNode, Trie, WildcardTrie, replaceWords, wordSearchII, longestWordInDictionary };
