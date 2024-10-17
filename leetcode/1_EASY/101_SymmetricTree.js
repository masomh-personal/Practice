/**
 * RECURSIVE (DFS) Approach
 * Time: O(n) - We visit each node once, so the time complexity is linear relative to the number of nodes (n).
 * Space: O(n) - In the worst case (e.g., a completely unbalanced tree), the call stack can go as deep as n.
 *               For a balanced tree, it would be O(log n) due to the depth being smaller.
 *
 * @param {TreeNode} root - The root of the binary tree
 * @return {boolean} - Returns true if the tree is symmetric, false otherwise
 */
export const isSymmetricDFS = (root) => {
  // Initial guard: if only one child exists, the tree is not symmetric
  if (!root.left || !root.right) return !root.left && !root.right;

  // Helper function to check if two nodes are symmetric
  const dfs = (node1, node2) => {
    // Guard #1: If both nodes are null, they are symmetric (base case)
    if (!node1 && !node2) return true;

    // Guard #2: If one node is null and the other is not, it's asymmetric (base case)
    if (!node1 || !node2) return false;

    // Guard #3: If both nodes exist but have different values, it's asymmetric
    if (node1.val !== node2.val) return false;

    // Recursively check if the left child of node1 matches the right child of node2
    // AND if the right child of node1 matches the left child of node2
    return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
  };

  // Start the recursion with the left and right children of the root
  return dfs(root.left, root.right);
};

/**
 * ITERATIVE (BFS) Approach
 * Time: O(n) - We visit each node once, so the time complexity is linear relative to the number of nodes (n).
 * Space: O(n) - Iterative approach using a queue
 *
 * @param {TreeNode} root - The root of the binary tree
 * @return {boolean} - Returns true if the tree is symmetric, false otherwise
 */
export const isSymmetricBFS = (root) => {
  // Initial guard: if only one child exists, the tree is not symmetric
  if (!root.left || !root.right) return !root.left && !root.right;

  const queue = [[root.left, root.right]];

  while (queue.length) {
    const [node1, node2] = queue.shift();

    // Guard #1: If both nodes are null, they are symmetric (base case)
    if (!node1 && !node2) continue;

    // Guard #2: If one node is null and the other is not, it's asymmetric (base case)
    if (!node1 || !node2) return false;

    // Guard #3: If both nodes exist but have different values, it's asymmetric
    if (node1.val !== node2.val) return false;

    // Enqueue the children of node1 and node2 in mirrored order:
    // - node1.left and node2.right should be symmetric and are enqueued as a pair.
    // - node1.right and node2.left should also be symmetric and are enqueued as a pair.
    // This ensures that as we process the queue, we are always comparing nodes that
    // should mirror each other across the center of the tree.
    queue.push([node1.left, node2.right], [node1.right, node2.left]);
  }

  // If all the tests pass, the tree is symmetric
  return true;
};
