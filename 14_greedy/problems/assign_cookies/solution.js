/**
 * 🟢 assignCookies (LC #455)
 * @param {number[]} greed
 * @param {number[]} sizes
 * @returns {number}
 */
export function assignCookies(greed, sizes) {
  greed.sort((a,b)=>a-b); sizes.sort((a,b)=>a-b);
  let child = 0, cookie = 0;
  while (child < greed.length && cookie < sizes.length) {
    if (sizes[cookie] >= greed[child]) child++;
    cookie++;
  }
  return child;
}
