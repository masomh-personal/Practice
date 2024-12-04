import { search, searchNaive } from '../33_SearchInRotatedSortedArray.js';

// Array of test cases
const testCases = [
  {
    description: 'should return the correct index when the target exists in the array',
    nums: [4, 5, 6, 7, 0, 1, 2],
    target: 0,
    expected: 4,
  },
  {
    description: 'should return -1 when the target does not exist in the array',
    nums: [4, 5, 6, 7, 0, 1, 2],
    target: 3,
    expected: -1,
  },
  {
    description: 'should handle arrays with only one element where the target exists',
    nums: [1],
    target: 1,
    expected: 0,
  },
  {
    description: 'should handle arrays with only one element where the target does not exist',
    nums: [1],
    target: 0,
    expected: -1,
  },
  {
    description: 'should handle arrays with two elements where the target exists',
    nums: [3, 1],
    target: 1,
    expected: 1,
  },
  {
    description: 'should handle arrays with two elements where the target does not exist',
    nums: [3, 1],
    target: 2,
    expected: -1,
  },
  {
    description: 'should handle arrays that are not rotated',
    nums: [1, 2, 3, 4, 5, 6, 7],
    target: 5,
    expected: 4,
  },
  {
    description: 'should handle edge cases with duplicates excluded (problem constraints)',
    nums: [8, 9, 2, 3, 4],
    target: 9,
    expected: 1,
  },
];

// LARGE ARRAY testCreation of larger test array
const LARGE_ARRAY = Array.from({ length: 1e6 }, (_, i) => i);
const LEFT_LARGE_ARRAY = LARGE_ARRAY.slice(0, 5e5);
const RIGHT_LARGE_ARRAY = LARGE_ARRAY.slice(5e5);
const ROTATED_LARGE_ARRAY = [...RIGHT_LARGE_ARRAY, ...LEFT_LARGE_ARRAY];

testCases.push({
  description: 'should handle a very large rotated sorted array efficiently',
  nums: ROTATED_LARGE_ARRAY,
  target: 123_456,
  expected: (123_456 + 5e5) % 1e6, // Adjust the index based on the rotation (@ 5e5)
});

describe('Search in Rotated Sorted Array', () => {
  describe('Optimized Solution', () => {
    testCases.forEach(({ description, nums, target, expected }) => {
      it(description, () => {
        const result = search(nums, target);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Naive Solution', () => {
    testCases.forEach(({ description, nums, target, expected }) => {
      it(description, () => {
        const result = searchNaive(nums, target);
        expect(result).toBe(expected); // Note: Behavior may differ if `searchNaive` alters input logic.
      });
    });
  });
});
