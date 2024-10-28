import { leafSimilar } from '../872_LeafSimilarTrees.js';

// From Leetcode: definition of a Tree Node
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to create a binary tree from an array
const createTree = (arr) => {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
};

describe('Leaf-Similar Trees', () => {
  it('should return true for trees with the same leaf sequence', () => {
    const root1 = createTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
    const root2 = createTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);
    expect(leafSimilar(root1, root2)).toBe(true);
  });

  it('should return false for trees with different leaf sequences', () => {
    const root1 = createTree([1, 2, 3]);
    const root2 = createTree([1, 3, 2]);
    expect(leafSimilar(root1, root2)).toBe(false);
  });

  it('should handle single-node trees and return true if values match', () => {
    const root1 = createTree([7]);
    const root2 = createTree([7]);
    expect(leafSimilar(root1, root2)).toBe(true);
  });

  it('should handle single-node trees and return false if values do not match', () => {
    const root1 = createTree([7]);
    const root2 = createTree([8]);
    expect(leafSimilar(root1, root2)).toBe(false);
  });

  it('should return true for large balanced trees with identical leaf sequences', () => {
    const root1 = createTree([4, 2, 6, 1, 3, 5, 7]);
    const root2 = createTree([4, 2, 6, 1, 3, 5, 7]);
    expect(leafSimilar(root1, root2)).toBe(true);
  });

  it('should handle cases where one tree has more nodes but same leaf sequence', () => {
    const root1 = createTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
    const root2 = createTree([3, 5, 1, 6, 2, 7, 4]);
    expect(leafSimilar(root1, root2)).toBe(false);
  });
});
