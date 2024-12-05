import { goodNodes, TreeNode } from '../1448_CountGoodNodesInBinaryTree.js';

// Helper function to build a binary tree from a level-order array
function buildTree(arr) {
  if (!arr || arr.length === 0) return null;

  const nodes = arr.map((val) => (val === null ? null : new TreeNode(val)));
  let idx = 1;

  for (let i = 0; i < nodes.length && idx < nodes.length; i++) {
    if (nodes[i] !== null) {
      nodes[i].left = nodes[idx++] || null;
      nodes[i].right = nodes[idx++] || null;
    }
  }
  return nodes[0];
}

describe('goodNodes', () => {
  it('Example 1: root = [3,1,4,3,null,1,5]', () => {
    const root = buildTree([3, 1, 4, 3, null, 1, 5]);
    const result = goodNodes(root);
    const expected = 4;
    expect(result).toBe(expected);
  });

  it('Example 2: root = [3,3,null,4,2]', () => {
    const root = buildTree([3, 3, null, 4, 2]);
    const result = goodNodes(root);
    const expected = 3;
    expect(result).toBe(expected);
  });

  it('Edge Case: Single node tree, root = [100]', () => {
    const root = buildTree([100]);
    const result = goodNodes(root);
    const expected = 1;
    expect(result).toBe(expected);
  });

  it('Edge Case: All nodes are good, root = [1,2,3]', () => {
    const root = buildTree([1, 2, 3]);
    const result = goodNodes(root);
    const expected = 3;
    expect(result).toBe(expected);
  });

  it('Edge Case: Large tree with mixed values', () => {
    const root = buildTree([3, 3, 4, 5, 2, null, 1, null, null, 6, null]);
    const result = goodNodes(root);
    const expected = 5; // Calculate expected based on your logic
    expect(result).toBe(expected);
  });
});
