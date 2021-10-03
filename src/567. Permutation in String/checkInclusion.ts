export function checkInclusion(s1: string, s2: string): boolean {
  const s1Map: Map<string, number> = new Map();

  for (let i = 0; i < s1.length; i++) {
    let current = s1Map.get(s1[i]);
    if (current === undefined) {
      s1Map.set(s1[i], 1);
    } else {
      s1Map.set(s1[i], current + 1);
    }
  }

  const isPermutation = (strMap: Map<string, number>, str: string): boolean => {
    for (let i = 0; i < str.length; i++) {
      let current = strMap.get(str[i]);
      if (current === undefined) {
        return false;
      } else {
        if (current === 1) {
          strMap.delete(str[i]);
        } else {
          strMap.set(str[i], current - 1);
        }
      }
    }
    return true;
  };

  for (
    let left = 0, right = s1.length - 1;
    right < s2.length;
    right++, left++
  ) {
    const subString = s2.slice(left, right + 1);
    if (isPermutation(new Map(s1Map), subString)) {
      return true;
    }
  }

  return false;
}
