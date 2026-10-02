export function multiplyStrings(num1: string, num2: string): string {
  const m = num1.length, n = num2.length, pos = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (+num1[i]) * (+num2[j]);
      const [p1, p2] = [i + j, i + j + 1];
      const total = mul + pos[p2];
      pos[p2] = total % 10; pos[p1] += Math.floor(total / 10);
    }
  }
  return pos.join('').replace(/^0+/, '') || '0';
}
