/**
 * BACKTRACKING  ·  TypeScript
 * Choose → explore → unchoose. Prune early.
 */

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const bt = (start: number, path: number[]) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); bt(i + 1, path); path.pop();
    }
  };
  bt(0, []); return result;
}

function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const bt = (start: number, path: number[]) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i-1]) continue;
      path.push(nums[i]); bt(i + 1, path); path.pop();
    }
  };
  bt(0, []); return result;
}

function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  const bt = (start: number, path: number[], rem: number) => {
    if (rem === 0) { result.push([...path]); return; }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > rem) break;
      path.push(candidates[i]); bt(i, path, rem - candidates[i]); path.pop();
    }
  };
  bt(0, [], target); return result;
}

function permutations(nums: number[]): number[][] {
  const result: number[][] = [];
  const used = new Array(nums.length).fill(false);
  const bt = (path: number[]) => {
    if (path.length === nums.length) { result.push([...path]); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true; path.push(nums[i]); bt(path); path.pop(); used[i] = false;
    }
  };
  bt([]); return result;
}

function nQueens(n: number): string[][] {
  const result: string[][] = [];
  const cols = new Set<number>(), d1 = new Set<number>(), d2 = new Set<number>();
  const bt = (row: number, board: string[][]) => {
    if (row === n) { result.push(board.map(r => r.join(''))); return; }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || d1.has(row-col) || d2.has(row+col)) continue;
      cols.add(col); d1.add(row-col); d2.add(row+col);
      board[row][col] = 'Q'; bt(row+1, board); board[row][col] = '.';
      cols.delete(col); d1.delete(row-col); d2.delete(row+col);
    }
  };
  bt(0, Array.from({length:n}, () => Array(n).fill('.'))); return result;
}

function wordSearch(board: string[][], word: string): boolean {
  const [rows, cols] = [board.length, board[0].length];
  const dfs = (r: number, c: number, i: number): boolean => {
    if (i === word.length) return true;
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) return false;
    const tmp = board[r][c]; board[r][c] = '#';
    const found = [[0,1],[0,-1],[1,0],[-1,0]].some(([dr,dc]) => dfs(r+dr,c+dc,i+1));
    board[r][c] = tmp; return found;
  };
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (dfs(r,c,0)) return true;
  return false;
}

function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const phone: Record<string,string> = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
  const result: string[] = [];
  const bt = (i: number, path: string[]) => {
    if (i === digits.length) { result.push(path.join('')); return; }
    for (const c of phone[digits[i]]) { path.push(c); bt(i+1,path); path.pop(); }
  };
  bt(0, []); return result;
}

function palindromePartitioning(s: string): string[][] {
  const result: string[][] = [];
  const isPal = (sub: string) => sub === sub.split('').reverse().join('');
  const bt = (start: number, path: string[]) => {
    if (start === s.length) { result.push([...path]); return; }
    for (let end = start+1; end <= s.length; end++) {
      const sub = s.slice(start,end);
      if (isPal(sub)) { path.push(sub); bt(end,path); path.pop(); }
    }
  };
  bt(0, []); return result;
}

function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  const bt = (start: number, parts: string[]) => {
    if (parts.length === 4) { if (start === s.length) result.push(parts.join('.')); return; }
    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) break;
      const seg = s.slice(start, start+len);
      if (seg.length > 1 && seg[0] === '0') break;
      if (parseInt(seg) > 255) break;
      parts.push(seg); bt(start+len, parts); parts.pop();
    }
  };
  bt(0, []); return result;
}

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string) { if (!c) throw new Error(`FAIL: ${m}`); }
const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  console.log("Running backtracking tests...\n");

  assert(subsets([1,2,3]).length === 8, "subsets count");
  assert(subsets([1,2,3]).some(s => s.length === 0), "subsets has empty");
  console.log("  ✅ subsets");

  assert(subsetsWithDup([1,2,2]).length === 6, "subsetsWithDup");
  console.log("  ✅ subsetsWithDup");

  const cs = combinationSum([2,3,6,7], 7);
  assert(cs.length === 2 && cs.some(c => eq(c,[7])), "combinationSum");
  console.log("  ✅ combinationSum");

  assert(permutations([1,2,3]).length === 6, "permutations");
  console.log("  ✅ permutations");

  assert(nQueens(4).length === 2, "nQueens 4x4");
  console.log("  ✅ nQueens");

  const grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
  assert(wordSearch(grid.map(r=>[...r]), "ABCCED"), "wordSearch found");
  assert(!wordSearch(grid.map(r=>[...r]), "ABCB"), "wordSearch not found");
  console.log("  ✅ wordSearch");

  assert(eq(letterCombinations("23").sort(), ["ad","ae","af","bd","be","bf","cd","ce","cf"].sort()), "letterCombinations");
  console.log("  ✅ letterCombinations");

  const pp = palindromePartitioning("aab");
  assert(pp.some(p => eq(p,["a","a","b"])) && pp.some(p => eq(p,["aa","b"])), "palindromePartitioning");
  console.log("  ✅ palindromePartitioning");

  const ip = restoreIpAddresses("25525511135");
  assert(ip.includes("255.255.11.135") && ip.includes("255.255.111.35"), "restoreIp");
  console.log("  ✅ restoreIpAddresses");

  console.log("\n🎉 All backtracking tests passed!");
}
runTests();
export { subsets, subsetsWithDup, combinationSum, permutations, nQueens, wordSearch, letterCombinations, palindromePartitioning, restoreIpAddresses };
