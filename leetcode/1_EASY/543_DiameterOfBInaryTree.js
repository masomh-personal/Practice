export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * APPROACH: DFS (Post-Order Traversal)
 *
 * Fun Fact: Post-order traversal is perfect for this task because we need
 * to calculate subtree heights *after* visiting both left and right children!
 *
 * Key Terms:
 * - Height: The number of edges on the longest path from a node to a leaf.
 * - Diameter: The longest path between any two nodes in the tree (in edges).
 *
 * STRATEGY:
 * - At every node, calculate:
 *   1. The height of its left subtree.
 *   2. The height of its right subtree.
 *   3. The diameter passing through that node: leftHeight + rightHeight.
 * - Update the maximum diameter found so far.
 * - Return the height of the current node to its parent, so it can calculate
 *   its own diameter.
 *
 * TIME: O(n) - Each node is visited once.
 * SPACE: O(n) - Maximum depth of the call stack for recursion.
 *
 * @param {TreeNode} root
 * @return {number}
 */
export const diameterOfBinaryTree = (root) => {
  let maxDiameter = 0;

  const getHeightDFSInOrder = (node) => {
    if (!node) return 0; // Base case: A null node has no height—it's basically invisible.

    // Dive into the left and right subtrees
    const leftHeight = getHeightDFSInOrder(node.left);
    const rightHeight = getHeightDFSInOrder(node.right);

    // Calculate the diameter passing through this node.
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // Return the height of this node's subtree to its parent.
    return 1 + Math.max(leftHeight, rightHeight);
  };

  getHeightDFSInOrder(root); // start recursive call
  return maxDiameter;
};

/**
 * NOTES for DFS:
 *
 * POST Order: process children first (left (subtree) => right (subtree) => current)
 * - This is good for When processing depends on results from children (calculating the height
 * - of a tree, deleting nodes bottom-up).
 *
 * PRE Order: visit current node first (current => left (subtree) => right (subtree))
 * - This is good for when you need to process current node first then children (copying tree or
 * - evaluating condition at each node (Great for this problem))
 *
 * IN Order: visit left node first (left (subtree) => current/root => right (subtree))
 * - Produces a sorted order for binary search trees (BSTs).
 * - Useful when the order of nodes matters.
 */
