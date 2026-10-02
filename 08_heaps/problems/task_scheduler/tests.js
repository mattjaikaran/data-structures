function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { taskScheduler } from '../../problems/task_scheduler/solution.js';



assert(taskScheduler([..."AAAAABCD"], 2) === 13, "taskScheduler");
assert(taskScheduler([..."AAABBB"], 2) === 8, "taskScheduler2");
console.log('PASS 08_heaps/task_scheduler (js)');
