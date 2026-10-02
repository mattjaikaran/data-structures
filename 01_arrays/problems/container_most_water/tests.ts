function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { containerMostWater } from '../../problems/container_most_water/solution.ts';



assert(containerMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49, "container water");
assert(containerMostWater([1, 1]) === 1, "container water min");
console.log('PASS 01_arrays/container_most_water (ts)');
