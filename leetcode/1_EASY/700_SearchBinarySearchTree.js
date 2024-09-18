/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}

 * Time Complexity: O(h), where h is the height of the tree.
 * In the worst case, we might traverse all the way to a leaf node.
 * In a balanced tree, the height h would be Log(n), where n is the number of nodes.
 * In an unbalanced tree (like a linked list), the height h could be n.
 *
 * Space Complexity: O(h), due to the recursive stack.
 * The recursion will use up to h space on the call stack in the worst case.
 */
export const searchBST = (root, val) => {
  // Base case: If the current node is null, return null (the value was not found)
  if (!root) return null;

  // If the current node's value matches the target value, return the current node
  if (root.val === val) {
    return root;
  }

  // If the target value is less than the current node's value, search the left subtree
  if (val < root.val) {
    return searchBST(root.left, val);
  }

  // If the target value is greater than the current node's value, search the right subtree
  return searchBST(root.right, val);
};
