// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const n1 = reversedLinkedListToNumber(l1);
  const n2 = reversedLinkedListToNumber(l2);
  const resultNumber = n1 + n2;
  const result = numberToReversedLinkedList(resultNumber);

  return result;
}

export const numberToReversedLinkedList = (num: bigint): ListNode | null => {
  const arr = numberToArray(num).reverse();
  const linkedList = arrayToLinkedList(arr);
  return linkedList;
};

export const reversedLinkedListToNumber = (
  linkedList: ListNode | null
): bigint => {
  const arr = linkedListToArray(linkedList).reverse();
  const num = arrayToNumber(arr);
  return num;
};

export const numberToArray = (num: bigint): number[] => {
  return Array.from(String(num), Number);
};

export const arrayToNumber = (arr: number[]): bigint => {
  return BigInt(arr.join(""));
};

export const linkedListToArray = (
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

export const arrayToLinkedList = (arr: number[]): ListNode | null => {
  let result = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = new ListNode(arr[i], result);
  }
  return result;
};
