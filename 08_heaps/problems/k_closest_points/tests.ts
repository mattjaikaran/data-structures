function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { kClosestPoints } from '../../problems/k_closest_points/solution.ts';



const pts=[[1,3],[-2,2],[3,4],[-1,-1]];
const cl=kClosestPoints(pts,2);
assert(cl.length===2,"kClosest len");
console.log('PASS 08_heaps/k_closest_points (ts)');
