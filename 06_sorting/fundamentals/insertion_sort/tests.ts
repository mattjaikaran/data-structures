function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { insertionSort } from '../../fundamentals/insertion_sort/solution.ts';

const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

const tests=[[64,34,25,12,22,11,90],[5,4,3,2,1],[1,2,3,4,5],[],[1,1,1]];
const exp=tests.map(t=>[...t].sort((a,b)=>a-b));
for (const [fn, name] of [[insertionSort, "insertion_sort"]] as const) {
    for(let i=0;i<tests.length;i++) assert(eq(fn(tests[i]),exp[i]),`${name} case ${i}`);
    console.log(`  ✅ ${name}Sort`);
  }
console.log('PASS 06_sorting/insertion_sort (ts)');
