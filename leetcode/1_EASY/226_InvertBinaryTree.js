// Leetcode TreeNode Implementation
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Approach: DFS (post-order) traversal - Recursive
 * Time: O(n) - Visit all nodes in the tree
 * Space: O(h) - h is the height of the tree (due to recursive call stack)
 *
 * Inverts a binary tree by swapping left and right children for each node.
 * Post-order traversal ensures children are inverted before their parent.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {TreeNode} - The root of the inverted binary tree.
 */
export function invertTree(root) {
  // Edge case: Empty tree
  if (!root) return root;

  /**
   * Helper function to perform a post-order traversal and invert the tree.
   * @param {TreeNode} node - The current node being processed.
   */
  const dfsPostOrder = (node) => {
    if (!node) return; // Base case: If the node is null, stop recursion

    // Recursively process left and right children
    dfsPostOrder(node.left);
    dfsPostOrder(node.right);

    // Swap the left and right children of the current node after inverting subtrees
    [node.left, node.right] = [node.right, node.left];
  };

  // Start the recursive traversal from the root
  dfsPostOrder(root);

  return root; // Return the inverted tree
}

/**
 * Approach: Iterative Approach (BFS)
 * NOTE: Functionally equivalent to recursion but avoids stack overflow issues in deep trees.
 * Time: O(n) - Visit all nodes in the tree.
 * Space: O(h) - h is the maximum number of nodes at any level (queue size).
 *
 * Inverts a binary tree by swapping left and right children for each node.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {TreeNode} - The root of the inverted binary tree.
 */
export function invertTreeIterative(root) {
  // Edge case: Empty tree
  if (!root) return root;

  // Initialize a queue to process nodes in a breadth-first (level-by-level) manner
  const q = [root];

  while (q.length) {
    // Dequeue the next node for processing
    const currNode = q.shift();

    // Swap the left and right children of the current node
    [currNode.left, currNode.right] = [currNode.right, currNode.left];

    // Add children to the queue for further processing (if they exist)
    if (currNode.left) q.push(currNode.left);
    if (currNode.right) q.push(currNode.right);
  }

  return root; // Return the inverted tree
}
