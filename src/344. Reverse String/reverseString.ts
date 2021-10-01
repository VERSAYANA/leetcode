/**
 Do not return anything, modify s in-place instead.
 */
function reverseString1(s: string[]): void {
  s = s.reverse();
}

function reverseString2(s: string[]): void {
  const length = Math.ceil(s.length / 2);
  for (let i = 0; i < length; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
}
