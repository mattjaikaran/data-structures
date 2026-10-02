/** 🟡 Remove K Digits (LC #402)
 * @param {string} num
 * @param {number} k
 * @returns {string}
 */
export function removeKDigits(num, k) {
  const stack = [];
  for (const d of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > d) {
      stack.pop();
      k--;
    }
    stack.push(d);
  }
  const result = (k > 0 ? stack.slice(0, -k) : stack).join("").replace(/^0+/, "");
  return result || "0";
}
