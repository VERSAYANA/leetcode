export function lengthOfLongestSubstring(s: string): number {
  if (s === "") {
    return 0;
  }

  let stringMap: Map<string, number> = new Map();
  stringMap.set(s[0], 0);
  let max = 1;
  let current = 1;
  let subString = s[0];

  for (let i = 1; i < s.length; i++) {
    const charLocation = stringMap.get(s[i]);
    const startIndexOfCurrentSubString = stringMap.get(subString[0]);
    stringMap.set(s[i], i);

    if (
      charLocation !== undefined &&
      startIndexOfCurrentSubString !== undefined &&
      startIndexOfCurrentSubString <= charLocation
    ) {
      subString = s.slice(charLocation + 1, i + 1);
      current = subString.length;
    } else {
      current = current + 1;
      if (current > max) {
        max = current;
      }
      subString = subString.concat(s[i]);
    }
  }

  return max;
}
