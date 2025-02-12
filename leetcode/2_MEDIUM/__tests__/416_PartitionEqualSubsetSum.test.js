import { canPartition } from '../416_PartitionEqualSubsetSum.js';

describe('Leetcode #416: Partition Equal Subset Sum', () => {
  describe('Dynamic Programming Approach', () => {
    it('should return true for an array that can be partitioned into two subsets with equal sum', () => {
      const nums = [1, 5, 11, 5];
      const result = canPartition(nums);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false for an array that cannot be partitioned into two subsets with equal sum', () => {
      const nums = [1, 2, 3, 5];
      const result = canPartition(nums);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return true for an array with multiple possibilities of equal partitions', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7];
      const result = canPartition(nums);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false for an array with an odd total sum', () => {
      const nums = [1, 2, 5];
      const result = canPartition(nums);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return false for a single element array', () => {
      const nums = [1];
      const result = canPartition(nums);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return true for an array with multiple repeated values that can be partitioned equally', () => {
      const nums = [3, 3, 3, 3];
      const result = canPartition(nums);
      const expected = true;
      expect(result).toBe(expected);
    });
  });
});
