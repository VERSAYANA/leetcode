import { twoSum1, twoSum2 } from "./twoSum";

type TestValuesType = {
  nums: number[];
  target: number;
  output: number[];
};

const testValues: TestValuesType[] = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    output: [0, 1],
  },
  {
    nums: [3, 2, 4],
    target: 6,
    output: [1, 2],
  },
  {
    nums: [3, 3],
    target: 6,
    output: [0, 1],
  },
];

for (let i = 0; i < testValues.length; i++) {
  describe(`Test ${i + 1} for Solution 1`, () => {
    test(`Input: nums: ${testValues[i].nums}, target: ${testValues[i].target}
    Expected output: ${testValues[i].output}`, () => {
      expect(twoSum1(testValues[i].nums, testValues[i].target)).toEqual(
        testValues[i].output
      );
    });
  });

  describe(`Test ${i + 1} for Solution 2`, () => {
    test(`Input: nums: ${testValues[i].nums}, target: ${testValues[i].target}
    Expected output: ${testValues[i].output}`, () => {
      expect(twoSum2(testValues[i].nums, testValues[i].target)).toEqual(
        testValues[i].output
      );
    });
  });
}
