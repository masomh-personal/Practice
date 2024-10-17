// Import the functions to be tested
import { isSymmetricDFS, isSymmetricBFS } from '../101_SymmetricTree.js';

// Leetcode helper class
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to build a binary tree from an array (BFS approach)
const buildTree = (values) => {
  if (!values.length) return null;

  const root = new TreeNode(values[0]);
  const queue = [root];

  let i = 1;
  while (i < values.length) {
    const current = queue.shift();
    if (values[i] !== null) {
      current.left = new TreeNode(values[i]);
      queue.push(current.left);
    }
    i++;
    if (i < values.length && values[i] !== null) {
      current.right = new TreeNode(values[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
};

// Common test cases
const testCases = [
  {
    description: 'should return true for a symmetric tree',
    tree: [1, 2, 2, 3, 4, 4, 3],
    expected: true,
  },
  {
    description: 'should return false for an asymmetric tree',
    tree: [1, 2, 2, null, 3, null, 3],
    expected: false,
  },
  {
    description: 'should return true for a tree with a single node',
    tree: [1],
    expected: true,
  },
  {
    description: 'should return false for a tree with different values in symmetric positions',
    tree: [1, 2, 2, 3, null, null, 5],
    expected: false,
  },
];

// Combined test runner function for both approaches
const testSymmetricTreeFunction = (func, funcNameDescription) => {
  describe(`${funcNameDescription}`, () => {
    testCases.forEach(({ description, tree, expected }) => {
      it(description, () => {
        const root = buildTree(tree);
        expect(func(root)).toBe(expected);
      });
    });
  });
};

// Run tests for both isSymmetricDFS and isSymmetricBFS
testSymmetricTreeFunction(isSymmetricDFS, 'isSymmetricDFS (recursive)');
testSymmetricTreeFunction(isSymmetricBFS, 'isSymmetricBFS (iterative)');
