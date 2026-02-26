# Python Deep Dive
### For engineers who know the basics and want to write production-quality code

---

## 1. The Data Model — How Python Really Works

Everything in Python is an object. Understanding the **data model** (dunder methods) lets you make your own classes feel native.

```python
class Vector:
    def __init__(self, x, y): self.x, self.y = x, y
    def __repr__(self):   return f"Vector({self.x}, {self.y})"
    def __add__(self, o): return Vector(self.x+o.x, self.y+o.y)
    def __mul__(self, s): return Vector(self.x*s, self.y*s)
    def __abs__(self):    return (self.x**2 + self.y**2)**0.5
    def __bool__(self):   return bool(abs(self))
    def __len__(self):    return 2
    def __getitem__(self, i): return (self.x, self.y)[i]
    def __iter__(self):   return iter((self.x, self.y))
    def __eq__(self, o):  return self.x==o.x and self.y==o.y

v1, v2 = Vector(1, 2), Vector(3, 4)
print(v1 + v2)      # Vector(4, 6)
print(v1 * 3)       # Vector(3, 6)
print(list(v1))     # [1, 2] — iterable because __iter__
print(abs(v2))      # 5.0
```

**Key dunders to know:**

| Dunder | Triggered by |
|--------|-------------|
| `__repr__` / `__str__` | `repr()` / `str()`, debugging |
| `__eq__`, `__lt__`, `__hash__` | `==`, `<`, sets/dicts |
| `__len__`, `__getitem__` | `len()`, `obj[i]`, iteration |
| `__enter__`, `__exit__` | `with` statement |
| `__call__` | `obj()` — make instances callable |
| `__getattr__`, `__setattr__` | Attribute access |
| `__slots__` | Memory optimization, restrict attributes |

---

## 2. Generators & Iterators — Lazy Everything

Generators produce values **on demand**. No memory wasted on giant lists.

```python
# Generator function — yields one value at a time
def fibonacci():
    a, b = 0, 1
    while True:          # infinite sequence
        yield a
        a, b = b, a + b

# Takes only what you need
from itertools import islice
first_10 = list(islice(fibonacci(), 10))
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Generator expression — like list comp but lazy
squares = (x**2 for x in range(10_000_000))  # no memory allocated yet
total = sum(squares)  # processes one at a time

# yield from — delegate to sub-generator
def chain(*iterables):
    for it in iterables:
        yield from it   # cleaner than: for item in it: yield item

# Send values INTO a generator (coroutine pattern)
def accumulator():
    total = 0
    while True:
        value = yield total   # yield sends total out, receives value in
        if value is None: break
        total += value

acc = accumulator()
next(acc)        # prime the generator (advance to first yield)
acc.send(10)     # → 10
acc.send(20)     # → 30
acc.send(5)      # → 35
```

**`itertools` — memorize these:**

```python
import itertools as it

it.count(10)              # 10, 11, 12, ... (infinite counter)
it.cycle([1,2,3])         # 1,2,3,1,2,3,... (infinite cycle)
it.repeat(x, n)           # x, x, x ... n times
it.chain([1,2],[3,4])     # 1,2,3,4
it.islice(gen, 5)         # take first 5 from any iterable
it.takewhile(pred, it)    # take while condition is true
it.dropwhile(pred, it)    # skip while condition is true
it.groupby(data, key)     # group consecutive equal elements
it.product([1,2],[3,4])   # cartesian product: (1,3),(1,4),(2,3),(2,4)
it.permutations([1,2,3])  # all orderings
it.combinations([1,2,3],2)# all pairs without repetition
it.accumulate([1,2,3,4])  # running sum: [1,3,6,10]
```

---

## 3. Decorators — Deep Understanding

A decorator is a function that **wraps** another function. The `@` syntax is just sugar.

