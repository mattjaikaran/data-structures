function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { meetingRoomsII } from '../../problems/meeting_rooms_ii/solution.ts';



assert(meetingRoomsII([[0,30],[5,10],[15,20]]) === 2, "meetingRoomsII");
console.log('PASS 14_greedy/meeting_rooms_ii (ts)');
