// Time complexity: O(n)
// Space complexity: O(n)
function twoSum(numbers: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const dif = target - numbers[i];
    const difIndex = map.get(dif);
    if (difIndex !== undefined) {
      return [difIndex + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }

  return [0, 0];
}
