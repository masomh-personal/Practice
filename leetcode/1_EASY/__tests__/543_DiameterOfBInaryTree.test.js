import { diameterOfBinaryTree, TreeNode } from '../543_DiameterOfBInaryTree.js';

// Helper function to construct a binary tree from an array
function buildTree(values) {
  if (!values.length) return null;
  const nodes = values.map((val) => (val === null ? null : new TreeNode(val)));
  for (let i = 0; i < values.length; i++) {
    if (nodes[i] !== null) {
      nodes[i].left = nodes[2 * i + 1] || null;
      nodes[i].right = nodes[2 * i + 2] || null;
    }
  }
  return nodes[0];
}

describe('Diameter of Binary Tree - Naive Implementation', () => {
  it('should return 3 for tree [1,2,3,4,5]', () => {
    const root = buildTree([1, 2, 3, 4, 5]);
    const result = diameterOfBinaryTree(root);
    const expected = 3;
    expect(result).toBe(expected);
  });

  it('should return 1 for tree [1,2]', () => {
    const root = buildTree([1, 2]);
    const result = diameterOfBinaryTree(root);
    const expected = 1;
    expect(result).toBe(expected);
  });

  it('should return 0 for tree [1]', () => {
    const root = buildTree([1]);
    const result = diameterOfBinaryTree(root);
    const expected = 0;
    expect(result).toBe(expected);
  });

  it('should return 4 for tree [1,2,3,4,5,6,7]', () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    const result = diameterOfBinaryTree(root);
    const expected = 4;
    expect(result).toBe(expected);
  });

  it('should return 0 for an empty tree', () => {
    const root = buildTree([]);
    const result = diameterOfBinaryTree(root);
    const expected = 0;
    expect(result).toBe(expected);
  });
});
