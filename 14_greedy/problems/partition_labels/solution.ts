export function partitionLabels(s: string): number[] {
  const last: Record<string,number> = {};
  for (let i = 0; i < s.length; i++) last[s[i]] = i;
  const result: number[] = [];
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);
    if (i === end) { result.push(end - start + 1); start = i + 1; }
  }
  return result;
}
