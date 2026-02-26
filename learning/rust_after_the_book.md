# Rust — After The Book
### Where to go once you've finished "The Rust Programming Language"

The Book covers ownership, borrowing, lifetimes, traits, enums, error handling, and basic concurrency.
This guide picks up from there.

---

## 1. Lifetimes — Going Deeper

The Book introduces lifetimes but many patterns don't click until you fight the borrow checker a few times.

```rust
// Named lifetime parameters — you're promising "output lives as long as input"
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

// Lifetime in structs — struct cannot outlive the reference it holds
struct Excerpt<'a> {
    text: &'a str,
}

impl<'a> Excerpt<'a> {
    fn level(&self) -> i32 { 3 }
    // lifetime elision: return ref borrows from &self, compiler infers 'a
    fn announce(&self, s: &str) -> &str {
        println!("{}", s);
        self.text
    }
}

// Static lifetime — lives for the whole program
let s: &'static str = "hardcoded string";

// Higher-ranked trait bounds (HRTB) — "for any lifetime 'a"
// Used when you need a closure to work with any lifetime, not a specific one
fn apply_to_str<F>(f: F, s: &str) -> usize
where
    F: for<'a> Fn(&'a str) -> usize,  // works with any lifetime
{
    f(s)
}

// The lifetime variance rules (important for advanced usage)
// &'a T:       covariant over 'a  (longer lifetime is a subtype)
// &'a mut T:   invariant over T   (can't substitute a different T)
// fn(T) -> U:  contravariant in T, covariant in U
```

**When lifetimes become obvious:**
- If a function returns a reference, it came from one of the inputs (or is `'static`)
- If a struct holds a reference, add a lifetime parameter
- If the borrow checker complains and you don't know why, add explicit lifetimes and read the error again

---

## 2. Traits — Advanced Usage

```rust
use std::fmt;
use std::ops::Add;

// Default implementations + overriding
trait Summary {
    fn author(&self) -> String;

    fn summarize(&self) -> String {         // default impl using abstract method
        format!("(Read more from {}...)", self.author())
    }
}

// Trait as function parameter — three equivalent syntaxes
fn notify(item: &impl Summary) { ... }                   // impl Trait (simple)
fn notify<T: Summary>(item: &T) { ... }                  // trait bound
fn notify<T>(item: &T) where T: Summary + fmt::Debug { } // where clause (cleaner for complex bounds)

// Returning a trait — useful for closures
fn make_adder(x: i32) -> impl Fn(i32) -> i32 {
    move |y| x + y
}

// Trait objects — dynamic dispatch via vtable (dyn Trait)
// Use when: different types in same collection, or when returning multiple types
fn draw_all(shapes: &[Box<dyn Drawable>]) {
    for shape in shapes { shape.draw(); }
}

// impl Trait vs dyn Trait:
// impl Trait = monomorphized, one concrete type, zero runtime cost, stack allocation
// dyn Trait  = vtable lookup, runtime polymorphism, heap allocation, type erasure

// Operator overloading via traits
#[derive(Debug, Clone, Copy)]
struct Vec2 { x: f64, y: f64 }

impl Add for Vec2 {
    type Output = Vec2;
    fn add(self, rhs: Vec2) -> Vec2 { Vec2 { x: self.x + rhs.x, y: self.y + rhs.y } }
}

impl fmt::Display for Vec2 {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

// Blanket implementations — implement trait for ALL types satisfying a bound
impl<T: fmt::Display> ToString for T { ... }  // std does this for all Display types

// Associated types vs generics
// Associated type: one impl per type (e.g. Iterator has one Item type)
// Generic:         multiple impls per type (e.g. From<T> implemented for many T)

trait Container {
    type Item;              // associated type — fixed per implementation
    fn first(&self) -> &Self::Item;
}

// Newtype pattern — wrap foreign types to implement foreign traits
struct Meters(f64);
struct Kg(f64);
impl fmt::Display for Meters {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}m", self.0)
    }
}
```

---

## 3. Error Handling — Production Patterns

