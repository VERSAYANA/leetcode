/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 0;
    let end = n - 1;

    while (start <= end) {
      const current = Math.floor((end + start) / 2);
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
