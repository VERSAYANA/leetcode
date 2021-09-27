export function lengthOfLongestSubstring(s: string): number {
  if (s === "") {
    return 0;
  }
  let stringMap: Map<string, number> = new Map();
  stringMap.set(s[0], 0);
  let max = 1;
  let current = 1;
  for (let i = 1; i < s.length; i++) {
    let stringLocation = stringMap.get(s[i]);
    if (stringLocation === undefined) {
      stringMap.set(s[i], i);
      current = current + 1;
      if (current > max) {
        max = current;
      }
    } else {
      current = 1;
      stringMap = new Map();
      stringMap.set(s[stringLocation + 1], stringLocation + 1);
      if (i === s.length - 1) {
        break;
      }
      i = stringLocation + 1;
    }
  }

  return max;
}
