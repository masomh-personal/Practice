import { invertTree, invertTreeIterative } from '../226_InvertBinaryTree.js';

// Leetcode TreeNode Implementation
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe('Leetcode #226: Invert Binary Tree', () => {
  const implementations = [
    { name: 'Recursive', func: invertTree },
    { name: 'Iterative', func: invertTreeIterative },
  ];

  implementations.forEach(({ name, func }) => {
    describe(`${name} Implementation`, () => {
      describe('Base cases', () => {
        it('should handle an empty tree', () => {
          const input = null;
          const expected = null;
          const result = func(input);
          expect(result).toEqual(expected);
        });

        it('should handle a single-node tree', () => {
          const input = new TreeNode(1);
          const expected = new TreeNode(1);
          const result = func(input);
          expect(result).toEqual(expected);
        });
      });

      describe('Small trees', () => {
        it('should invert a small tree with two levels', () => {
          const input = new TreeNode(
            4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(7, new TreeNode(6), new TreeNode(9))
          );
          const expected = new TreeNode(
            4,
            new TreeNode(7, new TreeNode(9), new TreeNode(6)),
            new TreeNode(2, new TreeNode(3), new TreeNode(1))
          );
          const result = func(input);
          expect(result).toEqual(expected);
        });
      });

      describe('Larger trees', () => {
        it('should invert a larger tree', () => {
          const input = new TreeNode(
            10,
            new TreeNode(
              5,
              new TreeNode(3, new TreeNode(2), new TreeNode(4)),
              new TreeNode(7, new TreeNode(6), new TreeNode(8))
            ),
            new TreeNode(
              15,
              new TreeNode(13, new TreeNode(12), new TreeNode(14)),
              new TreeNode(20, new TreeNode(18), new TreeNode(25))
            )
          );
          const expected = new TreeNode(
            10,
            new TreeNode(
              15,
              new TreeNode(20, new TreeNode(25), new TreeNode(18)),
              new TreeNode(13, new TreeNode(14), new TreeNode(12))
            ),
            new TreeNode(
              5,
              new TreeNode(7, new TreeNode(8), new TreeNode(6)),
              new TreeNode(3, new TreeNode(4), new TreeNode(2))
            )
          );
          const result = func(input);
          expect(result).toEqual(expected);
        });
      });
    });
  });
});
