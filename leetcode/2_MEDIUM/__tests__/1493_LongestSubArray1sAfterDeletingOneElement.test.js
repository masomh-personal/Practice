import { longestSubarray } from '../1493_LongestSubArray1sAfterDeletingOneElement.js';

describe('longestSubarray', () => {
  it('should return 3 for nums = [1,1,0,1]', () => {
    const nums = [1, 1, 0, 1];
    const result = longestSubarray(nums);
    expect(result).toBe(3);
  });

  it('should return 5 for nums = [0,1,1,1,0,1,1,0,1]', () => {
    const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
    const result = longestSubarray(nums);
    expect(result).toBe(5);
  });

  it('should return 2 for nums = [1,1,1]', () => {
    const nums = [1, 1, 1];
    const result = longestSubarray(nums);
    expect(result).toBe(2);
  });

  it('should return 1 for nums = [0]', () => {
    const nums = [0];
    const result = longestSubarray(nums);
    expect(result).toBe(0);
  });

  it('should return 1 for nums = [1]', () => {
    const nums = [1];
    const result = longestSubarray(nums);
    expect(result).toBe(0);
  });

  it('should return 99 for nums = [1...0] (long sequence of 1s with one 0 in between)', () => {
    const nums = new Array(100).fill(1);
    nums[50] = 0; // Insert a single 0 in the middle
    const result = longestSubarray(nums);
    expect(result).toBe(99);
  });

  it('should handle a large array of size 1000 with multiple zeroes correctly', () => {
    const nums = new Array(1000).fill(1);

    // Scatter some zeroes in the array
    nums[100] = 0;
    nums[250] = 0;
    nums[500] = 0;
    nums[750] = 0;

    // Expected: The longest subarray with at most one zero deleted
    const result = longestSubarray(nums);
    expect(result).toBe(498); // The longest valid subarray has length 498 after deleting one zero
  });
});
