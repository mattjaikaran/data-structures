export function houseRobber(nums: number[]): number {
  let [a, b] = [0, 0];
  for (const n of nums) [a, b] = [b, Math.max(b, a + n)];
  return b;
}
