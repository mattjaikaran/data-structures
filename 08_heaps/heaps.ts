/**
 * HEAPS  ·  TypeScript
 * Min/Max heap + top-K patterns, MedianFinder, task scheduler.
 */

class MinHeap {
  private data: number[] = [];
  get size() { return this.data.length; }
  push(v: number): void { this.data.push(v); this.bubbleUp(this.data.length - 1); }
  pop(): number {
    const top = this.data[0]; const last = this.data.pop()!;
    if (this.data.length) { this.data[0] = last; this.sinkDown(0); }
    return top;
  }
  peek(): number { return this.data[0]; }
  private bubbleUp(i: number): void {
    while (i > 0) { const p = (i-1)>>1; if (this.data[p] <= this.data[i]) break; [this.data[p],this.data[i]]=[this.data[i],this.data[p]]; i=p; }
  }
  private sinkDown(i: number): void {
    const n = this.data.length;
    while (true) { let m = i; const l=2*i+1,r=2*i+2; if(l<n&&this.data[l]<this.data[m])m=l; if(r<n&&this.data[r]<this.data[m])m=r; if(m===i)break; [this.data[m],this.data[i]]=[this.data[i],this.data[m]]; i=m; }
  }
}

class MaxHeap {
  private h = new MinHeap();
  push(v: number): void { this.h.push(-v); }
  pop(): number { return -this.h.pop(); }
  peek(): number { return -this.h.peek(); }
  get size() { return this.h.size; }
}

// ── Problems ──────────────────────────────────
function kthLargest(nums: number[], k: number): number {
  const h = new MinHeap();
  for (const n of nums) { h.push(n); if (h.size > k) h.pop(); }
  return h.peek();
}

function topKFrequent(nums: number[], k: number): number[] {
  const cnt = new Map<number,number>();
  for (const n of nums) cnt.set(n, (cnt.get(n)??0)+1);
  return [...cnt.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(([n])=>n);
}

function mergeKSorted(lists: number[][]): number[] {
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

class MedianFinder {
  lo = new MaxHeap(); hi = new MinHeap();
  addNum(n: number): void {
    this.lo.push(n);
    this.hi.push(this.lo.pop());
    if (this.hi.size > this.lo.size) this.lo.push(this.hi.pop());
  }
  findMedian(): number {
    return this.lo.size > this.hi.size ? this.lo.peek() : (this.lo.peek() + this.hi.peek()) / 2;
  }
}

function taskScheduler(tasks: string[], n: number): number {
  const cnt: Record<string,number> = {};
  for (const t of tasks) cnt[t] = (cnt[t]??0)+1;
  const counts = Object.values(cnt);
  const maxCount = Math.max(...counts);
  const maxCountTasks = counts.filter(c=>c===maxCount).length;
  return Math.max(tasks.length, (maxCount-1)*(n+1)+maxCountTasks);
}

function kClosestPoints(points: number[][], k: number): number[][] {
  return points.sort((a,b)=>(a[0]**2+a[1]**2)-(b[0]**2+b[1]**2)).slice(0,k);
}

function reorganizeString(s: string): string {
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

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string) { if (!c) throw new Error(`FAIL: ${m}`); }
const eq = (a: unknown,b: unknown)=>JSON.stringify(a)===JSON.stringify(b);

function runTests() {
  console.log("Running heap tests...\n");

  const mnh = new MinHeap();
  [5,2,8,1,9].forEach(v=>mnh.push(v));
  assert(mnh.peek()===1,"minheap peek"); assert(mnh.pop()===1,"minheap pop"); assert(mnh.peek()===2,"minheap peek2");
  console.log("  ✅ MinHeap: push / pop / peek");

  const mxh = new MaxHeap();
  [5,2,8,1,9].forEach(v=>mxh.push(v));
  assert(mxh.peek()===9,"maxheap peek"); assert(mxh.pop()===9,"maxheap pop");
  console.log("  ✅ MaxHeap: push / pop / peek");

  assert(kthLargest([3,2,1,5,6,4],2)===5,"kthLargest");
  assert(kthLargest([3,2,3,1,2,4,5,5,6],4)===4,"kthLargest dups");
  console.log("  ✅ kthLargest");

  assert(new Set(topKFrequent([1,1,1,2,2,3],2)).has(1)&&new Set(topKFrequent([1,1,1,2,2,3],2)).has(2),"topKFrequent");
  console.log("  ✅ topKFrequent");

  assert(eq(mergeKSorted([[1,4,5],[1,3,4],[2,6]]),[1,1,2,3,4,4,5,6]),"mergeKSorted");
  console.log("  ✅ mergeKSorted");

  const mf = new MedianFinder();
  [1,2,3].forEach(n=>mf.addNum(n));
  assert(mf.findMedian()===2,"median odd");
  mf.addNum(4); assert(mf.findMedian()===2.5,"median even");
  console.log("  ✅ MedianFinder: odd / even");

  assert(taskScheduler([..."AAAAABCD"],2)===13,"taskScheduler");
  assert(taskScheduler([..."AAABBB"],2)===8,"taskScheduler2");
  console.log("  ✅ taskScheduler");

  const pts=[[1,3],[-2,2],[3,4],[-1,-1]]; const cl=kClosestPoints(pts,2);
  assert(cl.length===2,"kClosest len");
  console.log("  ✅ kClosestPoints");

  const rs = reorganizeString("aab");
  assert(rs.length===3&&rs[0]!==rs[1]&&rs[1]!==rs[2],"reorganize valid");
  assert(reorganizeString("aaab")==="","reorganize impossible");
  console.log("  ✅ reorganizeString");

  console.log("\n🎉 All heap tests passed!");
}
runTests();
export { MinHeap, MaxHeap, kthLargest, topKFrequent, mergeKSorted, MedianFinder, taskScheduler, kClosestPoints, reorganizeString };
