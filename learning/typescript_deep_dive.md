# TypeScript / JavaScript Deep Dive
### For engineers who know the basics and want to write production-quality TS

---

## 1. The Event Loop — How JS Actually Runs

JavaScript is single-threaded but non-blocking. Understanding the event loop is essential for writing correct async code.

```
Call Stack → Web APIs → Callback Queue → Microtask Queue
```

**Execution order:**
1. Synchronous code runs to completion (call stack)
2. **Microtasks** run next (Promises, queueMicrotask, MutationObserver)
3. **Macrotasks** run after (setTimeout, setInterval, I/O, UI events)

```typescript
console.log('1');                           // sync → runs first

setTimeout(() => console.log('2'), 0);      // macrotask → runs last

Promise.resolve().then(() => console.log('3'));  // microtask → runs second

console.log('4');                           // sync → runs second

// Output: 1, 4, 3, 2
```

**Why this matters:**
```typescript
// This looks like it delays 0ms, but it actually defers after ALL microtasks
setTimeout(() => {}, 0);

// A resolved promise fires BEFORE that setTimeout
Promise.resolve().then(() => {
  // this runs before the setTimeout above
});

// Blocking the event loop — NEVER do this in production
function badSleep(ms: number) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}  // blocks EVERYTHING: UI, network, other callbacks
}
```

---

## 2. Closures — Deep Understanding

A closure is a function that **captures its surrounding scope** even after that scope has returned.

```typescript
// Classic closure — counter factory
function makeCounter(initial = 0) {
  let count = initial;  // this variable is captured
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
    reset: () => { count = initial; }
  };
}

const counter = makeCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.decrement(); // 11
counter.value();     // 11
// `count` and `initial` are still alive — captured by the closure

// The classic interview trap: closures in loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // prints 3, 3, 3 — NOT 0, 1, 2
}
// var is function-scoped, so all callbacks share the SAME i

// Fix 1: use let (block-scoped — each iteration gets its own binding)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // prints 0, 1, 2
}

// Fix 2: IIFE to create a new scope (older pattern)
for (var i = 0; i < 3; i++) {
  ((j) => setTimeout(() => console.log(j), 100))(i);
}

// Memoization via closure
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();
  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

const expensiveFib = memoize((n: number): number =>
  n <= 1 ? n : expensiveFib(n-1) + expensiveFib(n-2)
);
```

---

## 3. Prototypal Inheritance

JavaScript uses **prototype chains**, not classical inheritance. `class` is syntactic sugar over prototypes.

```typescript
// What class syntax desugars to
class Animal {
  constructor(public name: string) {}
  speak() { return `${this.name} makes a noise.`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks.`; }
}

// Is equivalent to (roughly):
function AnimalFn(this: any, name: string) { this.name = name; }
AnimalFn.prototype.speak = function() { return `${this.name} makes a noise.`; };

function DogFn(this: any, name: string) { AnimalFn.call(this, name); }
DogFn.prototype = Object.create(AnimalFn.prototype);
DogFn.prototype.constructor = DogFn;
DogFn.prototype.speak = function() { return `${this.name} barks.`; };

// Prototype chain lookup:
// dog.speak() → check dog instance → not found
//             → check Dog.prototype → found, call it
// dog.toString() → check instance → Dog.prototype → Animal.prototype → Object.prototype → found

// Object.create — create object with specific prototype
const protoAnimal = {
  speak() { return `${this.name} makes a noise.`; }
};
const cat = Object.create(protoAnimal);
cat.name = 'Cat';
cat.speak(); // works — cat inherits from protoAnimal

// hasOwnProperty vs 'in'
const obj = { a: 1 };
const child = Object.create(obj);
child.b = 2;

'b' in child;                    // true — own property
'a' in child;                    // true — inherited
child.hasOwnProperty('b');       // true
child.hasOwnProperty('a');       // false — inherited, not own
```

---

## 4. The TypeScript Type System — Advanced Patterns

```typescript
// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Conditional types
type IsString<T> = T extends string ? 'yes' : 'no';
type A = IsString<string>;   // 'yes'
type B = IsString<number>;   // 'no'

