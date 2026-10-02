export const singleNumberIII = (nums:number[]):[number,number]=>{
  const xor=nums.reduce((a,b)=>a^b,0);
  const diff=xor&(-xor);
  let[a,b]=[0,0];
  for(const n of nums){if(n&diff)a^=n;else b^=n;}
  return[a,b];
};
