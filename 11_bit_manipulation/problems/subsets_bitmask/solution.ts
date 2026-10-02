export const subsetsFromMask = (nums:number[]):number[][]=>
  Array.from({length:1<<nums.length},(_,mask)=>nums.filter((_,i)=>(mask>>i)&1));
