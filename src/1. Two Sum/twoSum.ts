// Time complexity: O(n^2)
// Space complexity: O(1)
export function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
  return [];
}

// Time complexity: O(n)
// Space complexity: O(n)
export function twoSum2(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const dif = target - nums[i];
    const difIndex = map.get(dif);
    if (difIndex !== undefined) {
      return [difIndex, i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
