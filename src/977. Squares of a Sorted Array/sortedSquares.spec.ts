import { sortedSquares1, sortedSquares2 } from "./sortedSquares";

type TestValuesType = {
  nums: number[];
  output: number[];
};

const testValues: TestValuesType[] = [
  {
    nums: [-4, -1, 0, 3, 10],
    output: [0, 1, 9, 16, 100],
  },
  {
    nums: [-7, -3, 2, 3, 11],
    output: [4, 9, 9, 49, 121],
  },
];

for (let i = 0; i < testValues.length; i++) {
  describe(`Test ${i + 1} for Solution 1`, () => {
    test(`Input: nums: [${testValues[i].nums}]
    Expected output: [${testValues[i].output}]`, () => {
      expect(sortedSquares1(testValues[i].nums)).toEqual(testValues[i].output);
    });
  });

  describe(`Test ${i + 1}  for Solution 2`, () => {
    test(`Input: nums: [${testValues[i].nums}]
    Expected output: [${testValues[i].output}]`, () => {
      expect(sortedSquares2(testValues[i].nums)).toEqual(testValues[i].output);
    });
  });
}
