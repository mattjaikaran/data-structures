export function wordPattern(pattern: string, s: string): boolean {
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
