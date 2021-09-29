export function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }
  nums.sort((a, b) => a - b);

  return nums;
}
