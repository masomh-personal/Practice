import { subsetsRecursive, subsets } from '../78_Subsets.js';

describe('Subsets - Recursive and Iterative Approaches', () => {
  const testCases = [
    {
      nums: [1, 2, 3],
      expectedOutput: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
    },
    {
      nums: [0],
      expectedOutput: [[], [0]],
    },
    {
      nums: [-1, 0, 1],
      expectedOutput: [[], [-1], [0], [-1, 0], [1], [-1, 1], [0, 1], [-1, 0, 1]],
    },
    {
      nums: [1, 2, 3, 4],
      expectedOutputLength: 16, // 2^4 = 16 subsets
    },
    {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Long array test case
      expectedOutputLength: 1024, // 2^10 = 1024 subsets
    },
  ];

  describe('Recursive Approach', () => {
    testCases.forEach(({ nums, expectedOutput, expectedOutputLength }) => {
      it(`should return correct subsets for ${JSON.stringify(nums)}`, () => {
        const result = subsetsRecursive(nums);

        if (expectedOutput) {
          expect(result).toEqual(expect.arrayContaining(expectedOutput));
          expect(result.length).toBe(expectedOutput.length);
        } else if (expectedOutputLength) {
          expect(result.length).toBe(expectedOutputLength);
        }
      });
    });
  });

  describe('Iterative Approach', () => {
    testCases.forEach(({ nums, expectedOutput, expectedOutputLength }) => {
      it(`should return correct subsets for ${JSON.stringify(nums)}`, () => {
        const result = subsets(nums);

        if (expectedOutput) {
          expect(result).toEqual(expect.arrayContaining(expectedOutput));
          expect(result.length).toBe(expectedOutput.length);
        } else if (expectedOutputLength) {
          expect(result.length).toBe(expectedOutputLength);
        }
      });
    });
  });
});
