/**
 * Binary Search — O(log n) time, O(1) space.
 * Returns index or -1.
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
export function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
