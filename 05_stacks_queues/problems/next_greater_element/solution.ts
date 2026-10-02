/** 🟡 Next Greater Element I (LC #496) */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nge = new Map<number, number>();
  const stack: number[] = [];
  for (const n of nums2) {
    while (stack.length && n > stack[stack.length - 1]) nge.set(stack.pop()!, n);
    stack.push(n);
  }
  for (const n of stack) nge.set(n, -1);
  return nums1.map(n => nge.get(n)!);
}
