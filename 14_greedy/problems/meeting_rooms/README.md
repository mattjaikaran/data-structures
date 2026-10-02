# Meeting rooms

Practice the matching question: [LeetCode #252: Meeting Rooms](https://leetcode.com/problems/meeting-rooms/).

Determine whether one person can attend all intervals without an overlap.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/meeting_rooms py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/meeting_rooms py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
