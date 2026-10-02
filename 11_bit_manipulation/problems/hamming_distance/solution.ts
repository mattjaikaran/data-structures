import { countBits } from '../../fundamentals/count_bits/solution.ts';

export const hammingDistance = (x:number,y:number)=>countBits(x^y);
