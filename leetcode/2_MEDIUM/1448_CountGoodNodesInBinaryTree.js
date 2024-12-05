export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * APPROACH: DFS [PreOrder Traversal] (recursive search/counting)
 * NOTE: A node is "good" if it is greater than or equal to the maximum value seen
 * on the path from the root to the node.
 *
 * Time: O(n) - visiting each node once
 * Space: O(h) - due to recursive call stack, where h is the height of the tree
 *
 * @param {TreeNode} root
 * @return {number}
 */
export const goodNodes = (root) => {
  // Guard: edge case for a single-node tree (constraints guarantee non-empty trees)
  // NOTE: not strictly necessary bc we handle it in the recursive call
  //if (!root.left && !root.right) return 1;

  // Recursive DFS function
  const dfsPre = (node, maxSoFar) => {
    if (!node) return 0; // Base case: stop recursion at null nodes

    // Determine if the current node is "good" and increment count
    const goodIncrement = node.val >= maxSoFar ? 1 : 0;

    // Update maxSoFar for subsequent traversals
    maxSoFar = Math.max(maxSoFar, node.val);

    // Recursively count good nodes in the left and right subtrees
    const leftCount = dfsPre(node.left, maxSoFar);
    const rightCount = dfsPre(node.right, maxSoFar);

    // Return total good nodes from current node and its subtrees
    return goodIncrement + leftCount + rightCount;
  };

  return dfsPre(root, root.val);
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
