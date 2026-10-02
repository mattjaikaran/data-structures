function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { trapRainWater } from '../../problems/trap_rain_water/solution.js';



assert(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6, "trap classic");
assert(trapRainWater([4, 2, 0, 3, 2, 5]) === 9, "trap valley");
assert(trapRainWater([3, 0, 3]) === 3, "trap symmetric");
console.log('PASS 01_arrays/trap_rain_water (js)');
