# Valid ip address

Practice the matching question: [LeetCode #468: Validate IP Address](https://leetcode.com/problems/validate-ip-address/).

Classify an address as IPv4, IPv6, or invalid.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/problems/valid_ip_address py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/problems/valid_ip_address py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