```python
import functools, time

# Anatomy of a decorator
def my_decorator(func):
    @functools.wraps(func)   # preserves func.__name__, __doc__, etc.
    def wrapper(*args, **kwargs):
        print(f"Before {func.__name__}")
        result = func(*args, **kwargs)
        print(f"After {func.__name__}")
        return result
    return wrapper

# Decorator with arguments — factory pattern
def retry(max_attempts=3, delay=1.0):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1: raise
                    time.sleep(delay)
        return wrapper
    return decorator

@retry(max_attempts=3, delay=0.5)
def unstable_api_call():
    ...

# Class-based decorator — useful when you need state
class cache:
    def __init__(self, func):
        self.func = func
        self.memo = {}
        functools.update_wrapper(self, func)

    def __call__(self, *args):
        if args not in self.memo:
            self.memo[args] = self.func(*args)
        return self.memo[args]

@cache
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

# Decorator stacking — applied bottom-up
@decorator_a    # applied second (outer)
@decorator_b    # applied first (inner)
def func(): ...
# equivalent to: func = decorator_a(decorator_b(func))

# Property decorators — encapsulation done right
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self): return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0: raise ValueError("Radius cannot be negative")
        self._radius = value

    @property
    def area(self): return 3.14159 * self._radius ** 2

    @staticmethod
    def from_diameter(d): return Circle(d / 2)

    @classmethod
    def unit(cls): return cls(1)
```

**`functools` essentials:**

```python
functools.wraps(func)          # copy metadata when wrapping
functools.lru_cache(maxsize=128) # memoization decorator
functools.cached_property      # lazy computed attribute (computed once)
functools.partial(func, *args) # freeze some arguments
functools.reduce(f, iterable)  # fold left: f(f(f(a,b),c),d)
functools.total_ordering       # define __eq__ + one of __lt__/__gt__ → get all
```

---

## 4. Context Managers

```python
# Method 1: class with __enter__ / __exit__
class Timer:
    def __enter__(self):
        self.start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.elapsed = time.perf_counter() - self.start
        return False   # False = don't suppress exceptions

with Timer() as t:
    time.sleep(0.1)
print(f"Elapsed: {t.elapsed:.3f}s")

# Method 2: contextlib.contextmanager — generator-based
from contextlib import contextmanager, suppress

@contextmanager
def managed_resource(name):
    print(f"Acquiring {name}")
    resource = {"name": name, "data": []}
    try:
        yield resource            # everything before yield = __enter__
    finally:
        print(f"Releasing {name}")  # everything after yield = __exit__

with managed_resource("db_conn") as res:
    res["data"].append("query result")

# suppress — ignore specific exceptions cleanly
with suppress(FileNotFoundError):
    open("might_not_exist.txt")
```

---

## 5. Async / Await — Concurrency Without Threads

Python's `asyncio` is **single-threaded cooperative multitasking**. Perfect for I/O-bound work (APIs, databases, file I/O).

```python
import asyncio
import aiohttp   # async HTTP — pip install aiohttp

# Basic coroutine
async def fetch_data(url: str) -> dict:
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

# Running concurrently — the key advantage
async def main():
    urls = ["https://api.example.com/1", "https://api.example.com/2"]

    # Sequential: ~2s if each takes 1s
    # results = [await fetch_data(url) for url in urls]

    # Concurrent: ~1s total
    results = await asyncio.gather(*[fetch_data(url) for url in urls])
    return results

# asyncio.gather vs asyncio.wait
# gather: returns results in order, raises on first exception
# wait:   more control, returns sets of done/pending tasks

# Async generators
async def paginate(url: str):
    page = 1
    while True:
        data = await fetch_data(f"{url}?page={page}")
        if not data: break
        yield data
        page += 1

async def process():
    async for page in paginate("https://api.example.com/items"):
        process_page(page)

# Async context managers
class AsyncDB:
    async def __aenter__(self):
        self.conn = await create_connection()
        return self.conn

    async def __aexit__(self, *args):
        await self.conn.close()

async def query():
    async with AsyncDB() as db:
        return await db.execute("SELECT * FROM users")

# Task management
async def with_timeout():
    try:
        async with asyncio.timeout(5.0):   # Python 3.11+
            result = await slow_operation()
    except asyncio.TimeoutError:
        print("Timed out")

# Semaphore — limit concurrent operations
async def limited_fetch(urls: list[str], limit: int = 10):
    sem = asyncio.Semaphore(limit)
    async def bounded(url):
        async with sem:
            return await fetch_data(url)
    return await asyncio.gather(*[bounded(url) for url in urls])
```

