import {
  findDuplicate,
  findDuplicateNaive,
  findDuplicateSort,
} from '../287_FindTheDuplicateNumber.js';

describe('Leetcode #287: Find the Duplicate Number', () => {
  const testCases = [
    { input: [1, 3, 4, 2, 2], expected: 2 },
    { input: [3, 1, 3, 4, 2], expected: 3 },
    { input: [3, 3, 3, 3, 3], expected: 3 },
    { input: [1, 1], expected: 1 },
    { input: [2, 2, 2, 2, 2, 2], expected: 2 },
    { input: [1, 5, 4, 2, 6, 3, 5], expected: 5 },
  ];

  const approaches = [
    { description: 'Naive Approach (using a Set)', func: findDuplicateNaive },
    { description: 'Sorting Approach (Non Mutated)', func: findDuplicateSort },
    { description: "Optimized Approach (Floyd's)", func: findDuplicate },
  ];

  approaches.forEach(({ description, func }) => {
    describe(description, () => {
      testCases.forEach(({ input, expected }, index) => {
        it(`should find the duplicate number for test case ${index + 1}`, () => {
          const result = func(input); // Replace `findDuplicate` with your solution function
          expect(result).toBe(expected);
        });
      });
    });
  });
});
