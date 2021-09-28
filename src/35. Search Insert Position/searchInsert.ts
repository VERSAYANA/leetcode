export function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  if (target > nums[end]) {
    return nums.length;
  }
  if (target < nums[0]) {
    return 0;
  }

  while (start <= end) {
    const index = Math.floor((end + start) / 2);
    if (nums[index] === target) {
      return index;
    } else if (nums[index] < target) {
      start = index + 1;
      if (nums[index + 1] > target) {
        return index + 1;
      }
    } else {
      end = index - 1;
      if (nums[index - 1] < target) {
        return index;
      }
    }
  }

  return -1;
}
