import { subarraySum, subarraySumNaive } from '../560_SubarraySumEqualsK.js';

const testCases = [
  { nums: [1, 1, 1], k: 2, expected: 2 },
  { nums: [1, 2, 3], k: 3, expected: 2 },
  { nums: [0, 0, 0], k: 0, expected: 6 }, // All subarrays sum to 0
  { nums: [1, -1, 0], k: 0, expected: 3 }, // [1,-1], [1,-1,0], and [0]
  { nums: [1, 2, 3, 4, 5], k: 9, expected: 2 }, // [2,3,4], [4,5]
  { nums: [1], k: 1, expected: 1 }, // Only one subarray
];

// for performance testing
// For Naive approach: 500-600ms vs Optimized Approach: 6-11ms
const largeTestCase = {
  nums: Array(100_000).fill(1), // Array of 100,000 ones
  k: 50_000, // Looking for subarrays summing to 50,000
  expected: 50_001, // Each subarray starting at index 0 to i (i <= 50_000) forms a valid sum
};

//testCases.push(largeTestCase);

describe('Leetcode #560: Subarray Sum Equals K', () => {
  describe('subarraySum() | Optimized Implementation', () => {
    testCases.forEach(({ nums, k, expected }) => {
      it(`nums = ${JSON.stringify(nums)}, k = ${k}`, () => {
        const result = subarraySum(nums, k);
        expect(result).toBe(expected);
      });
    });
  });

  describe('subarraySumNaive() | Brute Force Implementation', () => {
    testCases.forEach(({ nums, k, expected }) => {
      it(`nums = ${JSON.stringify(nums)}, k = ${k}`, () => {
        const result = subarraySumNaive(nums, k);
        expect(result).toBe(expected);
      });
    });
  });
});
