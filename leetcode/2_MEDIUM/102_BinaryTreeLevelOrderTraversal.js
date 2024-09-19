/**
 * Level Order Traversal => BFS
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Time Complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
 * Space Complexity: O(n) for the space used by the queue and resultArr.
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = function (root) {
  if (!root) return []; // Edge case: empty tree

  const resultArr = [];
  const queue = [root]; // Initialize queue with the root node

  while (queue.length) {
    const n = queue.length; // Number of nodes in the current level
    const iterArr = []; // Array to store the current level's values

    // Process all nodes in the current level
    for (let i = 0; i < n; i++) {
      const iterNode = queue.shift(); // Get the next node in the queue

      iterArr.push(iterNode.val); // Add the current node's value to the level array

      // Add children of the current node to the queue for the next level
      if (iterNode.left) queue.push(iterNode.left);
      if (iterNode.right) queue.push(iterNode.right);
    }

    // Add the current level's array to the result
    resultArr.push(iterArr);
  }

  return resultArr;
};

/**
 * BFS recursive approach (same Time/Space complexity)
 * @param root
 * @returns {*[]}
 */
export const levelOrderRecursive = function (root) {
  const resultArr = [];

  const bfsRecursive = (node, level) => {
    if (!node) return; // Base case: if node is null, do nothing

    // If we're visiting this level for the first time, initialize the array
    if (resultArr.length === level) {
      resultArr.push([]);
    }

    // Add the current node's value to its corresponding level
    resultArr[level].push(node.val);

    // Recursively process the left and right children, increasing the level
    bfsRecursive(node.left, level + 1);
    bfsRecursive(node.right, level + 1);
  };

  bfsRecursive(root, 0); // Start with the root at level 0
  return resultArr;
};
