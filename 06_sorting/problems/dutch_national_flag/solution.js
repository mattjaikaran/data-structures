/** 🟡 Dutch National Flag (LC #75)
 * @param {number[]} nums
 * @returns {number[]}
 */
export const dutchNationalFlag = (nums) => {
  const a = [...nums];
  let lo = 0,
    mid = 0,
    hi = a.length - 1;
  while (mid <= hi) {
    if (a[mid] === 0) {
      [a[lo], a[mid]] = [a[mid], a[lo]];
      lo++;
      mid++;
    } else if (a[mid] === 1) mid++;
    else {
      [a[mid], a[hi]] = [a[hi], a[mid]];
      hi--;
    }
  }
  return a;
};
