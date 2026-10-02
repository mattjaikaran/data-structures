export function findAllAnagrams(s: string, p: string): number[] {
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
