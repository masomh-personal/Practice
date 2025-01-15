import { BST } from '../BST.js';

describe('Binary Search Tree (BST)', () => {
  let tree;

  beforeEach(() => {
    tree = new BST();
  });

  describe('Insertion', () => {
    it('should insert and retrieve values correctly', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(5); // duplicate

      const result = [];
      tree.inOrderTraversal((value) => result.push(value));

      expect(result).toEqual([5, 5, 10, 15]); // Sorted with duplicates allowed
    });
  });

  describe('Search', () => {
    it('should check if tree contains specific values', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);

      expect(tree.contains(10)).toBe(true);
      expect(tree.contains(5)).toBe(true);
      expect(tree.contains(15)).toBe(true);
      expect(tree.contains(20)).toBe(false);
    });
  });

  describe('Minimum and Maximum', () => {
    it('should find the minimum and maximum values', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      tree.insert(20);

      expect(tree.findMin()).toBe(2);
      expect(tree.findMax()).toBe(20);
    });

    it('should handle empty tree for findMin and findMax', () => {
      expect(tree.findMin()).toBe(null);
      expect(tree.findMax()).toBe(null);
    });
  });

  describe('Traversal', () => {
    it('should perform in-order traversal', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      tree.insert(7);

      const result = [];
      tree.inOrderTraversal((value) => result.push(value));

      expect(result).toEqual([2, 5, 7, 10, 15]);
    });

    it('should perform pre-order traversal', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      tree.insert(7);

      const result = [];
      tree.preOrderTraversal((value) => result.push(value));

      expect(result).toEqual([10, 5, 2, 7, 15]);
    });

    it('should perform post-order traversal', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      tree.insert(7);

      const result = [];
      tree.postOrderTraversal((value) => result.push(value));

      expect(result).toEqual([2, 7, 5, 15, 10]);
    });

    it('should handle empty tree for traversal', () => {
      const result = [];
      tree.inOrderTraversal((value) => result.push(value));

      expect(result).toEqual([]);
    });
  });

  describe.skip('Performance', () => {
    it('should measure performance for large trees', () => {
      console.log('Performance testing...');
      const largeTree = new BST();
      const size = 100_000;

      console.time('Insertion Time');
      for (let i = 0; i < size; i++) {
        largeTree.insert(i);
      }
      console.timeEnd('Insertion Time');

      console.time('In-Order Traversal Time');
      const result = [];
      largeTree.inOrderTraversalIterative((value) => result.push(value));
      console.timeEnd('In-Order Traversal Time');

      expect(result.length).toBe(size);
      expect(result[0]).toBe(0);
      expect(result[size - 1]).toBe(size - 1);
    });
  });
});
