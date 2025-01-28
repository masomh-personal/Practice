import { maxDepth, maxDepthIterative } from '../104_MaximumDepthOfBinaryTree.js';

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe('Leetcode #104: Maximum Depth of Binary Tree', () => {
  const testCases = [
    {
      description: 'should return 1 for a single node tree',
      input: new TreeNode(1),
      expected: 1,
    },
    {
      description: 'should return 2 for a complete binary tree with 2 levels',
      input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      expected: 2,
    },
    {
      description: 'should return 3 for an unbalanced binary tree',
      input: new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)),
      expected: 3,
    },
    {
      description: 'should return 0 for an empty tree',
      input: null,
      expected: 0,
    },
    {
      description: 'should return 5 for a more complex tree',
      input: new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
        new TreeNode(3, null, new TreeNode(7, new TreeNode(8, new TreeNode(9)), null))
      ),
      expected: 5,
    },
  ];

  const implementations = [
    { name: 'Recursive Implementation', fn: maxDepth },
    { name: 'Iterative Implementation', fn: maxDepthIterative },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ description, input, expected }) => {
        it(description, () => {
          const result = fn(input);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
