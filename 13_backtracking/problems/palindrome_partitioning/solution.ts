export function palindromePartitioning(s: string): string[][] {
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
