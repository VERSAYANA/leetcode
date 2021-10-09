// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null && root2 === null) {
    return null;
  }

  const mergedRoot: TreeNode = new TreeNode(
    (root1?.val || 0) + (root2?.val || 0)
  );

  const recursiveMerge = (
    node1: TreeNode | null,
    node2: TreeNode | null,
    mergedNode: TreeNode | null
  ) => {
    if (mergedNode !== null) {
      const node1Left = node1?.left?.val === 0 ? 0 : node1?.left?.val || null;
      const node2Left = node2?.left?.val === 0 ? 0 : node2?.left?.val || null;

      if (node1Left === null && node2Left === null) {
        mergedNode.left = null;
      } else {
        mergedNode.left = new TreeNode(
          (node1?.left?.val || 0) + (node2?.left?.val || 0)
        );
      }

      recursiveMerge(node1?.left || null, node2?.left || null, mergedNode.left);

      const node1Right =
        node1?.right?.val === 0 ? 0 : node1?.right?.val || null;
      const node2Right =
        node2?.right?.val === 0 ? 0 : node2?.right?.val || null;

      if (node1Right === null && node2Right === null) {
        mergedNode.right = null;
      } else {
        mergedNode.right = new TreeNode(
          (node1?.right?.val || 0) + (node2?.right?.val || 0)
        );
      }

      recursiveMerge(
        node1?.right || null,
        node2?.right || null,
        mergedNode.right
      );
    }
  };

  recursiveMerge(root1, root2, mergedRoot);

  return mergedRoot;
}
