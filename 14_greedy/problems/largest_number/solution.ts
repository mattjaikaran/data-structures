export function largestNumber(nums: number[]): string {
  const strs = nums.map(String);
  strs.sort((a, b) => (b+a > a+b ? 1 : b+a < a+b ? -1 : 0));
  const result = strs.join('');
  return result[0] === '0' ? '0' : result;
}
