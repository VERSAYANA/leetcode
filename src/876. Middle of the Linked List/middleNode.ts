// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
function middleNode(head: ListNode | null): ListNode | null {
  const nodes = [];
  while (head !== null) {
    nodes.push(head);
    head = head?.next || null;
  }
  const middle = Math.floor(nodes.length / 2);

  return nodes[middle];
}

// Time complexity: O(n)
// Space complexity: O(1)
function middleNode2(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }

  return slow;
}
