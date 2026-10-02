export function stringCompression(chars: string[]): number {
  let write = 0, anchor = 0;
  for (let read = 0; read < chars.length; read++) {
    if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
      chars[write++] = chars[anchor];
      const count = read - anchor + 1;
      if (count > 1) for (const c of String(count)) chars[write++] = c;
      anchor = read + 1;
    }
  }
  return write;
}
