/**
 * HASH MAPS  ·  TypeScript
 * Manual HashMap + frequency patterns + sliding window + prefix sum.
 */

class HashMap<K, V> {
  private buckets: [K, V][][];
  private cap: number;
  size = 0;
  constructor(cap = 16) { this.cap = cap; this.buckets = Array.from({length: cap}, () => []); }
  private h(key: K): number { return Math.abs(String(key).split('').reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0)) % this.cap; }
  put(key: K, val: V): void {
    const b = this.buckets[this.h(key)];
    const i = b.findIndex(([k])=>k===key);
    if (i>=0) b[i][1]=val; else { b.push([key,val]); this.size++; }
  }
  get(key: K): V|undefined { return this.buckets[this.h(key)].find(([k])=>k===key)?.[1]; }
  remove(key: K): void {
    const b = this.buckets[this.h(key)]; const i = b.findIndex(([k])=>k===key);
    if (i>=0) { b.splice(i,1); this.size--; }
  }
  has(key: K): boolean { return this.get(key)!==undefined; }
}

// ── Problems ──────────────────────────────────
function groupAnagrams(strs: string[]): string[][] {
  const m = new Map<string,string[]>();
  for (const s of strs) { const k=[...s].sort().join(''); if(!m.has(k))m.set(k,[]); m.get(k)!.push(s); }
  return [...m.values()];
}

function longestConsecutive(nums: number[]): number {
  const s = new Set(nums); let best = 0;
  for (const n of s) { if (!s.has(n-1)) { let cur=n,len=1; while(s.has(cur+1)){cur++;len++;} best=Math.max(best,len); } }
  return best;
}

function lengthOfLongestSubstring(s: string): number {
  const last = new Map<string,number>(); let best=0,left=0;
  for (let right=0;right<s.length;right++) {
    const c=s[right];
    if(last.has(c)&&last.get(c)!>=left) left=last.get(c)!+1;
    last.set(c,right); best=Math.max(best,right-left+1);
  }
  return best;
}

function minWindowSubstring(s: string, t: string): string {
  const need = new Map<string,number>(); for(const c of t) need.set(c,(need.get(c)??0)+1);
  let missing=t.length, left=0, best='';
  for (let right=0;right<s.length;right++) {
    const c=s[right]; if((need.get(c)??0)>0) missing--;
    need.set(c,(need.get(c)??0)-1);
    if(missing===0){
      while((need.get(s[left])??0)<0){need.set(s[left],(need.get(s[left])??0)+1);left++;}
      if(!best||right-left+1<best.length) best=s.slice(left,right+1);
      need.set(s[left],(need.get(s[left])??0)+1); missing++; left++;
    }
  }
  return best;
}

function subarraySumEqualsK(nums: number[], k: number): number {
  let count=0,prefix=0; const freq=new Map([[0,1]]);
  for(const n of nums){prefix+=n;count+=(freq.get(prefix-k)??0);freq.set(prefix,(freq.get(prefix)??0)+1);}
  return count;
}

function wordPattern(pattern: string, s: string): boolean {
  const words=s.split(' '); if(pattern.length!==words.length) return false;
  const pw=new Map<string,string>(), wp=new Map<string,string>();
  for(let i=0;i<pattern.length;i++){
    const [p,w]=[pattern[i],words[i]];
    if(pw.has(p)&&pw.get(p)!==w) return false;
    if(wp.has(w)&&wp.get(w)!==p) return false;
    pw.set(p,w); wp.set(w,p);
  }
  return true;
}

function isIsomorphic(s: string, t: string): boolean {
  const st=new Map<string,string>(), ts=new Map<string,string>();
  for(let i=0;i<s.length;i++){
    if((st.get(s[i])??t[i])!==t[i]||(ts.get(t[i])??s[i])!==s[i]) return false;
    st.set(s[i],t[i]); ts.set(t[i],s[i]);
  }
  return true;
}

function firstUniqChar(s: string): number {
  const cnt=new Map<string,number>(); for(const c of s) cnt.set(c,(cnt.get(c)??0)+1);
  for(let i=0;i<s.length;i++) if(cnt.get(s[i])===1) return i;
  return -1;
}

function findAllAnagrams(s: string, p: string): number[] {
  const need=new Map<string,number>(); for(const c of p) need.set(c,(need.get(c)??0)+1);
  const window=new Map<string,number>(); const result: number[]=[]; const k=p.length;
  const mEq=(a:Map<string,number>,b:Map<string,number>)=>a.size===b.size&&[...a].every(([k,v])=>b.get(k)===v);
  for(let i=0;i<s.length;i++){
    const c=s[i]; window.set(c,(window.get(c)??0)+1);
    if(i>=k){const lc=s[i-k];const nc=(window.get(lc)??0)-1;nc===0?window.delete(lc):window.set(lc,nc);}
    if(mEq(window,need)) result.push(i-k+1);
  }
  return result;
}

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string){if(!c)throw new Error(`FAIL: ${m}`);}
const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

function runTests(){
  console.log("Running hash map tests...\n");

  const hm=new HashMap<string,number>();
  hm.put('a',1); hm.put('b',2); hm.put('a',99);
  assert(hm.get('a')===99&&hm.get('b')===2,"put/get/update");
  assert(hm.get('z')===undefined,"get missing");
  hm.remove('a'); assert(!hm.has('a'),"remove");
  console.log("  ✅ HashMap: put / get / update / remove");

  const groups=groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
  assert(groups.length===3,"groupAnagrams count");
  console.log("  ✅ groupAnagrams");

  assert(longestConsecutive([100,4,200,1,3,2])===4,"longCons");
  assert(longestConsecutive([0,3,7,2,5,8,4,6,0,1])===9,"longCons2");
  console.log("  ✅ longestConsecutive");

  assert(lengthOfLongestSubstring("abcabcbb")===3,"longestSub");
  assert(lengthOfLongestSubstring("bbbbb")===1,"longestSub2");
  console.log("  ✅ lengthOfLongestSubstring");

  assert(minWindowSubstring("ADOBECODEBANC","ABC")==="BANC","minWindow");
  assert(minWindowSubstring("a","a")==="a","minWindow2");
  assert(minWindowSubstring("a","b")==="","minWindow3");
  console.log("  ✅ minWindowSubstring");

  assert(subarraySumEqualsK([1,1,1],2)===2,"subarraySum");
  assert(subarraySumEqualsK([1,2,3],3)===2,"subarraySum2");
  console.log("  ✅ subarraySumEqualsK");

  assert(wordPattern("abba","dog cat cat dog"),"wordPat");
  assert(!wordPattern("abba","dog cat cat fish"),"wordPat2");
  console.log("  ✅ wordPattern");

  assert(isIsomorphic("egg","add")&&!isIsomorphic("foo","bar"),"isomorph");
  console.log("  ✅ isIsomorphic");

  assert(firstUniqChar("leetcode")===0,"firstUniq");
  assert(firstUniqChar("aabb")===-1,"firstUniq2");
  console.log("  ✅ firstUniqChar");

  assert(eq(findAllAnagrams("cbaebabacd","abc"),[0,6]),"anagrams");
  assert(eq(findAllAnagrams("abab","ab"),[0,1,2]),"anagrams2");
  console.log("  ✅ findAllAnagrams");

  console.log("\n🎉 All hash map tests passed!");
}
runTests();
export { HashMap, groupAnagrams, longestConsecutive, lengthOfLongestSubstring, minWindowSubstring, subarraySumEqualsK, wordPattern, isIsomorphic, firstUniqChar, findAllAnagrams };
