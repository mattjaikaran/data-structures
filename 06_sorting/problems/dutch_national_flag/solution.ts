export const dutchNationalFlag = (nums: number[]): number[] => {
  const a=[...nums]; let[lo,mid,hi]=[0,0,a.length-1];
  while(mid<=hi){if(a[mid]===0){[a[lo],a[mid]]=[a[mid],a[lo]];lo++;mid++;}else if(a[mid]===1)mid++;else{[a[mid],a[hi]]=[a[hi],a[mid]];hi--;}}
  return a;
};
