function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { meetingRooms } from '../../problems/meeting_rooms/solution.ts';



assert(!meetingRooms([[0,30],[5,10],[15,20]]), "meetingRooms conflict");
assert(meetingRooms([[7,10],[2,4]]), "meetingRooms ok");
console.log('PASS 14_greedy/meeting_rooms (ts)');
