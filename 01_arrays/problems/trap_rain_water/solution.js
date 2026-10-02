/** @param {number[]} height */
export function trapRainWater(height) {
  let l = 0, r = height.length - 1, lMax = 0, rMax = 0, water = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      height[l] >= lMax ? (lMax = height[l]) : (water += lMax - height[l]);
      l++;
    } else {
      height[r] >= rMax ? (rMax = height[r]) : (water += rMax - height[r]);
      r--;
    }
  }
  return water;
}
