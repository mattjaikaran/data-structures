export const singleNumberII = (nums:number[]):number=>{
  let [ones,twos]=[0,0];
  for(const n of nums){ones=(ones^n)&~twos;twos=(twos^n)&~ones;}
  return ones;
};
