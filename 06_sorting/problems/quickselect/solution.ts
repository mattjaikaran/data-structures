export const quickselect = (nums: number[], k: number): number => {
  const a=[...nums];
  const partition=(lo:number,hi:number)=>{const p=a[hi];let i=lo;for(let j=lo;j<hi;j++)if(a[j]<=p){[a[i],a[j]]=[a[j],a[i]];i++;}[a[i],a[hi]]=[a[hi],a[i]];return i;};
  const select=(lo:number,hi:number,k:number):number=>{if(lo===hi)return a[lo];const p=partition(lo,hi);if(k===p)return a[k];return k<p?select(lo,p-1,k):select(p+1,hi,k);};
  return select(0,a.length-1,k-1);
};
