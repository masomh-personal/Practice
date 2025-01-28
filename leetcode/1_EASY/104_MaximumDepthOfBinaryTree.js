class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Calculates the maximum depth of a binary tree using recursion.
 *
 * Time Complexity: O(n)
 *   - Each node is visited exactly once, so the time complexity is proportional to the number of nodes, n.
 *
 * Space Complexity: O(h)
 *   - The recursion stack requires space proportional to the height of the tree, h. In the worst case (completely unbalanced tree), h = n.
 *   - In the best case (completely balanced tree), h = log(n).
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The maximum depth of the tree.
 */
export function maxDepth(root) {
  // Base case: if the tree is empty, return 0
  if (!root) return 0;

  // Recursively find the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the greater depth + 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * Calculates the maximum depth of a binary tree using an iterative approach (DFS with a stack).
 *
 * Time Complexity: O(n)
 *   - Each node is visited exactly once, so the time complexity is proportional to the number of nodes, n.
 *
 * Space Complexity: O(h)
 *   - The stack size depends on the height of the tree, h. In the worst case (completely unbalanced tree), h = n.
 *   - In the best case (completely balanced tree), h = log(n).
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The maximum depth of the tree.
 */
export function maxDepthIterative(root) {
  // Base case: if the tree is empty, the depth is 0
  if (!root) return 0;

  let maxDepth = 0; // Track the maximum depth
  const stack = [{ node: root, depth: 1 }]; // Stack to simulate DFS, starting with the root

  while (stack.length) {
    // Pop the top node and its depth from the stack
    const { node: currNode, depth: currDepth } = stack.pop();

    if (currNode) {
      // Update the maximum depth seen so far
      maxDepth = Math.max(maxDepth, currDepth);

      // Push the left child onto the stack with incremented depth
      if (currNode.left) {
        stack.push({ node: currNode.left, depth: currDepth + 1 });
      }

      // Push the right child onto the stack with incremented depth
      if (currNode.right) {
        stack.push({ node: currNode.right, depth: currDepth + 1 });
      }
    }
  }

  return maxDepth;
}
