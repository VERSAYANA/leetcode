import { addTwoNumbers, ListNode } from "./addTwoNumbers";

const linkedListToArray = (
  linkedList: ListNode | null | undefined
): number[] => {
  const arr: any[] = [];
  while (true) {
    arr.push(linkedList?.val);
    if (linkedList?.next === null) {
      break;
    }
    linkedList = linkedList?.next;
  }
  return arr;
};

const arrayToLinkedList = (arr: number[]): ListNode | null => {
  let result = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = new ListNode(arr[i], result);
  }
  return result;
};

type TestValuesType = {
  l1: number[];
  l2: number[];
  output: number[];
};

const testValues: TestValuesType[] = [
  {
    l1: [2, 4, 3],
    l2: [5, 6, 4],
    output: [7, 0, 8],
  },
  {
    l1: [0],
    l2: [0],
    output: [0],
  },
  {
    l1: [9, 9, 9, 9, 9, 9, 9],
    l2: [9, 9, 9, 9],
    output: [8, 9, 9, 9, 0, 0, 0, 1],
  },
];

for (let i = 0; i < testValues.length; i++) {
  describe(`Test ${i + 1}`, () => {
    test(`Input: l1: ${testValues[i].l1}, l2: ${testValues[i].l2}
    Expected output: ${testValues[i].output}`, () => {
      expect(
        linkedListToArray(
          addTwoNumbers(
            arrayToLinkedList(testValues[i].l1),
            arrayToLinkedList(testValues[i].l2)
          )
        )
      ).toEqual(testValues[i].output);
    });
  });
}
