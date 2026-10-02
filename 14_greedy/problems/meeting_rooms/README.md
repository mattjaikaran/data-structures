# Meeting rooms

Practice the matching question: [LeetCode #252: Meeting Rooms](https://leetcode.com/problems/meeting-rooms/).

Determine whether one person can attend all intervals without an overlap.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/meeting_rooms js
npm run practice -- 14_greedy/problems/meeting_rooms py
npm run practice -- 14_greedy/problems/meeting_rooms ts
npm run practice -- 14_greedy/problems/meeting_rooms rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `meetingRooms` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `meeting_rooms` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `meetingRooms` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `meeting_rooms` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(!meetingRooms([[0,30],[5,10],[15,20]]), "meetingRooms conflict");
```

[Back to the topic](../../README.md)
