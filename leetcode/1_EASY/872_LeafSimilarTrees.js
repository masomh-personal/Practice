/**
 * Time: O(N), where N is the number of nodes in each tree
 * Space: O(L1 + L2), where L1 and L2 are the number of leaf nodes in tree1 and tree2 respectively
 *
 * NOTES: Review of DFS Traversal orders
 * Pre-Order (Root → Left → Right)
 * In-Order (Left → Root → Right)
 * Post-Order (Left → Right → Root)
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
export const leafSimilar = (root1, root2) => {
  const tree1Leaves = [];
  const tree2Leaves = [];

  // Post-Order (Left → Right → Root)
  const dfsPostOrder = (node, treeLeafArr) => {
    if (!node) return null;

    // Check if the node is a leaf
    if (!node.left && !node.right) {
      treeLeafArr.push(node.val);
    }

    dfsPostOrder(node.left, treeLeafArr); // Left subtree
    dfsPostOrder(node.right, treeLeafArr); // Right subtree
  };

  // Traverse both trees to collect leaf values
  dfsPostOrder(root1, tree1Leaves);
  dfsPostOrder(root2, tree2Leaves);

  // Guard clause to quickly return if leaf lengths don't match
  if (tree1Leaves.length !== tree2Leaves.length) return false;

  // Compare leaf sequences
  for (let i = 0; i < tree1Leaves.length; i++) {
    if (tree1Leaves[i] !== tree2Leaves[i]) {
      return false;
    }
  }

  return true;
};
