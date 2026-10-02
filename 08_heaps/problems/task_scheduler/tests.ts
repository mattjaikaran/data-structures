function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { taskScheduler } from '../../problems/task_scheduler/solution.ts';



assert(taskScheduler([..."AAAAABCD"],2)===13,"taskScheduler");
assert(taskScheduler([..."AAABBB"],2)===8,"taskScheduler2");
console.log('PASS 08_heaps/task_scheduler (ts)');
