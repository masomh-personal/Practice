import { TreeNode, kthSmallest } from '../230_KthSmallestElementInBST';

describe('Leetcode #230: Kth Smallest Element in a BST (Recursive)', () => {
  let root;

  // Helper function to create a BST from an array
  function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);
    if (val < root.val) root.left = insertIntoBST(root.left, val);
    else root.right = insertIntoBST(root.right, val);
    return root;
  }

  beforeEach(() => {
    root = null;
    [3, 1, 4, 2].forEach((val) => {
      root = insertIntoBST(root, val);
    });
  });

  describe('Recursive In-Order Traversal Approach', () => {
    it('should return 1 as the 1st smallest element', () => {
      const result = kthSmallest(root, 1);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should return 2 as the 2nd smallest element', () => {
      const result = kthSmallest(root, 2);
      const expected = 2;
      expect(result).toBe(expected);
    });

    it('should return 3 as the 3rd smallest element', () => {
      const result = kthSmallest(root, 3);
      const expected = 3;
      expect(result).toBe(expected);
    });

    it('should return 4 as the 4th smallest element', () => {
      const result = kthSmallest(root, 4);
      const expected = 4;
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should handle a BST with only one node', () => {
      const singleNodeRoot = new TreeNode(42);
      const result = kthSmallest(singleNodeRoot, 1);
      const expected = 42;
      expect(result).toBe(expected);
    });

    it('should handle a BST with only left children', () => {
      let leftHeavyRoot = null;
      [5, 4, 3, 2, 1].forEach((val) => {
        leftHeavyRoot = insertIntoBST(leftHeavyRoot, val);
      });

      const result = kthSmallest(leftHeavyRoot, 3);
      const expected = 3;
      expect(result).toBe(expected);
    });

    it('should handle a BST with only right children', () => {
      let rightHeavyRoot = null;
      [1, 2, 3, 4, 5].forEach((val) => {
        rightHeavyRoot = insertIntoBST(rightHeavyRoot, val);
      });

      const result = kthSmallest(rightHeavyRoot, 3);
      const expected = 3;
      expect(result).toBe(expected);
    });
  });
});