// Inferring within conditional types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type UnpackPromise<T> = T extends Promise<infer V> ? V : T;

type GetReturn = ReturnType<() => number>;       // number
type Unwrapped = UnpackPromise<Promise<string>>;  // string

// Mapped types
type Readonly<T> = { readonly [K in keyof T]: T[K] };
type Partial<T> = { [K in keyof T]?: T[K] };
type Required<T> = { [K in keyof T]-?: T[K] };  // -? removes optional

// Remapping keys
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};
// { getName: () => string, getAge: () => number }

// Template literal types
type EventName = 'click' | 'focus' | 'blur';
type Handler = `on${Capitalize<EventName>}`;  // 'onClick' | 'onFocus' | 'onBlur'

// Discriminated unions — the correct way to model state
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

function processResult<T>(result: Result<T>): T | null {
  if (result.success) {
    return result.data;  // TypeScript knows data exists here
  }
  console.error(result.error);  // TypeScript knows error exists here
  return null;
}

// Branded types — prevent mixing up IDs of different types
type UserId = string & { readonly __brand: 'UserId' };
type PostId = string & { readonly __brand: 'PostId' };

const createUserId = (id: string): UserId => id as UserId;
const createPostId = (id: string): PostId => id as PostId;

function getUser(id: UserId) { /* ... */ }
const postId = createPostId('123');
// getUser(postId);  // TS Error! Can't pass PostId where UserId expected

// Recursive types
type JSONValue =
  | string | number | boolean | null
  | JSONValue[]
  | { [key: string]: JSONValue };

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
};

// Function overloads
function process(x: string): string;
function process(x: number): number;
function process(x: string | number): string | number {
  if (typeof x === 'string') return x.toUpperCase();
  return x * 2;
}

// Utility types cheatsheet
type Pick<T, K extends keyof T>              // { name: string } from User
type Omit<T, K extends keyof T>              // User without 'password'
type Record<K extends string, V>             // { [key: string]: V }
type Exclude<T, U>                           // T but not U (union)
type Extract<T, U>                           // T that is assignable to U
type NonNullable<T>                          // remove null and undefined
type Parameters<T extends Function>          // tuple of param types
type ConstructorParameters<T>               // constructor param types
type InstanceType<T extends new(...) => any> // instance type of constructor
```

---

## 5. Async/Await — Beyond the Basics

```typescript
// Async functions always return a Promise
async function getData(): Promise<string> {
  return "hello";  // implicitly: Promise.resolve("hello")
}

// Error handling patterns
async function safe<T>(fn: () => Promise<T>): Promise<[T, null] | [null, Error]> {
  try {
    return [await fn(), null];
  } catch (e) {
    return [null, e instanceof Error ? e : new Error(String(e))];
  }
}

// Usage:
const [data, err] = await safe(() => fetchUser(id));
if (err) { /* handle */ }
// data is now T, not T | null (TypeScript knows)

// Concurrent patterns
// Sequential — each waits for previous
const user = await fetchUser(1);
const posts = await fetchPosts(user.id);  // only starts after user loads

// Parallel — fire all at once
const [user, settings] = await Promise.all([
  fetchUser(1),
  fetchSettings(1)
]);

// Promise.allSettled — get all results, even failures
const results = await Promise.allSettled([
  fetchUser(1),
  fetchPosts(1),
  fetchComments(1)
]);
results.forEach(result => {
  if (result.status === 'fulfilled') console.log(result.value);
  else console.error(result.reason);
});

// Promise.race — first one wins (timeout pattern)
async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
  return Promise.race([promise, timeout]);
}

// Promise.any — first SUCCESS wins (fallback pattern)
const data = await Promise.any([
  fetchFromCDN1(),
  fetchFromCDN2(),
  fetchFromOrigin()
]);

// Async iterators
async function* paginate<T>(url: string): AsyncGenerator<T[]> {
  let page = 1;
  while (true) {
    const data = await fetch(`${url}?page=${page}`).then(r => r.json());
    if (!data.length) break;
    yield data;
    page++;
  }
}

