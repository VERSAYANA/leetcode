import { search } from "./search";

type TestValuesType = {
  nums: number[];
  target: number;
  output: number;
};

const testValues: TestValuesType[] = [
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 9,
    output: 4,
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 2,
    output: -1,
  },
  {
    nums: [5],
    target: 5,
    output: 0,
  },
];

for (let i = 0; i < testValues.length; i++) {
  describe(`Test ${i + 1}`, () => {
    test(`Input: nums: [${testValues[i].nums}], target: ${testValues[i].target}
    Expected output: ${testValues[i].output}`, () => {
      expect(search(testValues[i].nums, testValues[i].target)).toBe(
        testValues[i].output
      );
    });
  });
}
