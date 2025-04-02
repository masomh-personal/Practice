import { jump } from '../45_JumpGameII';

describe('Leetcode #45: Jump Game II', () => {
  // Basic functionality
  describe('Basic Cases', () => {
    it('should return 2 for [2,3,1,1,4]', () => {
      const result = jump([2, 3, 1, 1, 4]);
      const expected = 2;
      expect(result).toBe(expected);
    });

    it('should return 0 for [0]', () => {
      const result = jump([0]);
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should return 1 for [1, 2]', () => {
      const result = jump([1, 2]);
      const expected = 1;
      expect(result).toBe(expected);
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    it('should handle case where each element is 1', () => {
      const result = jump([1, 1, 1, 1]);
      const expected = 3;
      expect(result).toBe(expected);
    });

    it('should return 1 when first jump reaches the end', () => {
      const result = jump([10, 9, 8, 1, 1]);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should handle case with large jump in the middle', () => {
      const result = jump([1, 1, 10, 1, 1]);
      const expected = 3;
      expect(result).toBe(expected);
    });
  });

  // Stress test
  describe('Performance Cases', () => {
    it('should handle large input with all 1s', () => {
      const nums = new Array(10_000).fill(1);
      const result = jump(nums);
      const expected = 9_999;
      expect(result).toBe(expected);
    });

    it('should handle large input with max jumps', () => {
      const nums = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
      const result = jump(nums);
      const expected = 1;
      expect(result).toBe(expected);
    });
  });
});
