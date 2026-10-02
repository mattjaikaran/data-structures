function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { UnionFind } from '../../fundamentals/union_find/solution.ts';



const uf = new UnionFind(5);
uf.union(0,1);
uf.union(2,3);
assert(uf.connected(0,1)&&!uf.connected(0,2),"uf union/find");
assert(uf.components===3,"uf components");
console.log('PASS 10_graphs/union_find (ts)');
