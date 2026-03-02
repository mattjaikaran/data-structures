# Contributing

## Repo Structure

Each module lives in a numbered folder with implementations in four languages:

```
XX_module_name/
├── README.md          # Overview, complexity, problem list
├── module_name.py     # Python
├── module_name.js     # JavaScript
├── module_name.ts     # TypeScript
├── module_name.rs     # Rust
└── Cargo.toml         # Rust crate config
```

## Adding a New Problem

1. Find the relevant module folder (e.g. `07_trees/`)
2. Add your solution to the appropriate language file(s)
3. Follow the existing format:
   - Problem title and source (LeetCode #, etc.)
   - Complexity in a comment/docstring
   - Solution with clear variable names
   - Test cases in the `runTests()` block (Python/JS) or `#[test]` (Rust)
4. Ideally implement in all four languages, but partial contributions are welcome

## Adding a New Module

1. Create a numbered folder: `15_module_name/`
2. Add implementations in each language following the existing patterns
3. Add a `README.md` with complexity table and problem list
4. Add a `Cargo.toml` for the Rust implementation
5. Register the new crate in the root `Cargo.toml` workspace members
6. Update the root `README.md` study order table

## Code Style

### Python
- Type hints on all functions
- Docstrings on all classes and public methods
- PEP 8 formatting (use `ruff`)
- Tests in `run_tests()`, called via `if __name__ == "__main__"`

### JavaScript
- JSDoc type annotations on public functions
- Modern JS (ES2022+): classes, private fields, destructuring
- Tests in `runTests()` using `console.assert()`

### TypeScript
- Strict types everywhere (no `any`)
- JSDoc comments on public methods
- Tests using inline `assert()` or `console.assert()`

### Rust
- Doc comments (`///`) on all public items
- `#[allow(dead_code)]` where appropriate for educational code
- Tests in `#[cfg(test)]` modules
- `cargo clippy` should pass clean

## Running Tests

```bash
python XX_module/module.py        # Python
node XX_module/module.js          # JavaScript
bun XX_module/module.ts           # TypeScript
cargo test -p XX_module           # Rust (single)
cargo test                        # Rust (all)
```

## Commit Messages

```
feat(arrays): add sliding window maximum
fix(trees): correct AVL double rotation
docs(readme): add JavaScript run instructions
```
