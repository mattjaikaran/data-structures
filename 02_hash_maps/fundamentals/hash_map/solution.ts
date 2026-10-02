/**
 * HASH MAPS  ·  TypeScript
 * Manual HashMap + frequency patterns + sliding window + prefix sum.
 */
export class HashMap<K, V> {
  private buckets: [K, V][][];
  private cap: number;
  size = 0;
  constructor(cap = 16) { this.cap = cap; this.buckets = Array.from({length: cap}, () => []); }
  private h(key: K): number { return Math.abs(String(key).split('').reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0)) % this.cap; }
  put(key: K, val: V): void {
    const b = this.buckets[this.h(key)];
    const i = b.findIndex(([k])=>k===key);
    if (i>=0) b[i][1]=val; else { b.push([key,val]); this.size++; }
  }
  get(key: K): V|undefined { return this.buckets[this.h(key)].find(([k])=>k===key)?.[1]; }
  remove(key: K): void {
    const b = this.buckets[this.h(key)]; const i = b.findIndex(([k])=>k===key);
    if (i>=0) { b.splice(i,1); this.size--; }
  }
  has(key: K): boolean { return this.get(key)!==undefined; }
}
