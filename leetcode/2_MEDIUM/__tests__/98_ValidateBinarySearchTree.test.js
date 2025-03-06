import { TreeNode, isValidBST } from '../98_ValidateBinarySearchTree.js';

describe('Leetcode #98: Validate Binary Search Tree', () => {
  describe('Basic BST validation cases', () => {
    it('should return true for a valid BST', () => {
      const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
      const result = isValidBST(root);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false for an invalid BST where a left child is greater than the root', () => {
      const root = new TreeNode(5, new TreeNode(6), new TreeNode(7));
      const result = isValidBST(root);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return false for an invalid BST where a right child is smaller than the root', () => {
      const root = new TreeNode(
        5,
        new TreeNode(1),
        new TreeNode(4, new TreeNode(3), new TreeNode(6))
      );
      const result = isValidBST(root);
      const expected = false;
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('should return true for a single node tree', () => {
      const root = new TreeNode(1);
      const result = isValidBST(root);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for an empty tree (null root)', () => {
      const result = isValidBST(null);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for a valid BST with multiple levels', () => {
      const root = new TreeNode(
        10,
        new TreeNode(5, new TreeNode(2), new TreeNode(7)),
        new TreeNode(15, new TreeNode(12), new TreeNode(20))
      );
      const result = isValidBST(root);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false when a left subtree contains a value greater than the root', () => {
      const root = new TreeNode(
        10,
        new TreeNode(5, new TreeNode(2), new TreeNode(12)), // 12 is invalid here
        new TreeNode(15, new TreeNode(11), new TreeNode(20))
      );
      const result = isValidBST(root);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return false when a right subtree contains a value less than the root', () => {
      const root = new TreeNode(
        10,
        new TreeNode(5, new TreeNode(2), new TreeNode(8)),
        new TreeNode(15, new TreeNode(6), new TreeNode(20)) // 6 is invalid here
      );
      const result = isValidBST(root);
      const expected = false;
      expect(result).toBe(expected);
    });
  });

  describe('Large input case', () => {
    it('should correctly validate a deep BST', () => {
      const root = new TreeNode(
        50,
        new TreeNode(
          30,
          new TreeNode(20, new TreeNode(10), new TreeNode(25)),
          new TreeNode(40, new TreeNode(35), new TreeNode(45))
        ),
        new TreeNode(
          70,
          new TreeNode(60, new TreeNode(55), new TreeNode(65)),
          new TreeNode(80, new TreeNode(75), new TreeNode(85))
        )
      );
      const result = isValidBST(root);
      const expected = true;
      expect(result).toBe(expected);
    });
  });
});
