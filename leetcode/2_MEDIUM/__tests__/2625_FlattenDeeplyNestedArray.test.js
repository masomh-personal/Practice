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
    {
      description: 'should handle a large array with deeper nesting of [3 levels]',
      arr: Array.from({ length: 1000 }, () => [[[1]]]),
      n: 3,
      expected: Array.from({ length: 1000 }, () => 1),
    },
    {
      description: 'should handle a large array with even deeper nesting of [10 levels]',
      arr: Array.from({ length: 1000 }, () => [[[[[[[[[[[1]]]]]]]]]]]),
      n: 10,
      expected: Array.from({ length: 1000 }, () => [1]),
    },
    {
      description: 'should handle arrays with mixed data types',
      arr: [1, 'a', [true, [2, [3]], 'b'], null],
      n: 2,
      expected: [1, 'a', true, 2, [3], 'b', null],
    },
  ];

  // Implementations
  const implementations = [
    {
      fn: flat,
      describeText: '.flat() - Implementation',
    },
    {
      fn: flatBuiltIn,
      describeText: '.flatBuiltIn() - Implementation',
    },
  ];

  // Run all test cases for each implementation
  implementations.forEach(({ fn, describeText }) => {
    describe(describeText, () => {
      testCases.forEach(({ description, arr, n, expected }) => {
        it(description, () => {
          const result = fn(arr, n);
          expect(result).toEqual(expected);
        });
      });
    });
  });
});
