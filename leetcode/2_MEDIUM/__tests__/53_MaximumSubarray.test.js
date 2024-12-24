import { maxSubArray } from '../53_MaximumSubarray.js';

describe('Leetcode #53: Maximum Subarray', () => {
  it('should return the maximum subarray sum for a standard array', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = maxSubArray(nums);
    const expected = 6; // Subarray [4, -1, 2, 1] has the largest sum
    expect(result).toBe(expected);
  });

  it('should handle an array with all negative numbers', () => {
    const nums = [-1, -2, -3, -4];
    const result = maxSubArray(nums);
    const expected = -1; // The largest sum is the single largest number
    expect(result).toBe(expected);
  });

  it('should handle an array with a single element', () => {
    const nums = [5];
    const result = maxSubArray(nums);
    const expected = 5; // The only element is the largest sum
    expect(result).toBe(expected);
  });

  it('should handle an array with all positive numbers', () => {
    const nums = [1, 2, 3, 4];
    const result = maxSubArray(nums);
    const expected = 10; // The entire array has the largest sum
    expect(result).toBe(expected);
  });

  // NOTE: not specifically part of constraints of this question, but good to have
  it('should handle an empty array', () => {
    const nums = [];
    const result = maxSubArray(nums);
    const expected = 0; // Edge case: empty input
    expect(result).toBe(expected);
  });
});
