import { ListNode } from "./ListNode";

export const arrayToLinkedList = (arr: number[]): ListNode | null => {
  let result = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = new ListNode(arr[i], result);
  }
  return result;
};
