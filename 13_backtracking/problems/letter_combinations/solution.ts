export function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const phone: Record<string,string> = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
  const result: string[] = [];
  const bt = (i: number, path: string[]) => {
    if (i === digits.length) { result.push(path.join('')); return; }
    for (const c of phone[digits[i]]) { path.push(c); bt(i+1,path); path.pop(); }
  };
  bt(0, []); return result;
}
