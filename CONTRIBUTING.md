# Contributing to Data Structures Handbook

Thanks for your interest in contributing! Here's how to keep things consistent.

## Adding a New Problem

1. Open the relevant `problems.py / problems.ts / problems.rs` file
2. Add your problem following the existing format:
   - Problem title and source (LeetCode #, etc.)
   - Difficulty tag 🟢🟡🔴
   - Problem description in a docstring/comment
   - Your solution with inline comments explaining the approach
   - Time and space complexity at the bottom of the function

## Adding a New Data Structure

1. Create a folder: `python/<structure_name>/`
2. Add `<structure>.py` — clean implementation with comments
3. Add `problems.py` — at least 5 problems of varying difficulty
4. Mirror the implementation in `javascript/` and `rust/`
5. Update the main `README.md` table

## Code Style

### Python
- Type hints on all functions
- Docstrings on all classes and public methods
- Follow PEP 8

### TypeScript
- Explicit types everywhere (no `any`)
- JSDoc comments on public methods

### Rust
- Doc comments (`///`) on all public items
- `#[allow(dead_code)]` where appropriate for educational stubs
- `cargo clippy` should pass with no warnings

## Commit Messages

```
feat(python/graphs): add Dijkstra's algorithm
fix(rust/trees): correct AVL rotation logic
docs(readme): update complexity cheatsheet
```
