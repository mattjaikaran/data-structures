export function mergeKSorted(lists: number[][]): number[] {
  // [value, listIdx, elemIdx]
  const h: [number,number,number][] = [];
  const push = (v: number, i: number, j: number) => { h.push([v,i,j]); h.sort((a,b)=>a[0]-b[0]); };
  lists.forEach((lst,i) => { if (lst.length) push(lst[0],i,0); });
  const result: number[] = [];
  while (h.length) {
    const [val,i,j] = h.shift()!; result.push(val);
    if (j+1 < lists[i].length) push(lists[i][j+1],i,j+1);
  }
  return result;
}
