# Valid ip address

Practice the matching question: [LeetCode #468: Validate IP Address](https://leetcode.com/problems/validate-ip-address/).

Classify an address as IPv4, IPv6, or invalid.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/valid_ip_address py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `valid_ip_address` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert valid_ip_address("172.16.254.1")=="IPv4"
```

[Back to the topic](../../README.md)
