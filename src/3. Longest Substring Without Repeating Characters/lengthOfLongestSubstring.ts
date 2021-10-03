// Time complexity: O(n)
// Space complexity: O(n)
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

// Time complexity: O(n)
// Space complexity: O(n)
export function lengthOfLongestSubstring2(s: string): number {
  let left = 0;
  let right = 0;
  let max = 0;
  const stringSet: Set<string> = new Set();

  while (right < s.length) {
    if (!stringSet.has(s[right])) {
      stringSet.add(s[right]);
      right += 1;
      max = Math.max(max, stringSet.size);
    } else {
      stringSet.delete(s[left]);
      left += 1;
    }
  }

  return max;
}
