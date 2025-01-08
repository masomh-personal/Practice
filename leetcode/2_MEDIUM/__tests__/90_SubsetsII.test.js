import { subsetsWithDup, subsetsWithDupRecursive } from '../90_SubsetsII.js';

describe('Leetcode #90: Subsets II', () => {
  const testCases = [
    { input: [1, 2, 2], expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
    { input: [0], expected: [[], [0]] },
    {
      input: [4, 4, 4, 1, 4],
      expected: [
        [],
        [1],
        [1, 4],
        [1, 4, 4],
        [1, 4, 4, 4],
        [1, 4, 4, 4, 4],
        [4],
        [4, 4],
        [4, 4, 4],
        [4, 4, 4, 4],
      ],
    },
    {
      input: [1, 2, 2, 3, 3],
      expected: [
        [],
        [1],
        [2],
        [2, 2],
        [3],
        [3, 3],
        [1, 2],
        [1, 2, 2],
        [1, 3],
        [1, 3, 3],
        [1, 2, 3],
        [1, 2, 3, 3],
        [1, 2, 2, 3],
        [1, 2, 2, 3, 3],
        [2, 3],
        [2, 3, 3],
        [2, 2, 3],
        [2, 2, 3, 3],
      ],
    },
  ];

  // Helper function to check equality of two arrays
  const areEqualSets = (set1, set2) => JSON.stringify(set1.sort()) === JSON.stringify(set2.sort());

  describe('Iterative approach: subsetsWithDup', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return all unique subsets for input = [${input}]`, () => {
        const result = subsetsWithDup(input);
        expect(areEqualSets(result, expected)).toBe(true);
      });
    });
  });

  describe('Recursive approach: subsetsWithDupRecursive', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return all unique subsets for input = [${input}]`, () => {
        const result = subsetsWithDupRecursive(input);
        expect(areEqualSets(result, expected)).toBe(true);
      });
    });
  });
});
