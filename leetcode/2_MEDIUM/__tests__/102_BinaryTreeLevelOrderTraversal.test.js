import { levelOrder, TreeNode } from '../102_BinaryTreeLevelOrderTraversal';

describe('Leetcode #102: Binary Tree Level Order Traversal', () => {
  describe('Basic functionality', () => {
    it('should return an empty array for an empty tree', () => {
      const result = levelOrder(null);
      const expected = [];
      expect(result).toEqual(expected);
    });

    it('should return correct level order traversal for a single node', () => {
      const root = new TreeNode(1);
      const result = levelOrder(root);
      const expected = [[1]];
      expect(result).toEqual(expected);
    });
  });

  describe('General cases', () => {
    it('should return correct level order traversal for a balanced binary tree', () => {
      const root = new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
      );
      const result = levelOrder(root);
      const expected = [[3], [9, 20], [15, 7]];
      expect(result).toEqual(expected);
    });

    it('should return correct level order traversal for an unbalanced left-heavy tree', () => {
      const root = new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5))))
      );
      const result = levelOrder(root);
      const expected = [[1], [2], [3], [4], [5]];
      expect(result).toEqual(expected);
    });

    it('should return correct level order traversal for an unbalanced right-heavy tree', () => {
      const root = new TreeNode(
        1,
        null,
        new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5))))
      );
      const result = levelOrder(root);
      const expected = [[1], [2], [3], [4], [5]];
      expect(result).toEqual(expected);
    });
  });

  describe('Edge cases', () => {
    it('should handle a tree with duplicate values correctly', () => {
      const root = new TreeNode(
        1,
        new TreeNode(1),
        new TreeNode(1, new TreeNode(1), new TreeNode(1))
      );
      const result = levelOrder(root);
      const expected = [[1], [1, 1], [1, 1]];
      expect(result).toEqual(expected);
    });

    it('should handle a large tree correctly', () => {
      const root = new TreeNode(
        1,
        new TreeNode(
          2,
          new TreeNode(4, new TreeNode(8), new TreeNode(9)),
          new TreeNode(5, new TreeNode(10), new TreeNode(11))
        ),
        new TreeNode(
          3,
          new TreeNode(6, new TreeNode(12), new TreeNode(13)),
          new TreeNode(7, new TreeNode(14), new TreeNode(15))
        )
      );
      const result = levelOrder(root);
      const expected = [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]];
      expect(result).toEqual(expected);
    });
  });
});
