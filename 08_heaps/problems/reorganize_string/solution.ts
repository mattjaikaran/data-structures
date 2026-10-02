export function reorganizeString(s: string): string {
  const cnt: Record<string,number> = {};
  for (const c of s) cnt[c]=(cnt[c]??0)+1;
  const h: [number,string][] = Object.entries(cnt).map(([c,n])=>[-n,c]);
  h.sort((a,b)=>a[0]-b[0]);
  const res: string[] = [];
  while (h.length >= 2) {
    const [c1,l1]=h.shift()!, [c2,l2]=h.shift()!;
    res.push(l1,l2);
    if(c1+1<0) h.push([c1+1,l1]);
    if(c2+1<0) h.push([c2+1,l2]);
    h.sort((a,b)=>a[0]-b[0]);
  }
  if (h.length) { if (h[0][0]<-1) return ""; res.push(h[0][1]); }
  return res.join('');
}