**When to use what:**
- `asyncio` — I/O-bound (network, disk, DB)
- `threading` — I/O-bound + must use blocking libraries
- `multiprocessing` / `concurrent.futures.ProcessPoolExecutor` — CPU-bound

---

## 6. Type System — Modern Python Typing

```python
from typing import Optional, Union, TypeVar, Generic, Protocol
from typing import Callable, Iterator, Generator, AsyncGenerator
from collections.abc import Sequence, Mapping

# Basic annotations
def greet(name: str, times: int = 1) -> str:
    return (name + " ") * times

# Union and Optional (Python 3.10+: X | Y syntax)
def process(data: str | bytes | None) -> str:
    ...

# TypeVar — generic functions
T = TypeVar('T')
def first(lst: list[T]) -> T:
    return lst[0]

# Generic classes
class Stack(Generic[T]):
    def __init__(self) -> None: self._items: list[T] = []
    def push(self, item: T) -> None: self._items.append(item)
    def pop(self) -> T: return self._items.pop()

# Protocol — structural subtyping (duck typing with type safety)
class Drawable(Protocol):
    def draw(self) -> None: ...

def render(obj: Drawable) -> None:  # any object with .draw() works
    obj.draw()

# TypedDict — typed dicts
from typing import TypedDict
class User(TypedDict):
    id: int
    name: str
    email: str

# Literal types
from typing import Literal
def set_direction(dir: Literal['left', 'right', 'up', 'down']) -> None: ...

# dataclasses — structured data without boilerplate
from dataclasses import dataclass, field

@dataclass(frozen=True)   # frozen = immutable
class Point:
    x: float
    y: float
    label: str = "origin"
    tags: list[str] = field(default_factory=list)

    def distance_to(self, other: 'Point') -> float:
        return ((self.x-other.x)**2 + (self.y-other.y)**2)**0.5

p = Point(1.0, 2.0)
print(p)  # Point(x=1.0, y=2.0, label='origin', tags=[])
```

---

## 7. Memory & Performance

```python
# __slots__ — avoid per-instance __dict__, saves ~50% memory for small objects
class SlottedPoint:
    __slots__ = ('x', 'y')
    def __init__(self, x, y): self.x, self.y = x, y

# sys.getsizeof — measure object size
import sys
print(sys.getsizeof([1,2,3]))          # list: 88 bytes
print(sys.getsizeof((1,2,3)))          # tuple: 64 bytes — prefer tuples when immutable

# Profile with cProfile
import cProfile
cProfile.run('my_function()', sort='cumulative')

# Line-level profiling: pip install line_profiler
# @profile decorator, then: kernprof -l -v script.py

# Memory profiling: pip install memory_profiler
# @memory_profiler.profile

# timeit — micro-benchmarks
import timeit
t = timeit.timeit('[x**2 for x in range(1000)]', number=10000)
print(f"{t:.3f}s")

# NumPy for numeric heavy lifting — orders of magnitude faster
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)           # vectorized: no Python loop
print(arr.sum())
print(arr[arr > 2])      # boolean indexing

# collections module — specialized containers
from collections import Counter, defaultdict, deque, OrderedDict, namedtuple

# namedtuple — immutable, lightweight, named fields
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(p.x, p.y)

# Counter — frequency counting
words = "the quick brown fox the fox".split()
c = Counter(words)
print(c.most_common(2))  # [('the', 2), ('fox', 2)]

# deque — O(1) both ends, used for BFS and sliding window
q = deque(maxlen=3)      # bounded deque — auto-drops old items
for i in range(5): q.append(i)
print(q)                 # deque([2, 3, 4], maxlen=3)
```

---

## 8. Design Patterns in Python