```rust
use std::fmt;
use std::num::ParseIntError;

// Custom error type — what production code looks like
#[derive(Debug)]
pub enum AppError {
    Io(std::io::Error),
    Parse(ParseIntError),
    NotFound(String),
    Custom(String),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            AppError::Io(e)       => write!(f, "IO error: {}", e),
            AppError::Parse(e)    => write!(f, "Parse error: {}", e),
            AppError::NotFound(s) => write!(f, "Not found: {}", s),
            AppError::Custom(s)   => write!(f, "{}", s),
        }
    }
}

// Auto-convert from underlying errors with From
impl From<std::io::Error> for AppError {
    fn from(e: std::io::Error) -> Self { AppError::Io(e) }
}
impl From<ParseIntError> for AppError {
    fn from(e: ParseIntError) -> Self { AppError::Parse(e) }
}

// Now ? operator auto-converts
fn read_port(path: &str) -> Result<u16, AppError> {
    let content = std::fs::read_to_string(path)?;  // io::Error → AppError::Io
    let port = content.trim().parse::<u16>()?;      // ParseIntError → AppError::Parse
    Ok(port)
}

// thiserror crate — reduces all of the above to:
// use thiserror::Error;
// #[derive(Debug, Error)]
// pub enum AppError {
//     #[error("IO error: {0}")] Io(#[from] std::io::Error),
//     #[error("Not found: {0}")] NotFound(String),
// }

// anyhow crate — for binaries/CLI where you don't need to match on errors
// use anyhow::{Result, Context, bail, ensure};
// fn run() -> anyhow::Result<()> {
//     let data = std::fs::read_to_string("file.txt").context("Failed to read config")?;
//     ensure!(!data.is_empty(), "Config file is empty");
//     Ok(())
// }
```

**Rule of thumb:**
- Library code → typed errors (`thiserror` or manual)
- Binary/CLI code → `anyhow` for easy propagation
- Never use `.unwrap()` in production (use `.expect("context")` at minimum)

---

## 4. Closures & Functional Patterns

```rust
// The three closure traits:
// Fn     — borrows immutably, can be called multiple times
// FnMut  — borrows mutably, can be called multiple times
// FnOnce — takes ownership, can only be called once (every closure is at least this)

let x = 5;
let add_x = |n| n + x;           // Fn: captures x by ref
let mut count = 0;
let mut inc = || { count += 1; }; // FnMut: captures count mutably
let name = String::from("Alice");
let greet = move || println!("{}", name);  // FnOnce/Fn: moves name in

// Higher-order functions
let numbers = vec![1, 2, 3, 4, 5];

let doubled: Vec<i32> = numbers.iter().map(|&x| x * 2).collect();
let evens: Vec<&i32> = numbers.iter().filter(|&&x| x % 2 == 0).collect();
let sum: i32 = numbers.iter().sum();
let product: i32 = numbers.iter().product();
let max = numbers.iter().max();

// Iterator adaptors — all lazy, nothing executes until consumed
numbers.iter()
    .filter(|&&x| x > 2)
    .map(|&x| x * x)
    .take(3)
    .for_each(|x| println!("{}", x));

// fold — the general accumulator (reduce)
let sum = numbers.iter().fold(0, |acc, &x| acc + x);

// zip — combine two iterators
let names = vec!["Alice", "Bob", "Carol"];
let scores = vec![95, 87, 92];
let combined: Vec<_> = names.iter().zip(scores.iter()).collect();

// flat_map — map then flatten
let words = vec!["hello world", "foo bar"];
let chars: Vec<&str> = words.iter().flat_map(|s| s.split_whitespace()).collect();

// chain
let a = vec![1, 2]; let b = vec![3, 4];
let chained: Vec<_> = a.iter().chain(b.iter()).collect();

// Custom iterator
struct Counter { count: u32, max: u32 }
impl Counter {
    fn new(max: u32) -> Self { Counter { count: 0, max } }
}
impl Iterator for Counter {
    type Item = u32;
    fn next(&mut self) -> Option<u32> {
        if self.count < self.max { self.count += 1; Some(self.count) }
        else { None }
    }
}
// Now Counter gets ALL iterator methods for free: map, filter, fold, sum, etc.
let sum: u32 = Counter::new(5).zip(Counter::new(5).skip(1)).map(|(a,b)| a*b).sum();
```

