export function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const index = Math.floor((end + start) / 2);
    if (nums[index] === target) return index;
    else if (nums[index] < target) start = index + 1;
    else end = index;
  }

  return -1;
}
