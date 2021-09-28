/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// Time complexity: O(log n)
// Space complexity: O(1)
const solution1 = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 1;
    let end = n;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};

// Time complexity: O(log n)
// Space complexity: O(1)
const solution2 = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 0;
    let end = n - 1;

    while (start <= end) {
      const current = Math.floor(start + (end - start) / 2);
      if (!isBadVersion(current)) {
        if (isBadVersion(current + 1)) {
          return current + 1;
        } else {
          start = current + 1;
        }
      } else {
        if (!isBadVersion(current - 1)) {
          return current;
        } else {
          end = current - 1;
        }
      }
    }
    return 0;
  };
};
