function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { boatsToSavePeople } from '../../problems/boats_to_save_people/solution.ts';



assert(boatsToSavePeople([1,2],3) === 1, "boats");
assert(boatsToSavePeople([3,2,2,1],3) === 3, "boats2");
console.log('PASS 14_greedy/boats_to_save_people (ts)');
