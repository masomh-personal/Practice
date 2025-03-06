export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Approach: DFS with Min/Max Constraints
 * Time Complexity: O(n) - we visit each node once
 * Space Complexity: O(n) - due to recursive call stack
 * @param {TreeNode} root
 * @return {boolean}
 */
export function isValidBST(root) {
  // To correctly validate the BST, we should use a Depth-First Search (DFS) approach while
  // tracking the valid min/max range for each node.
  function dfs(node, min = -Infinity, max = Infinity) {
    if (!node) return true; // base case

    if (node.val <= min || node.val >= max) return false; // invalid BST condition

    // Recursively check left and right subtrees with updated min/max constraints
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }

  return dfs(root);
}
