import { longestOnes } from '../1004_MaxConsecutiveOnesIII.js';

describe('longestOnes', () => {
  describe('Basic functionality tests (leetcode description examples)', () => {
    it('should return the correct result for the first example', () => {
      const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
      const k = 2;
      const result = longestOnes(nums, k);
      expect(result).toBe(6); // Expected output: 6
    });

    it('should return the correct result for the second example', () => {
      const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
      const k = 3;
      const result = longestOnes(nums, k);
      expect(result).toBe(10); // Expected output: 10
    });
  });

  describe('Edge case tests', () => {
    it('should return the length of the array when k is greater than or equal to the number of 0s', () => {
      const nums = [1, 0, 1, 0, 1];
      const k = 2;
      const result = longestOnes(nums, k);
      expect(result).toBe(5); // We can flip both 0's to 1's
    });

    it('should return the size of the array when all elements are 1s', () => {
      const nums = [1, 1, 1, 1, 1];
      const k = 0;
      const result = longestOnes(nums, k);
      expect(result).toBe(5); // No 0's, so the result should be the length of the array
    });

    it('should return 0 when the array is all 0s and k is 0', () => {
      const nums = [0, 0, 0, 0];
      const k = 0;
      const result = longestOnes(nums, k);
      expect(result).toBe(0); // No flips allowed and no 1's in the array
    });

    it('should return the correct result when there are no 0s and k is positive', () => {
      const nums = [1, 1, 1, 1];
      const k = 2;
      const result = longestOnes(nums, k);
      expect(result).toBe(4); // The array is all 1's, so the result should still be the length of the array
    });
  });

  describe('Large input tests', () => {
    it('should handle large inputs efficiently', () => {
      const nums = Array(100000).fill(1);
      nums[50000] = 0; // Insert a single 0 in the middle
      const k = 1;
      const result = longestOnes(nums, k);
      expect(result).toBe(100000); // We can flip the one 0, so the entire array becomes 1's
    });

    it('should return the correct result when k is 0 with a large array', () => {
      const nums = Array(100000)
        .fill(0)
        .map((_, index) => (index % 2 === 0 ? 1 : 0));
      const k = 0;
      const result = longestOnes(nums, k);
      expect(result).toBe(1); // No flips allowed, so the longest sequence of 1's is 1
    });
  });
});
