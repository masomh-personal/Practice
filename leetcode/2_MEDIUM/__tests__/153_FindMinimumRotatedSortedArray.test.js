// leetcode-153.test.js

import { findMin, findMinBS } from '../153_FindMinimumRotatedSortedArray.js';

// Array of test cases
const testCases = [
  {
    description:
      'should return the minimum element when the array is rotated with the minimum at the end',
    input: [3, 4, 5, 1, 2],
    expected: 1,
  },
  {
    description:
      'should return the minimum element when the array is rotated with the minimum at the middle',
    input: [4, 5, 6, 7, 0, 1, 2],
    expected: 0,
  },
  {
    description: 'should handle arrays with only one element',
    input: [1],
    expected: 1,
  },
  {
    description: 'should handle arrays that are not rotated (already sorted)',
    input: [1, 2, 3, 4, 5, 6, 7],
    expected: 1,
  },
  {
    description:
      'should return the minimum when the smallest element is in the middle of the array',
    input: [4, 5, 6, -1, 0, 1, 2, 3],
    expected: -1,
  },
  {
    description: 'should return the minimum when the rotation occurs at various points',
    input: [10, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    expected: 1,
  },
];

// Array of functions to test
const implementations = [
  { name: 'MinHeap', func: findMin },
  { name: 'Binary Search', func: findMinBS },
];

// Tests for "Find Minimum in Rotated Sorted Array"
describe('Find Minimum in Rotated Sorted Array', () => {
  implementations.forEach(({ name, func }) => {
    describe(`${name} Implementation`, () => {
      testCases.forEach(({ description, input, expected }) => {
        it(description, () => {
          const result = func([...input]); // Create a fresh copy of `input` for each call
          expect(result).toBe(expected);
        });
      });
    });
  });
});
