function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { MinStack } from '../../fundamentals/min_stack/solution.js';



const ms = new MinStack();
ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);
assert(ms.getMin() === 2, "MinStack min");
ms.pop();
assert(ms.getMin() === 3, "MinStack after pop");
console.log('PASS 05_stacks_queues/min_stack (js)');
