/** @param {number} num */
export function intToRoman(num) {
  const vals = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let res = "";
  for (const [v, s] of vals) { while (num >= v) { res += s; num -= v; } }
  return res;
}
