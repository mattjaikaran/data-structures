/** BIT MANIPULATION  ·  TypeScript */

export const getBit = (n:number,i:number)=>(n>>i)&1;
export const setBit = (n:number,i:number)=>n|(1<<i);
export const clearBit = (n:number,i:number)=>n&~(1<<i);
export const toggleBit = (n:number,i:number)=>n^(1<<i);
export const isPowerOfTwo = (n:number)=>n>0&&(n&(n-1))===0;
export const countBits = (n:number)=>{let c=0;while(n){n&=n-1;c++;}return c;};

export const singleNumber = (nums:number[])=>nums.reduce((a,b)=>a^b,0);

export const singleNumberII = (nums:number[]):number=>{
  let [ones,twos]=[0,0];
  for(const n of nums){ones=(ones^n)&~twos;twos=(twos^n)&~ones;}
  return ones;
};

export const singleNumberIII = (nums:number[]):[number,number]=>{
  const xor=nums.reduce((a,b)=>a^b,0);
  const diff=xor&(-xor);
  let[a,b]=[0,0];
  for(const n of nums){if(n&diff)a^=n;else b^=n;}
  return[a,b];
};

export const reverseBits = (n:number):number=>{
  let res=0;
  for(let i=0;i<32;i++){res=(res<<1)|(n&1);n>>>=1;}
  return res>>>0;
};

export const missingNumber = (nums:number[]):number=>{
  let res=nums.length;
  for(let i=0;i<nums.length;i++)res^=i^nums[i];
  return res;
};

export const countBitsRange = (n:number):number[]=>{
  const dp=new Array(n+1).fill(0);
  for(let i=1;i<=n;i++) dp[i]=dp[i>>1]+(i&1);
  return dp;
};

export const hammingDistance = (x:number,y:number)=>countBits(x^y);

export const totalHammingDistance = (nums:number[]):number=>{
  let total=0;
  for(let bit=0;bit<32;bit++){const ones=nums.filter(n=>(n>>bit)&1).length;total+=ones*(nums.length-ones);}
  return total;
};

export const bitwiseAndRange = (left:number,right:number):number=>{
  let shift=0;
  while(left!==right){left>>=1;right>>=1;shift++;}
  return left<<shift;
};

export const powerOfFour = (n:number)=>n>0&&(n&(n-1))===0&&(n&0x55555555)!==0;

export const subsetsFromMask = (nums:number[]):number[][]=>
  Array.from({length:1<<nums.length},(_,mask)=>nums.filter((_,i)=>(mask>>i)&1));

export const maximumXOR = (nums:number[]):number=>{
  let[maxXor,prefix]=[0,0];
  for(let i=31;i>=0;i--){
    prefix|=(1<<i);
    const prefixes=new Set(nums.map(n=>n&prefix));
    const candidate=maxXor|(1<<i);
    if([...prefixes].some(p=>prefixes.has(candidate^p)))maxXor=candidate;
  }
  return maxXor;
};

// ── Tests ─────────────────────────────────────
function assert(c:boolean,m:string){if(!c)throw new Error(`FAIL: ${m}`);}
const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

function runTests(){
  console.log("Running bit manipulation tests...\n");

  assert(getBit(0b1010,1)===1&&getBit(0b1010,0)===0,"getBit");
  assert(setBit(0b1010,0)===0b1011,"setBit");
  assert(clearBit(0b1011,0)===0b1010,"clearBit");
  assert(toggleBit(0b1010,0)===0b1011,"toggle");
  console.log("  ✅ get/set/clear/toggle bit");

  assert(isPowerOfTwo(16)&&isPowerOfTwo(1)&&!isPowerOfTwo(6),"pow2");
  console.log("  ✅ isPowerOfTwo");

  assert(countBits(0b1011)===3&&countBits(0)===0,"countBits");
  console.log("  ✅ countBits");

  assert(singleNumber([4,1,2,1,2])===4,"singleNum");
  console.log("  ✅ singleNumber");

  assert(singleNumberII([2,2,3,2])===3&&singleNumberII([0,1,0,1,0,1,99])===99,"singleII");
  console.log("  ✅ singleNumberII");

  const[a,b]=singleNumberIII([1,2,1,3,2,5]); assert(new Set([a,b]).has(3)&&new Set([a,b]).has(5),"singleIII");
  console.log("  ✅ singleNumberIII");

  assert(reverseBits(43261596)===964176192,"reverseBits");
  console.log("  ✅ reverseBits");

  assert(missingNumber([3,0,1])===2&&missingNumber([9,6,4,2,3,5,7,0,1])===8,"missing");
  console.log("  ✅ missingNumber");

  assert(eq(countBitsRange(5),[0,1,1,2,1,2]),"countRange");
  console.log("  ✅ countBitsRange");

  assert(hammingDistance(1,4)===2&&hammingDistance(3,1)===1,"hamming");
  console.log("  ✅ hammingDistance");

  assert(totalHammingDistance([4,14,2])===6,"totalHamming");
  console.log("  ✅ totalHammingDistance");

  assert(bitwiseAndRange(5,7)===4&&bitwiseAndRange(1,2147483647)===0,"andRange");
  console.log("  ✅ bitwiseAndRange");

  assert(powerOfFour(16)&&!powerOfFour(8),"pow4");
  console.log("  ✅ powerOfFour");

  const subs=subsetsFromMask([1,2,3]);
  assert(subs.length===8,"subsets");
  console.log("  ✅ subsetsFromMask");

  assert(maximumXOR([3,10,5,25,2,8])===28,"maxXor");
  console.log("  ✅ maximumXOR");

  console.log("\n🎉 All bit manipulation tests passed!");
}
runTests();
