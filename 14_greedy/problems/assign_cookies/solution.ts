export function assignCookies(greed: number[], sizes: number[]): number {
  greed.sort((a,b)=>a-b); sizes.sort((a,b)=>a-b);
  let child = 0, cookie = 0;
  while (child < greed.length && cookie < sizes.length) {
    if (sizes[cookie] >= greed[child]) child++;
    cookie++;
  }
  return child;
}
