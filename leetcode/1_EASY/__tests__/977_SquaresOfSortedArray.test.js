import { sortedSquaresNaive, sortedSquares } from '../977_SquaresOfSortedArray.js';

describe('Leetcode #977: Squares of a Sorted Array', () => {
  const testCases = [
    {
      description: 'should return the squares of the sorted array in sorted order',
      input: [-4, -1, 0, 3, 10],
      expected: [0, 1, 9, 16, 100],
    },
    {
      description: 'should handle an array with all negative numbers',
      input: [-7, -3, -1],
      expected: [1, 9, 49],
    },
    {
      description: 'should handle an array with all positive numbers',
      input: [2, 3, 6],
      expected: [4, 9, 36],
    },
    {
      description: 'should handle an array with a mix of positive and negative numbers',
      input: [-5, -3, -2, 1, 4],
      expected: [1, 4, 9, 16, 25],
    },
    {
      description: 'should handle an array with a single element',
      input: [-3],
      expected: [9],
    },
    {
      description: 'should handle an array with zeros',
      input: [-2, 0, 0, 1, 3],
      expected: [0, 0, 1, 4, 9],
    },
    {
      description: 'should handle large numbers',
      input: [-10_000, -5_000, 0, 2_000, 8_000],
      expected: [0, 4_000_000, 25_000_000, 64_000_000, 100_000_000],
    },
  ];

  const implementations = [
    { name: 'Optimized Approach', func: sortedSquares },
    { name: 'Naive Approach', func: sortedSquaresNaive },
  ];

  implementations.forEach(({ name, func }) => {
    describe(`sortedSquares function (${name})`, () => {
      testCases.forEach(({ description, input, expected }) => {
        it(description, () => {
          expect(func(input)).toEqual(expected);
        });
      });
    });
  });

  /**
   * Example test case: SIZE = 1e7
   * Naive Approach: 847.67ms
   * Optimized Approach: 71.63ms
   */
  describe.skip('----- Performance Test -----', () => {
    it('should compare the execution time of both implementations', () => {
      const SIZE = 1e7;
      const largeInput = Array.from({ length: SIZE }, (_, i) => i - SIZE / 2); // Large test case

      console.time('Naive Approach');
      sortedSquaresNaive(largeInput);
      console.timeEnd('Naive Approach');

      console.time('Optimized Approach');
      sortedSquares(largeInput);
      console.timeEnd('Optimized Approach');
    });
  });
});
