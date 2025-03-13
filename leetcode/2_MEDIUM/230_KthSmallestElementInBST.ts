export class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

/**
 * Finds the k-th smallest element in a BST using recursive in-order traversal with early stopping.
 *
 * Time Complexity: O(k) - Traverses only up to k elements.
 * Space Complexity: O(H) - Call stack depth is proportional to the height of the BST.
 *
 * @param {TreeNode | null} root - The root of the BST.
 * @param {number} k - The k-th position (1-based index) of the smallest element to find.
 * @returns {number} The k-th smallest value in the BST.
 */
export function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let result = -Infinity;

  // Recursive IN-ORDER traversal
  function dfsIO(node: TreeNode | null) {
    if (!node || count >= k) return;

    dfsIO(node.left);

    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    dfsIO(node.right);
  }

  dfsIO(root);
  return result;
}
