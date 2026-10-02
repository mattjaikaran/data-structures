function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { insertInterval } from '../../problems/insert_interval/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(insertInterval([[1,3],[6,9]],[2,5]),[[1,5],[6,9]]), "insertInterval");
console.log('PASS 14_greedy/insert_interval (ts)');
