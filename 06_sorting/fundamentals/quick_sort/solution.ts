export const quickSort = (arr: number[]): number[] => {
  if(arr.length<=1) return arr;
  const pivot=arr[Math.floor(Math.random()*arr.length)];
  return [...quickSort(arr.filter(x=>x<pivot)),
          arr.filter(x=>x===pivot),
          ...quickSort(arr.filter(x=>x>pivot))].flat();
};
