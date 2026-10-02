export function validPalindromeII(text: string): boolean {
  const palindrome = (lo: number, hi: number): boolean => {
    while (lo < hi) if (text[lo++] !== text[hi--]) return false;
    return true;
  };
  let lo = 0, hi = text.length - 1;
  while (lo < hi) {
    if (text[lo] !== text[hi]) return palindrome(lo + 1, hi) || palindrome(lo, hi - 1);
    lo++; hi--;
  }
  return true;
}