```python
# Singleton — only one instance
class Singleton:
    _instance = None
    def __new__(cls):
        if not cls._instance: cls._instance = super().__new__(cls)
        return cls._instance

# Observer pattern
class EventEmitter:
    def __init__(self): self._listeners: dict[str, list] = {}
    def on(self, event, fn): self._listeners.setdefault(event, []).append(fn)
    def emit(self, event, *args): [f(*args) for f in self._listeners.get(event, [])]

# Strategy pattern — swap algorithms at runtime
from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data: list) -> list: ...

class QuickSort(SortStrategy):
    def sort(self, data): return sorted(data)  # simplified

class Sorter:
    def __init__(self, strategy: SortStrategy):
        self.strategy = strategy
    def sort(self, data): return self.strategy.sort(data)

# Factory pattern
def create_shape(shape_type: str, **kwargs):
    shapes = {'circle': Circle, 'square': Square}
    if shape_type not in shapes: raise ValueError(f"Unknown: {shape_type}")
    return shapes[shape_type](**kwargs)
```

---

## 9. Testing — pytest Best Practices

```python
# pip install pytest pytest-asyncio pytest-cov

# conftest.py — shared fixtures
import pytest

@pytest.fixture
def db():
    connection = create_test_db()
    yield connection      # setup above yield, teardown below
    connection.close()

@pytest.fixture(scope="session")  # created once per test session
def app():
    return create_app(testing=True)

# Parameterized tests
@pytest.mark.parametrize("input,expected", [
    ([1,2,3], 6),
    ([], 0),
    ([-1, 1], 0),
])
def test_sum(input, expected):
    assert sum(input) == expected

# Mock external dependencies
from unittest.mock import patch, MagicMock

def test_fetch_user():
    with patch('myapp.requests.get') as mock_get:
        mock_get.return_value.json.return_value = {"id": 1, "name": "Alice"}
        result = fetch_user(1)
        assert result["name"] == "Alice"

# Async tests
@pytest.mark.asyncio
async def test_async_function():
    result = await my_async_function()
    assert result == expected

# Coverage: pytest --cov=myapp --cov-report=html
```

---

## 10. Advanced Patterns Worth Knowing

```python
# Descriptor protocol — how @property works under the hood
class Validated:
    def __set_name__(self, owner, name): self.name = name
    def __get__(self, obj, type=None):
        if obj is None: return self
        return obj.__dict__.get(self.name)
    def __set__(self, obj, value):
        self.validate(value)
        obj.__dict__[self.name] = value
    def validate(self, value): raise NotImplementedError

class PositiveNumber(Validated):
    def validate(self, value):
        if value <= 0: raise ValueError(f"{self.name} must be positive")

class Product:
    price = PositiveNumber()
    quantity = PositiveNumber()

# Metaclass — class of a class
class Singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class MyService(metaclass=Singleton):
    pass

# Abstract Base Classes
from abc import ABC, abstractmethod

class Repository(ABC):
    @abstractmethod
    def get(self, id: int): ...
    @abstractmethod
    def save(self, entity): ...

    def get_or_create(self, id: int, default):  # concrete method using abstracts
        result = self.get(id)
        if result is None: self.save(default); return default
        return result

# Structural pattern matching (Python 3.10+)
def handle_command(command):
    match command.split():
        case ["quit"]:
            return "Quitting"
        case ["go", direction]:
            return f"Going {direction}"
        case ["go", direction, speed] if speed.isdigit():
            return f"Going {direction} at speed {speed}"
        case _:
            return "Unknown command"
```

---

## Resources — What to Read Next

| Resource | Why |
|----------|-----|
| **Fluent Python** (Ramalho) | The definitive deep dive. Covers data model, generators, decorators, descriptors. |
| **Python Cookbook** (Beazley) | Practical recipes for real problems. |
| **High Performance Python** (Gorelick) | Profiling, NumPy, Cython, multiprocessing. |
| **Architecture Patterns with Python** (Percival) | DDD, repositories, events, CQRS. |
| `python.org/dev/peps` | PEPs themselves — read PEP 20, 8, 484, 526, 634, 657 |
| **Real Python** (realpython.com) | Best free tutorials on specific topics |
| **CPython source** (github.com/python/cpython) | Read `Objects/listobject.c`, `Objects/dictobject.c` |
