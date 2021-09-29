/**
 Do not return anything, modify nums in-place instead.
 */

// Time complexity: O(n)
// Space complexity: O(n)
function rotate(nums: number[], k: number): void {
  if (k > 0 && nums.length > 1) {
    const oldNums = [...nums];
    for (let i = 0; i < nums.length; i++) {
      const newIndex = findNewIndex(i, k, nums.length);
      nums[newIndex] = oldNums[i];
    }
  }
}

const findNewIndex = (currentIndex: number, k: number, length: number) => {
  k = k % length;
  if (currentIndex + k <= length - 1) {
    return currentIndex + k;
  } else {
    return currentIndex + k - length;
  }
};
