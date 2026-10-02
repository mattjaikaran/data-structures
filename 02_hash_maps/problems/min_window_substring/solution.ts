export function minWindowSubstring(s: string, t: string): string {
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
