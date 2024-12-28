import { minSubArrayLen } from '../209_MinimumSizeSubarraySum.js';

describe('Leetcode #209: Minimum Size Subarray Sum', () => {
  it('should return the correct minimal length for a valid subarray', () => {
    const target = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    const result = minSubArrayLen(target, nums); // Replace with your implementation
    const expected = 2; // [4,3]
    expect(result).toBe(expected);
  });

  it('should return 1 for single element subarray meeting the target', () => {
    const target = 4;
    const nums = [1, 4, 4];
    const result = minSubArrayLen(target, nums);
    const expected = 1; // [4]
    expect(result).toBe(expected);
  });

  it('should return 0 when no subarray meets the target', () => {
    const target = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    const result = minSubArrayLen(target, nums);
    const expected = 0;
    expect(result).toBe(expected);
  });

  it('should handle the smallest array length and return correct result', () => {
    const target = 1;
    const nums = [1];
    const result = minSubArrayLen(target, nums);
    const expected = 1; // [1]
    expect(result).toBe(expected);
  });

  it('should handle the largest constraints efficiently', () => {
    const target = 10_000;
    const nums = Array(100_000).fill(1);
    nums[50_000] = 10_000; // Modify one element to meet target
    const result = minSubArrayLen(target, nums);
    const expected = 1; // [10_000]
    expect(result).toBe(expected);
  });

  it('should handle a case where subarray length is more than 1', () => {
    const target = 15;
    const nums = [1, 2, 3, 4, 5];
    const result = minSubArrayLen(target, nums);
    const expected = 5; // Entire array sums to 15
    expect(result).toBe(expected);
  });

  it('should handle an array with consecutive numbers summing to target', () => {
    const target = 10;
    const nums = [1, 2, 3, 4, 5];
    const result = minSubArrayLen(target, nums);
    const expected = 3; // [3, 4, 5]
    expect(result).toBe(expected);
  });

  it('should handle a large array efficiently', () => {
    const target = 15_000;
    const nums = Array(100_000).fill(1);
    nums[99998] = 14_999; // Add a large number near the end to create a valid subarray
    const result = minSubArrayLen(target, nums);
    const expected = 2; // [1, 14_999]
    expect(result).toBe(expected);
  });
});
