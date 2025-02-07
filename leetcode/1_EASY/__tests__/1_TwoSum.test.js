import { twoSum } from '../1_TwoSum.js';

describe('Leetcode #1: Two Sum', () => {
  describe('Optimized Approach (Hash Map)', () => {
    it('should return indices for a basic case', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const expected = [0, 1];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should return indices when elements are in the middle', () => {
      const nums = [3, 2, 4];
      const target = 6;
      const expected = [1, 2];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should return indices for negative numbers', () => {
      const nums = [-3, 4, 3, 90];
      const target = 0;
      const expected = [0, 2];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should return indices for large numbers', () => {
      const nums = [1_000_000, 3, 7, 1_000_003];
      const target = 2_000_003;
      const expected = [0, 3];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should handle duplicates correctly', () => {
      const nums = [3, 3];
      const target = 6;
      const expected = [0, 1];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should return indices for a case where elements are far apart', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
      const target = 21;
      const expected = [0, 10];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should return indices for a very large array with high variance in numbers', () => {
      const nums = Array.from({ length: 1_000_000 }, (_, i) => i * 3 - 500_000); // Generates numbers with large gaps
      nums[0] = 1;
      nums[1] = 2;
      const target = 3;
      const expected = [0, 1];

      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  });
});
