import { ListNode } from "../utils/ListNode";

// Time complexity : O(max(m, n))
// Space complexity : O(max(m, n))
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry = 0
): ListNode | null {
  let result = null;

  if (l1 !== null || l2 !== null) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }

    result = new ListNode(
      sum,
      addTwoNumbers(l1?.next || null, l2?.next || null, carry)
    );
  } else if (carry) {
    result = new ListNode(carry, null);
  }

  return result;
}
