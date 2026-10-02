export class DynamicArray<T> {
  private data: (T | undefined)[];
  private _size = 0;
  private _cap: number;

  constructor(initialCap = 4) {
    this._cap = initialCap;
    this.data = new Array(initialCap);
  }

  get size(): number { return this._size; }
  get capacity(): number { return this._cap; }

  get(i: number): T {
    this.checkBounds(i);
    return this.data[i] as T;
  }

  set(i: number, val: T): void {
    this.checkBounds(i);
    this.data[i] = val;
  }

  /** O(1) amortized */
  append(val: T): void {
    if (this._size === this._cap) this.resize(this._cap * 2);
    this.data[this._size++] = val;
  }

  /** O(n) */
  insert(i: number, val: T): void {
    if (i < 0 || i > this._size) throw new RangeError(`Index ${i} out of range`);
    if (this._size === this._cap) this.resize(this._cap * 2);
    for (let j = this._size; j > i; j--) this.data[j] = this.data[j - 1];
    this.data[i] = val;
    this._size++;
  }

  /** O(n) */
  removeAt(i: number): T {
    this.checkBounds(i);
    const val = this.data[i] as T;
    for (let j = i; j < this._size - 1; j++) this.data[j] = this.data[j + 1];
    this.data[--this._size] = undefined;
    return val;
  }

  toArray(): T[] {
    return Array.from({ length: this._size }, (_, i) => this.data[i] as T);
  }

  private resize(newCap: number): void {
    const next = new Array<T | undefined>(newCap);
    for (let i = 0; i < this._size; i++) next[i] = this.data[i];
    this.data = next;
    this._cap = newCap;
  }

  private checkBounds(i: number): void {
    if (i < 0 || i >= this._size) throw new RangeError(`Index ${i} out of range`);
  }
}
