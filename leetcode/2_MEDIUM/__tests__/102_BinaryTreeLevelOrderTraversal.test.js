import { levelOrder, levelOrderRecursive } from '../102_BinaryTreeLevelOrderTraversal.js';

// Define the TreeNode class for constructing the binary tree
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Vitest tests
describe('Binary Tree Level Order Traversal', () => {
  it('should return [[3], [9, 20], [15, 7]] for the tree [3, 9, 20, null, null, 15, 7]', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    expect(levelOrderRecursive(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  it('should return [[1]] for the tree [1]', () => {
    const root = new TreeNode(1);
    expect(levelOrder(root)).toEqual([[1]]);
    expect(levelOrderRecursive(root)).toEqual([[1]]);
  });

  it('should return [] for an empty tree', () => {
    expect(levelOrder(null)).toEqual([]);
    expect(levelOrderRecursive(null)).toEqual([]);
  });

  // Additional test cases

  it('should handle a tree with only left children', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);

    expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
    expect(levelOrderRecursive(root)).toEqual([[1], [2], [3], [4]]);
  });

  it('should handle a tree with only right children', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);

    expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
    expect(levelOrderRecursive(root)).toEqual([[1], [2], [3], [4]]);
  });

  it('should handle a complete binary tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
    expect(levelOrderRecursive(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  it('should handle a tree with missing nodes at various levels', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(5);

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5]]);
    expect(levelOrderRecursive(root)).toEqual([[1], [2, 3], [4, 5]]);
  });

  it('should handle a tree with all negative values', () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);
    root.left.left = new TreeNode(-4);
    root.right.right = new TreeNode(-5);

    expect(levelOrder(root)).toEqual([[-1], [-2, -3], [-4, -5]]);
    expect(levelOrderRecursive(root)).toEqual([[-1], [-2, -3], [-4, -5]]);
  });

  it('should handle a tree with duplicated values', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right.right = new TreeNode(3);

    expect(levelOrder(root)).toEqual([[1], [2, 2], [3, 3]]);
    expect(levelOrderRecursive(root)).toEqual([[1], [2, 2], [3, 3]]);
  });

  it('should handle a tree with a large depth', () => {
    const root = new TreeNode(1);
    let current = root;
    for (let i = 2; i <= 10; i++) {
      current.left = new TreeNode(i);
      current = current.left;
    }

    const expectedOutput = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];
    expect(levelOrder(root)).toEqual(expectedOutput);
    expect(levelOrderRecursive(root)).toEqual(expectedOutput);
  });
});
