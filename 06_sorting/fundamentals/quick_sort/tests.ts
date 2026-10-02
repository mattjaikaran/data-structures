function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { quickSort } from '../../fundamentals/quick_sort/solution.ts';

const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

const tests=[[64,34,25,12,22,11,90],[5,4,3,2,1],[1,2,3,4,5],[],[1,1,1]];
const exp=tests.map(t=>[...t].sort((a,b)=>a-b));
for (const [fn, name] of [[quickSort, "quick_sort"]] as const) {
    for(let i=0;i<tests.length;i++) assert(eq(fn(tests[i]),exp[i]),`${name} case ${i}`);
    console.log(`  ✅ ${name}Sort`);
  }
let randomState = 123456789;
const nextRandom = () => { randomState = (Math.imul(randomState, 1664525) + 1013904223) >>> 0; return randomState; };
for (let trial = 0; trial < 60; trial++) {
  const values = Array.from({length: nextRandom() % 35}, () => nextRandom() % 41 - 20);
  const original = values.slice();
  assert(JSON.stringify(quickSort(values)) === JSON.stringify(original.slice().sort((a,b) => a-b)));
  assert(JSON.stringify(values) === JSON.stringify(original), 'Copying quick sort must preserve input');
}

console.log('PASS 06_sorting/quick_sort (ts)');
