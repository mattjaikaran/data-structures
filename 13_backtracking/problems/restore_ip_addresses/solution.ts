export function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  const bt = (start: number, parts: string[]) => {
    if (parts.length === 4) { if (start === s.length) result.push(parts.join('.')); return; }
    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) break;
      const seg = s.slice(start, start+len);
      if (seg.length > 1 && seg[0] === '0') break;
      if (parseInt(seg) > 255) break;
      parts.push(seg); bt(start+len, parts); parts.pop();
    }
  };
  bt(0, []); return result;
}
