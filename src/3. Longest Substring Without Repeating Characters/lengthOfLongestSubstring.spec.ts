import { lengthOfLongestSubstring } from "./lengthOfLongestSubstring";

type TestValuesType = {
  s: string;
  output: number;
};

const testValues: TestValuesType[] = [
  {
    s: "abcabcbb",
    output: 3,
  },
  {
    s: "bbbbb",
    output: 1,
  },
  {
    s: "pwwkew",
    output: 3,
  },
];

for (let i = 0; i < testValues.length; i++) {
  describe(`Test ${i + 1}`, () => {
    test(`Input: s: ${testValues[i].s}
    Expected output: ${testValues[i].output}`, () => {
      expect(lengthOfLongestSubstring(testValues[i].s)).toBe(
        testValues[i].output
      );
    });
  });
}
