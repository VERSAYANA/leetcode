export function checkInclusion(s1: string, s2: string): boolean {
  const s1Map = stringToCharFrequencyMap(s1);
  const firstWindowMap = stringToCharFrequencyMap(s2.slice(0, s1.length));
  let windowMap = new Map(firstWindowMap);

  if (areMapsEqual(s1Map, firstWindowMap)) {
    return true;
  }

  for (let left = 1, right = s1.length; right < s2.length; left++, right++) {
    windowMap = newWindowMap(windowMap, s2[left - 1], s2[right]);
    if (areMapsEqual(s1Map, windowMap)) {
      return true;
    }
  }
  return false;
}

export const areMapsEqual = (
  map1: Map<string, number>,
  map2: Map<string, number>
): boolean => {
  for (const [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
};

export const stringToCharFrequencyMap = (str: string): Map<string, number> => {
  const map: Map<string, number> = new Map();
  for (let c of str) {
    const charFrequency = map.get(c) || 0;
    map.set(c, charFrequency + 1);
  }

  return map;
};

export const newWindowMap = (
  oldWindowMap: Map<string, number>,
  oldChar: string,
  newChar: string
): Map<string, number> => {
  const windowMap = new Map(oldWindowMap);
  const oldCharFrequency = windowMap.get(oldChar);

  if (oldCharFrequency && oldCharFrequency > 1) {
    windowMap.set(oldChar, oldCharFrequency - 1);
  } else {
    windowMap.delete(oldChar);
  }

  const newCharFrequency = windowMap.get(newChar);
  if (newCharFrequency === undefined) {
    windowMap.set(newChar, 1);
  } else {
    windowMap.set(newChar, newCharFrequency + 1);
  }

  return windowMap;
};
