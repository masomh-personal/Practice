import { searchBST } from '../700_SearchBinarySearchTree.js';

// Definition for a binary tree node
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to build a BST from an array representation
function buildTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;

  const root = new TreeNode(arr[index]);
  root.left = buildTree(arr, 2 * index + 1);
  root.right = buildTree(arr, 2 * index + 2);

  return root;
}

// Helper function to convert a TreeNode to array format (for comparison)
function treeToArray(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === null) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // Remove trailing null values
  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

// Test cases
describe('searchBST', () => {
  it('should return the subtree rooted with the target node when the value exists', () => {
    const root = buildTree([4, 2, 7, 1, 3]);
    const result = searchBST(root, 2);
    const resultArray = treeToArray(result);
    expect(resultArray).toEqual([2, 1, 3]);
  });

  it('should return null when the target value does not exist in the BST', () => {
    const root = buildTree([4, 2, 7, 1, 3]);
    const result = searchBST(root, 5);
    expect(result).toBeNull();
  });

  it('should return the root node when the target value is the root value', () => {
    const root = buildTree([4, 2, 7, 1, 3]);
    const result = searchBST(root, 4);
    const resultArray = treeToArray(result);
    expect(resultArray).toEqual([4, 2, 7, 1, 3]);
  });

  it('should handle an empty tree (null root)', () => {
    const result = searchBST(null, 1);
    expect(result).toBeNull();
  });

  it('should handle a single-node tree when the target value matches the node', () => {
    const root = buildTree([1]);
    const result = searchBST(root, 1);
    const resultArray = treeToArray(result);
    expect(resultArray).toEqual([1]);
  });

  it('should handle a single-node tree when the target value does not match the node', () => {
    const root = buildTree([1]);
    const result = searchBST(root, 2);
    expect(result).toBeNull();
  });

  it('should return null when the target value is larger than all values in the tree', () => {
    const root = buildTree([3, 1, 4, null, 2]);
    const result = searchBST(root, 5);
    expect(result).toBeNull();
  });

  it('should return null when the target value is smaller than all values in the tree', () => {
    const root = buildTree([3, 1, 4, null, 2]);
    const result = searchBST(root, 0);
    expect(result).toBeNull();
  });
});
