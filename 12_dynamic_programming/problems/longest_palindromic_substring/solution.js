/**
 * 🟡 longestPalindromicSubstring (LC #5)
 * @param {string} s
 * @returns {string}
 */
export function longestPalindromicSubstring(s) {
  let [res, resLen] = ['', 0];
  for (let i=0;i<s.length;i++) {
    for (const [start,end] of [[i,i],[i,i+1]]) {
      let [l,r]=[start,end];
      while(l>=0&&r<s.length&&s[l]===s[r]){l--;r++;}
      if(r-l-1>resLen){res=s.slice(l+1,r);resLen=r-l-1;}
    }
  }
  return res;
}
