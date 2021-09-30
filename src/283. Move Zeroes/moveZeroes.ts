/**
 Do not return anything, modify nums in-place instead.
 */

// Time complexity: O(n)
// Space complexity: O(1)
function moveZeroes1(nums: number[]): void {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount = zeroCount + 1;
    } else if (zeroCount > 0) {
      nums[i - zeroCount] = nums[i];
      nums[i] = 0;
    }
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
function moveZeroes2(nums: number[]): void {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex = lastNonZeroIndex + 1;
    }
  }

  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
function moveZeroes3(nums: number[]): void {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
      lastNonZeroIndex = lastNonZeroIndex + 1;
    }
  }
}
