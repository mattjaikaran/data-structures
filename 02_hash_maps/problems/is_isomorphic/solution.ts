export function isIsomorphic(s: string, t: string): boolean {
  const st=new Map<string,string>(), ts=new Map<string,string>();
  for(let i=0;i<s.length;i++){
    if((st.get(s[i])??t[i])!==t[i]||(ts.get(t[i])??s[i])!==s[i]) return false;
    st.set(s[i],t[i]); ts.set(t[i],s[i]);
  }
  return true;
}
