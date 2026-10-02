export function climbingStairs(n: number): number {
  if (n <= 2) return n;
  let [a, b] = [1, 2];
  for (let i = 3; i <= n; i++) [a, b] = [b, a + b];
  return b;
}
