/** SORTING  ·  TypeScript */

export const bubbleSort = (arr: number[]): number[] => {
  const a=[...arr]; const n=a.length;
  for(let i=0;i<n;i++){let sw=false;for(let j=0;j<n-1-i;j++){if(a[j]>a[j+1]){[a[j],a[j+1]]=[a[j+1],a[j]];sw=true;}}if(!sw)break;}
  return a;
};

export const insertionSort = (arr: number[]): number[] => {
  const a=[...arr];
  for(let i=1;i<a.length;i++){const key=a[i];let j=i-1;while(j>=0&&a[j]>key){a[j+1]=a[j];j--;}a[j+1]=key;}
  return a;
};

export const mergeSort = (arr: number[]): number[] => {
  if(arr.length<=1) return arr;
  const mid=arr.length>>1;
  const merge=(l:number[],r:number[])=>{const res=[];let[i,j]=[0,0];while(i<l.length&&j<r.length)res.push(l[i]<=r[j]?l[i++]:r[j++]);return [...res,...l.slice(i),...r.slice(j)];};
  return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)));
};

export const quickSort = (arr: number[]): number[] => {
  if(arr.length<=1) return arr;
  const pivot=arr[Math.floor(Math.random()*arr.length)];
  return [...quickSort(arr.filter(x=>x<pivot)),
          arr.filter(x=>x===pivot),
          ...quickSort(arr.filter(x=>x>pivot))].flat();
};

export const heapSort = (arr: number[]): number[] => {
  const a=[...arr]; const n=a.length;
  const heapify=(n:number,i:number)=>{let m=i,l=2*i+1,r=2*i+2;if(l<n&&a[l]>a[m])m=l;if(r<n&&a[r]>a[m])m=r;if(m!==i){[a[m],a[i]]=[a[i],a[m]];heapify(n,m);}};
  for(let i=Math.floor(n/2)-1;i>=0;i--)heapify(n,i);
  for(let i=n-1;i>0;i--){[a[0],a[i]]=[a[i],a[0]];heapify(i,0);}
  return a;
};

export const countingSort = (arr: number[]): number[] => {
  if(!arr.length) return [];
  const k=Math.max(...arr)+1; const cnt=new Array(k).fill(0);
  for(const n of arr) cnt[n]++;
  return cnt.flatMap((c,v)=>new Array(c).fill(v));
};

export const radixSort = (arr: number[]): number[] => {
  if(!arr.length) return [];
  let a=[...arr]; let exp=1; const max=Math.max(...a);
  while(Math.floor(max/exp)>0){
    const buckets=Array.from({length:10},()=>[] as number[]);
    for(const n of a) buckets[Math.floor(n/exp)%10].push(n);
    a=buckets.flat(); exp*=10;
  }
  return a;
};

export const quickselect = (nums: number[], k: number): number => {
  const a=[...nums];
  const partition=(lo:number,hi:number)=>{const p=a[hi];let i=lo;for(let j=lo;j<hi;j++)if(a[j]<=p){[a[i],a[j]]=[a[j],a[i]];i++;}[a[i],a[hi]]=[a[hi],a[i]];return i;};
  const select=(lo:number,hi:number,k:number):number=>{if(lo===hi)return a[lo];const p=partition(lo,hi);if(k===p)return a[k];return k<p?select(lo,p-1,k):select(p+1,hi,k);};
  return select(0,a.length-1,k-1);
};

export const dutchNationalFlag = (nums: number[]): number[] => {
  const a=[...nums]; let[lo,mid,hi]=[0,0,a.length-1];
  while(mid<=hi){if(a[mid]===0){[a[lo],a[mid]]=[a[mid],a[lo]];lo++;mid++;}else if(a[mid]===1)mid++;else{[a[mid],a[hi]]=[a[hi],a[mid]];hi--;}}
  return a;
};

export const mergeIntervals = (intervals: number[][]): number[][] => {
  if(!intervals.length) return [];
  intervals.sort((a,b)=>a[0]-b[0]);
  const merged=[intervals[0]];
  for(const[s,e] of intervals.slice(1)){if(s<=merged[merged.length-1][1])merged[merged.length-1][1]=Math.max(merged[merged.length-1][1],e);else merged.push([s,e]);}
  return merged;
};

// ── Tests ─────────────────────────────────────
function assert(c:boolean,m:string){if(!c)throw new Error(`FAIL: ${m}`);}
const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

function runTests(){
  console.log("Running sorting tests...\n");
  const tests=[[64,34,25,12,22,11,90],[5,4,3,2,1],[1,2,3,4,5],[],[1,1,1]];
  const exp=tests.map(t=>[...t].sort((a,b)=>a-b));
  for(const [fn,name] of [[bubbleSort,"bubble"],[insertionSort,"insertion"],[mergeSort,"merge"],[quickSort,"quick"],[heapSort,"heap"]] as const){
    for(let i=0;i<tests.length;i++) assert(eq(fn(tests[i]),exp[i]),`${name} case ${i}`);
    console.log(`  ✅ ${name}Sort`);
  }
  assert(eq(countingSort([4,2,2,8,3,3,1]),[1,2,2,3,3,4,8]),"counting");
  console.log("  ✅ countingSort");
  assert(eq(radixSort([170,45,75,90,802,24,2,66]),[2,24,45,66,75,90,170,802]),"radix");
  console.log("  ✅ radixSort");
  assert(quickselect([3,2,1,5,6,4],2)===2,"quickselect");
  console.log("  ✅ quickselect");
  assert(eq(dutchNationalFlag([2,0,2,1,1,0]),[0,0,1,1,2,2]),"dutch");
  console.log("  ✅ dutchNationalFlag");
  assert(eq(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]),[[1,6],[8,10],[15,18]]),"mergeInt");
  console.log("  ✅ mergeIntervals");
  console.log("\n🎉 All sorting tests passed!");
}
runTests();