for await (const batch of paginate('/api/users')) {
  processBatch(batch);
}

// Controlling concurrency — process N at a time
async function mapConcurrent<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency: number
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
}
```

---

## 6. Functional Patterns

```typescript
// Pure functions — same input, same output, no side effects
const add = (a: number, b: number): number => a + b;

// Currying — transform f(a,b,c) into f(a)(b)(c)
const curry = <T extends (...args: any[]) => any>(fn: T) => {
  const arity = fn.length;
  return function curried(...args: any[]): any {
    if (args.length >= arity) return fn(...args);
    return (...more: any[]) => curried(...args, ...more);
  };
};

const add3 = curry((a: number, b: number, c: number) => a + b + c);
add3(1)(2)(3);   // 6
add3(1, 2)(3);   // 6
add3(1)(2, 3);   // 6

// Compose / pipe — function composition
const compose = <T>(...fns: Array<(x: T) => T>) =>
  (x: T): T => fns.reduceRight((v, f) => f(v), x);

const pipe = <T>(...fns: Array<(x: T) => T>) =>
  (x: T): T => fns.reduce((v, f) => f(v), x);

const process = pipe(
  (s: string) => s.trim(),
  (s: string) => s.toLowerCase(),
  (s: string) => s.replace(/\s+/g, '-')
);
process('  Hello World  ');  // 'hello-world'

// Immutable update patterns
const user = { name: 'Alice', age: 30, prefs: { theme: 'dark' } };

// Shallow update
const updated = { ...user, age: 31 };

// Nested update
const updatedPrefs = {
  ...user,
  prefs: { ...user.prefs, theme: 'light' }
};

// Array updates (immutable)
const arr = [1, 2, 3, 4, 5];
const withAdded = [...arr, 6];                      // append
const withInserted = [...arr.slice(0, 2), 99, ...arr.slice(2)]; // insert at 2
const withRemoved = arr.filter((_, i) => i !== 2);  // remove at 2
const withUpdated = arr.map((x, i) => i === 2 ? 99 : x); // update at 2
```

---

## 7. Design Patterns in TypeScript

```typescript
// Builder pattern — fluent API for complex object construction
class QueryBuilder {
  private query = { table: '', conditions: [] as string[], limit: 0, orderBy: '' };

  from(table: string): this { this.query.table = table; return this; }
  where(condition: string): this { this.query.conditions.push(condition); return this; }
  limitTo(n: number): this { this.query.limit = n; return this; }
  order(field: string): this { this.query.orderBy = field; return this; }

  build(): string {
    let sql = `SELECT * FROM ${this.query.table}`;
    if (this.query.conditions.length)
      sql += ` WHERE ${this.query.conditions.join(' AND ')}`;
    if (this.query.orderBy) sql += ` ORDER BY ${this.query.orderBy}`;
    if (this.query.limit) sql += ` LIMIT ${this.query.limit}`;
    return sql;
  }
}

const q = new QueryBuilder()
  .from('users')
  .where('age > 18')
  .where('active = true')
  .order('name')
  .limitTo(10)
  .build();

// Observer pattern — EventEmitter
class TypedEmitter<Events extends Record<string, any>> {
  private handlers = new Map<keyof Events, Set<Function>>();

  on<K extends keyof Events>(event: K, handler: (data: Events[K]) => void): () => void {
    if (!this.handlers.has(event)) this.handlers.set(event, new Set());
    this.handlers.get(event)!.add(handler);
    return () => this.handlers.get(event)?.delete(handler);  // returns unsubscribe
  }

  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    this.handlers.get(event)?.forEach(h => h(data));
  }
}

type AppEvents = { userLogin: { userId: string }; error: Error };
const emitter = new TypedEmitter<AppEvents>();
const unsub = emitter.on('userLogin', ({ userId }) => console.log(userId));
emitter.emit('userLogin', { userId: '123' });

// Singleton — module-level singleton (simplest approach)
class Database {
  private static instance: Database;
  private constructor(private url: string) {}

