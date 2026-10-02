/**
 * 🔴 Word Ladder (LC #127) — BFS shortest transformation
 * @param {string} begin
 * @param {string} end
 * @param {string[]} wordList
 * @returns {number}
 */
export function wordLadder(begin, end, wordList) {
  const words = new Set(wordList);
  if (!words.has(end)) return 0;
  const q = [[begin, 1]];
  while (q.length) {
    const [word, steps] = q.shift();
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const nw = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (nw === end) return steps + 1;
        if (words.has(nw)) {
          words.delete(nw);
          q.push([nw, steps + 1]);
        }
      }
    }
  }
  return 0;
}
