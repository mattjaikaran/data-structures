# Restore ip addresses

Practice the matching question: [LeetCode #93: Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/).

Insert three separators to form valid IPv4 addresses from a digit string.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/restore_ip_addresses js
npm run practice -- 13_backtracking/problems/restore_ip_addresses py
npm run practice -- 13_backtracking/problems/restore_ip_addresses ts
npm run practice -- 13_backtracking/problems/restore_ip_addresses rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `restoreIpAddresses` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `restore_ip_addresses` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `restoreIpAddresses` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `restore_ip_addresses` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const ip = restoreIpAddresses("25525511135");
assert(ip.includes("255.255.11.135") && ip.includes("255.255.111.35"), "restoreIp");
```

[Back to the topic](../../README.md)
