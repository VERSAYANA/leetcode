// Definition for Node.
class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export function connect(root: Node | null): Node | null {
  if (root) {
    root.next = null;
    connectNext(root.left || null, root.right || null);
    connectNext(root.right || null, null);
  }

  let node = root?.left;
  let nextLeftNode = node?.left;

  while (node !== null && node?.left !== null) {
    connectNext(node?.left || null, node?.right || null);
    connectNext(node?.right || null, node?.next?.left || null);

    if (node?.next) {
      node = node.next;
    } else if (nextLeftNode) {
      node = nextLeftNode;
      nextLeftNode = node.left;
    } else {
      node = null;
    }
  }

  return root;
}

const connectNext = (node: Node | null, next: Node | null) => {
  if (node !== null) {
    node.next = next;
  }
};
