import { searchInsert } from "./searchInsert";

type TestValuesType = {
  nums: number[];
  target: number;
  output: number;
};

const testValues: TestValuesType[] = [
  {
    nums: [1, 3, 5, 6],
    target: 5,
    output: 2,
  },
  {
    nums: [1, 3, 5, 6],
    target: 2,
    output: 1,
  },
  {
    nums: [1, 3, 5, 6],
    target: 0,
    output: 0,
  },
];

for (let i = 0; i < testValues.length; i++) {
  describe(`Test ${i + 1}`, () => {
    test(`Input: nums: [${testValues[i].nums}], target: ${testValues[i].target}
    Expected output: ${testValues[i].output}`, () => {
      expect(searchInsert(testValues[i].nums, testValues[i].target)).toBe(
        testValues[i].output
      );
    });
  });
}
