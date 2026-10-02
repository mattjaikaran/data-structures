/** 🟡 Decode String (LC #394) */
export function decodeString(s: string): string {
  const countStack: number[] = [], strStack: string[] = [];
  let cur = '', k = 0;
  for (const ch of s) {
    if (!isNaN(parseInt(ch))) { k = k * 10 + parseInt(ch); }
    else if (ch === '[') { countStack.push(k); strStack.push(cur); cur = ''; k = 0; }
    else if (ch === ']') { cur = strStack.pop()! + cur.repeat(countStack.pop()!); }
    else { cur += ch; }
  }
  return cur;
}
