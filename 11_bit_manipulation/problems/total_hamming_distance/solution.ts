export const totalHammingDistance = (nums:number[]):number=>{
  let total=0;
  for(let bit=0;bit<32;bit++){const ones=nums.filter(n=>(n>>bit)&1).length;total+=ones*(nums.length-ones);}
  return total;
};