---

## 5. Smart Pointers

```rust
use std::cell::RefCell;
use std::rc::{Rc, Weak};
use std::sync::{Arc, Mutex, RwLock};

// Box<T> — heap allocation, single owner
// Use when: recursive types, large data on heap, trait objects
let b = Box::new(5);
let b: Box<dyn std::fmt::Display> = Box::new("trait object");

// Rc<T> — reference counted, single-threaded shared ownership
// Use when: multiple parts of code need to read the same data, no threads
let a = Rc::new(5);
let b = Rc::clone(&a);   // increments ref count (doesn't deep clone)
println!("Count: {}", Rc::strong_count(&a));  // 2

// Rc<RefCell<T>> — shared MUTABLE ownership (single-threaded)
// The "interior mutability" pattern: borrow rules checked at RUNTIME
let shared = Rc::new(RefCell::new(vec![]));
let c1 = Rc::clone(&shared);
let c2 = Rc::clone(&shared);
c1.borrow_mut().push(1);   // runtime borrow check
c2.borrow_mut().push(2);
println!("{:?}", shared.borrow());   // [1, 2]
// panics at runtime if you borrow_mut while already borrowed

// Weak<T> — prevent reference cycles (Rc but doesn't own)
// Use for: parent-child relationships where child has ref to parent
struct Node { value: i32, parent: RefCell<Weak<Node>>, children: RefCell<Vec<Rc<Node>>> }

// Arc<T> — atomically reference counted, THREAD-SAFE shared ownership
// Arc<Mutex<T>> = the standard way to share mutable state across threads
let counter = Arc::new(Mutex::new(0));
let counter_clone = Arc::clone(&counter);
std::thread::spawn(move || {
    let mut num = counter_clone.lock().unwrap();
    *num += 1;
});

// RwLock — multiple readers OR one writer
let data = Arc::new(RwLock::new(vec![1, 2, 3]));
let r1 = data.read().unwrap();   // multiple readers fine
let r2 = data.read().unwrap();   // simultaneously
drop(r1); drop(r2);
let mut w = data.write().unwrap(); // exclusive write
w.push(4);

// Summary:
// Box<T>              — heap, single owner
// Rc<T>               — heap, multiple owners, single thread
// Arc<T>              — heap, multiple owners, multi thread
// Cell<T>             — interior mutability, Copy types
// RefCell<T>          — interior mutability, any type, runtime checked
// Mutex<T>            — interior mutability, thread-safe, blocking
// RwLock<T>           — interior mutability, thread-safe, read-write split
```

---

## 6. Concurrency

```rust
use std::thread;
use std::sync::{Arc, Mutex, mpsc};

// Spawning threads
let handle = thread::spawn(|| {
    println!("from thread");
    42   // last expression = return value
});
let result = handle.join().unwrap();  // block until thread finishes

// Move closures — capture environment by value (necessary for threads)
let v = vec![1, 2, 3];
let handle = thread::spawn(move || println!("{:?}", v));  // v moved in

// Message passing — channels (like Go's channels)
let (tx, rx) = mpsc::channel();      // tx = sender, rx = receiver
let tx2 = tx.clone();                // multiple senders

thread::spawn(move || { tx.send("hello").unwrap(); });
thread::spawn(move || { tx2.send("world").unwrap(); });

// rx is an iterator over incoming messages
for msg in rx { println!("{}", msg); }

// Shared state — Arc<Mutex<T>>
let shared = Arc::new(Mutex::new(0));
let handles: Vec<_> = (0..10).map(|_| {
    let s = Arc::clone(&shared);
    thread::spawn(move || { *s.lock().unwrap() += 1; })
}).collect();
handles.into_iter().for_each(|h| h.join().unwrap());
println!("{}", *shared.lock().unwrap());  // 10

// Rayon — data parallelism library (parallel iterators)
// use rayon::prelude::*;
// let sum: i32 = (0..1_000_000).into_par_iter().sum();   // uses all CPU cores
// vec.par_iter().for_each(|x| process(x));              // parallel map

// Tokio — async runtime (most popular for async Rust)
// [dependencies]
// tokio = { version = "1", features = ["full"] }
//
// #[tokio::main]
// async fn main() {
//     let result = tokio::join!(task_a(), task_b());  // run concurrently
//     let handle = tokio::spawn(async { expensive() }); // spawn task
// }
```