  static getInstance(url: string): Database {
    if (!Database.instance) Database.instance = new Database(url);
    return Database.instance;
  }

  query(sql: string) { /* ... */ }
}

// Repository pattern — separate data access from business logic
interface UserRepository {
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}

class PostgresUserRepository implements UserRepository {
  async findById(id: string) { /* DB query */ return null; }
  async findAll() { /* DB query */ return []; }
  async save(user: User) { /* DB upsert */ return user; }
  async delete(id: string) { /* DB delete */ }
}

class InMemoryUserRepository implements UserRepository {
  private store = new Map<string, User>();
  async findById(id: string) { return this.store.get(id) ?? null; }
  async findAll() { return [...this.store.values()]; }
  async save(user: User) { this.store.set(user.id, user); return user; }
  async delete(id: string) { this.store.delete(id); }
}

// Now you can test with InMemoryUserRepository, deploy with PostgresUserRepository
```

---

## 8. Performance Patterns

```typescript
// Debounce — delay execution until N ms after last call
function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

const handleSearch = debounce((query: string) => fetchResults(query), 300);
input.addEventListener('input', e => handleSearch((e.target as HTMLInputElement).value));

// Throttle — execute at most once per N ms
function throttle<T extends (...args: any[]) => any>(fn: T, limit: number): T {
  let lastCall = 0;
  return ((...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= limit) { lastCall = now; return fn(...args); }
  }) as T;
}

const handleScroll = throttle(() => updateScrollPosition(), 16);  // ~60fps

// Lazy initialization
class HeavyResource {
  private _data: Map<string, any> | null = null;

  get data(): Map<string, any> {
    if (!this._data) {
      this._data = this.loadData();  // only loads on first access
    }
    return this._data;
  }

  private loadData() { return new Map(); }
}

// WeakMap for private data / avoiding memory leaks
const privateData = new WeakMap<object, { secret: string }>();

class SecureClass {
  constructor(secret: string) {
    privateData.set(this, { secret });
  }
  getSecret() { return privateData.get(this)!.secret; }
}
// When instance is GC'd, WeakMap entry is automatically removed

// Web Workers for CPU-intensive tasks
// main.ts
const worker = new Worker(new URL('./worker.ts', import.meta.url));
worker.postMessage({ data: hugeArray });
worker.onmessage = (e) => console.log('Result:', e.data);

// worker.ts
self.onmessage = (e) => {
  const result = heavyComputation(e.data.data);
  self.postMessage(result);
};
```

---

## 9. React Patterns (Relevant TypeScript)

```typescript
// Generic components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return <ul>{items.map((item, i) => (
    <li key={keyExtractor(item)}>{renderItem(item, i)}</li>
  ))}</ul>;
}

// Custom hooks with proper typing
function useLocalStorage<T>(key: string, initial: T): [T, (value: T) => void] {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch { return initial; }
  });

  const setValue = (value: T) => {
    setStored(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [stored, setValue];
}

// Discriminated union for component state
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function DataComponent() {
  const [state, setState] = useState<AsyncState<User[]>>({ status: 'idle' });

  if (state.status === 'loading') return <Spinner />;
  if (state.status === 'error') return <Error message={state.error.message} />;
  if (state.status === 'success') return <UserList users={state.data} />;
  return <Button onClick={load}>Load</Button>;
}
```

---

## 10. Key Resources

| Resource | Why |
|----------|-----|
| **TypeScript Handbook** (typescriptlang.org) | Official, comprehensive, kept current |
| **Type Challenges** (github.com/type-challenges) | Best way to get good at the type system |
| **Total TypeScript** (totaltypescript.com) | Matt Pocock's courses — best paid TS resource |
| **You Don't Know JS** (Kyle Simpson, free on GitHub) | Deep JS internals: scope, closures, `this`, prototypes |
| **JavaScript Info** (javascript.info) | Best free comprehensive JS reference |
| **Effective TypeScript** (Dan Vanderkam) | 62 specific ways to improve your TS |
| **MDN Web Docs** | Event loop, Web APIs, browser APIs |
| **Node.js docs** | libuv event loop, streams, worker threads |
