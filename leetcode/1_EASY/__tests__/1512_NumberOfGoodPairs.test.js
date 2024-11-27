import { numIdenticalPairs, numIdenticalPairsNaive } from '../1512_NumberOfGoodPairs.js';

// Define shared test cases
const testCases = [
  {
    description: 'Example 1: Mixed elements with some good pairs',
    nums: [1, 2, 3, 1, 1, 3],
    expected: 4, // (0,3), (0,4), (3,4), (2,5)
  },
  {
    description: 'Example 2: All identical elements',
    nums: [1, 1, 1, 1],
    expected: 6, // (0,1), (0,2), (0,3), (1,2), (1,3), (2,3)
  },
  {
    description: 'Example 3: No good pairs',
    nums: [1, 2, 3],
    expected: 0, // No good pairs
  },
  {
    description: 'Edge Case: Single element array',
    nums: [1],
    expected: 0, // No pairs in a single-element array
  },
  {
    description: 'Edge Case: Two identical elements',
    nums: [5, 5],
    expected: 1, // (0,1)
  },
  {
    description: 'Edge Case: Two different elements',
    nums: [1, 2],
    expected: 0, // No good pairs
  },
  {
    description: 'Stress Test: Maximum elements with all identical values',
    nums: Array(100).fill(1), // Array of 100 elements, all 1
    expected: (100 * 99) / 2, // nC2 formula for combinations
  },
  {
    description: 'Stress Test: Maximum elements with all unique values',
    nums: Array.from({ length: 100 }, (_, i) => i + 1), // [1, 2, ..., 100]
    expected: 0, // No good pairs
  },
];

// Test both implementations
describe('Number of Good Pairs', () => {
  describe('Optimized Approach - HashMap O(n)', () => {
    testCases.forEach(({ description, nums, expected }) => {
      it(description, () => {
        const result = numIdenticalPairs(nums);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Naive Approach - Brute Force O(n^2)', () => {
    testCases.forEach(({ description, nums, expected }) => {
      it(description, () => {
        const result = numIdenticalPairsNaive(nums);
        expect(result).toBe(expected);
      });
    });
  });
});
