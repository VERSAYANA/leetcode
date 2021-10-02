import { ListNode } from "../utils/ListNode";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const nodes = [];
  while (head !== null) {
    nodes.push(head);
    head = head?.next || null;
  }

  const left = nodes.length - n - 1;
  const target = left + 1;
  const right = left + 2;

  if (target === 0) {
    return nodes[target].next;
  }

  if (target === nodes.length - 1) {
    nodes[left].next = null;
    return nodes[0];
  }

  nodes[left].next = nodes[right];

  return nodes[0];
}
