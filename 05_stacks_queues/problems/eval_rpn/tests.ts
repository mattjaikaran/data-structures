function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { evalRPN } from '../../problems/eval_rpn/solution.ts';



assert(evalRPN(["2","1","+","3","*"]) === 9, "rpn 1");
assert(evalRPN(["4","13","5","/","+"]) === 6, "rpn 2");
console.log('PASS 05_stacks_queues/eval_rpn (ts)');
