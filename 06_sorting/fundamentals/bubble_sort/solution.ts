/** SORTING  ·  TypeScript */
export const bubbleSort = (arr: number[]): number[] => {
  const a=[...arr]; const n=a.length;
  for(let i=0;i<n;i++){let sw=false;for(let j=0;j<n-1-i;j++){if(a[j]>a[j+1]){[a[j],a[j+1]]=[a[j+1],a[j]];sw=true;}}if(!sw)break;}
  return a;
};