---

## 7. Macros

```rust
// Declarative macros (macro_rules!) — pattern matching on syntax
macro_rules! vec_of_strings {
    ($($x:expr),*) => {
        vec![$($x.to_string()),*]
    }
}
let v = vec_of_strings!["hello", "world"];

// Common patterns
macro_rules! assert_approx_eq {
    ($a:expr, $b:expr, $eps:expr) => {
        assert!(($a - $b).abs() < $eps,
            "assertion failed: |{} - {}| >= {}", $a, $b, $eps)
    }
}

// Procedural macros (derive macros) — you use these constantly
// derive(Debug, Clone, PartialEq, Serialize, Deserialize)
// These are COMPILE-TIME code generation

// Custom derive — requires separate crate, but here's the concept:
// #[proc_macro_derive(MyTrait)]
// pub fn derive_my_trait(input: TokenStream) -> TokenStream { ... }

// Popular proc macro crates:
// serde       — Serialize/Deserialize
// thiserror   — Error impls
// derive_more — Display, From, Into, etc.
// clap        — CLI argument parsing
// sqlx        — compile-time SQL checking
```

---

## 8. Key Crates to Know

### Async
| Crate | Purpose |
|-------|---------|
| `tokio` | Async runtime (most common) |
| `async-std` | Alternative async runtime |
| `reqwest` | Async HTTP client |
| `axum` / `actix-web` | Web frameworks |
| `sqlx` | Async SQL (compile-time checked) |

### Data & Serialization
| Crate | Purpose |
|-------|---------|
| `serde` + `serde_json` | Serialization/deserialization |
| `csv` | CSV parsing |
| `toml` | TOML config files |

### CLI & Utilities
| Crate | Purpose |
|-------|---------|
| `clap` | CLI argument parsing |
| `anyhow` / `thiserror` | Error handling |
| `tracing` | Structured logging/instrumentation |
| `rayon` | Data parallelism |
| `itertools` | Extra iterator adapters |
| `regex` | Regular expressions |
| `chrono` | Date/time |
| `uuid` | UUIDs |
| `rand` | Random numbers |

### Audio (relevant for plugin dev)
| Crate | Purpose |
|-------|---------|
| `cpal` | Cross-platform audio I/O |
| `dasp` | Digital audio signal processing |
| `vst` / `nih-plug` | VST/CLAP plugin framework |

---

## 9. Unsafe Rust

```rust
// unsafe enables 5 things unavailable in safe Rust:
// 1. Dereference raw pointers
// 2. Call unsafe functions
// 3. Implement unsafe traits
// 4. Access/modify mutable statics
// 5. Access union fields

let mut x = 5;
let raw = &mut x as *mut i32;   // create raw pointer (safe)

unsafe {
    println!("{}", *raw);        // dereference (unsafe)
    *raw = 10;
}

// FFI (Foreign Function Interface) — calling C from Rust
extern "C" {
    fn abs(input: i32) -> i32;
}
unsafe { println!("{}", abs(-3)); }

// Exposing Rust to C
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 { a + b }

// The key rule: unsafe is about HUMAN-enforced invariants.
// You're telling the compiler "I checked this, trust me."
// Always add a SAFETY comment explaining why the code is actually safe.
unsafe {
    // SAFETY: ptr is non-null (checked above), properly aligned,
    // and valid for the lifetime 'a (guaranteed by caller contract)
    &*ptr
}
```

---

## 10. Audio Plugin Development with nih-plug

Since you're interested in building audio plugins:

```toml
# Cargo.toml
[dependencies]
nih_plug = { git = "https://github.com/robbert-vdh/nih-plug" }
```

```rust
use nih_plug::prelude::*;
use std::sync::Arc;

struct Gain {
    params: Arc<GainParams>,
}

#[derive(Params)]
struct GainParams {
    #[id = "gain"]
    pub gain: FloatParam,
}

impl Default for GainParams {
    fn default() -> Self {
        GainParams {
            gain: FloatParam::new(
                "Gain",
                util::db_to_gain(0.0),
                FloatRange::Skewed { min: util::db_to_gain(-30.0), max: util::db_to_gain(30.0), factor: FloatRange::gain_skew_factor(-30.0, 30.0) },
            )
            .with_smoother(SmoothingStyle::Logarithmic(50.0))
            .with_unit(" dB")
            .with_value_to_string(formatters::v2s_f32_gain_to_db(2))
            .with_string_to_value(formatters::s2v_f32_gain_to_db()),
        }
    }
}

impl Plugin for Gain {
    const NAME: &'static str = "Gain";
    const VENDOR: &'static str = "Material Endeavors";
    const VERSION: &'static str = env!("CARGO_PKG_VERSION");
    const AUDIO_IO_LAYOUTS: &'static [AudioIOLayout] = &[
        AudioIOLayout { main_input_channels: NonZeroU32::new(2), main_output_channels: NonZeroU32::new(2), ..AudioIOLayout::const_default() },
    ];
    type SysExMessage = ();
    type BackgroundTask = ();
    fn params(&self) -> Arc<dyn Params> { self.params.clone() }

    fn process(&mut self, buffer: &mut Buffer, _: &mut AuxiliaryBuffers, _: &mut impl ProcessContext<Self>) -> ProcessStatus {
        for channel_samples in buffer.iter_samples() {
            let gain = self.params.gain.smoothed.next();
            for sample in channel_samples { *sample *= gain; }
        }
        ProcessStatus::Normal
    }
}

nih_export_clap!(Gain);
nih_export_vst3!(Gain);
```

---

## Learning Path After The Book

### Recommended Order

1. **rustlings** (github.com/rust-lang/rustlings) — 100 small exercises. Do these immediately after finishing The Book.

2. **Rust by Example** (doc.rust-lang.org/rust-by-example) — code-first supplement to The Book.

3. **Programming Rust** (Blandy, Orendorff, Tindall) — the O'Reilly book. More depth than The Book on traits, closures, iterators, async.

4. **Rust for Rustaceans** (Gjengset) — intermediate-to-advanced. Lifetimes, types, macros, async, unsafe. Read after you've written real projects.

5. **The Rustonomicon** (doc.rust-lang.org/nomicon) — unsafe Rust. Read when you need it (FFI, custom allocators, lock-free structures).

6. **Async Rust** (docs.rs/tokio) — tokio docs + mini-redis tutorial is excellent.

7. **Zero To Production In Rust** (Palmieri) — build a production email newsletter API. Best real-world Rust project book.

### Practice Projects (in order of difficulty)

| Project | Concepts Practiced |
|---------|-------------------|
| CLI tool with `clap` | Error handling, file I/O, traits |
| JSON parser | Enums, pattern matching, recursive types |
| HTTP client wrapper | async/await, serde, error handling |
| Simple key-value store | HashMaps, file I/O, serialization |
| Multithreaded web scraper | Arc, Mutex, channels, tokio |
| Audio plugin with nih-plug | FFI, real-time constraints, unsafe |
| Custom allocator | unsafe, raw pointers, system calls |

### YouTube / Video

- **Jon Gjengset** (youtube.com/@jonhoo) — Live-codes complex Rust. The best Rust streamer. Start with "Crust of Rust" series.
- **No Boilerplate** — concise, opinionated Rust explainers.
- **Let's Get Rusty** — beginner to intermediate tutorials.

### Community

- **This Week in Rust** (this-week-in-rust.org) — weekly newsletter
- **r/rust** — active, helpful community
- **Rust Discord** — official server, very welcoming
- **users.rust-lang.org** — official forum
