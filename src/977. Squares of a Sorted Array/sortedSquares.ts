// Time complexity: O(n)
export function sortedSquares1(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  const result: number[] = [];

  while (left <= right) {
    const leftSquared = nums[left] ** 2;
    const rightSquared = nums[right] ** 2;
    if (leftSquared > rightSquared) {
      result.push(leftSquared);
      left = left + 1;
    } else {
      result.push(rightSquared);
      right = right - 1;
    }
  }

  return result.reverse();
}

export function sortedSquares2(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }
  nums.sort((a, b) => a - b);

  return nums;
}
