import { flat, flatBuiltIn } from '../2625_FlattenDeeplyNestedArray.js';

describe('Leetcode #2625: Flatten Deeply Nested Array', () => {
  const testCases = [
    {
      description: 'should return the original array when n = 0',
      arr: [1, 2, [3, 4]],
      n: 0,
      expected: [1, 2, [3, 4]],
    },
    {
      description: 'should handle an empty array',
      arr: [],
      n: 3,
      expected: [],
    },
    {
      description: 'should handle an array with no nested elements',
      arr: [1, 2, 3],
      n: 2,
      expected: [1, 2, 3],
    },
    {
      description: 'should flatten one level deep when n = 1',
      arr: [1, [2, 3], [4, [5]]],
      n: 1,
      expected: [1, 2, 3, 4, [5]],
    },
    {
      description: 'should fully flatten nested arrays when n is very large',
      arr: [1, [2, [3, [4, 5]]]],
      n: 100,
      expected: [1, 2, 3, 4, 5],
    },
    {
      description: 'should partially flatten deeply nested arrays',
      arr: [1, [2, [3, [4, 5]]]],
      n: 2,
      expected: [1, 2, 3, [4, 5]],
    },
    {
      description: 'should handle a large array with shallow nesting',
      arr: Array(100000).fill([1]),
      n: 1,
      expected: Array(100000).fill(1),
    },
  ];

  // Run test for both functions
  describe(`flat() function`, () => {
    testCases.forEach(({ description, arr, n, expected }) => {
      it(description, () => {
        const result = flat(arr, n);
        expect(result).toEqual(expected);
      });
    });
  });

  describe(`flatBuiltIn() function`, () => {
    testCases.forEach(({ description, arr, n, expected }) => {
      it(description, () => {
        const result = flatBuiltIn(arr, n);
        expect(result).toEqual(expected);
      });
    });
  });
});
