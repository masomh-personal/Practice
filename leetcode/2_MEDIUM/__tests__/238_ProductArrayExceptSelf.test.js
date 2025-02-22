import { productExceptSelf } from '../238_ProductArrayExceptSelf.js'; // Replace with actual path to your solution file

describe('Leetcode #238: Product of Array Except Self', () => {
  describe('Basic functionality', () => {
    it('should return the product of array except self for positive numbers', () => {
      const nums = [1, 2, 3, 4];
      const result = productExceptSelf(nums);
      const expected = [24, 12, 8, 6];
      expect(result).toEqual(expected);
    });

    it('should return the correct output when the array contains a zero', () => {
      const nums = [1, 2, 0, 4];
      const result = productExceptSelf(nums);
      const expected = [0, 0, 8, 0];
      expect(result).toEqual(expected);
    });

    it('should return all zeros when the array contains more than one zero', () => {
      const nums = [0, 1, 2, 0];
      const result = productExceptSelf(nums);
      const expected = [0, 0, 0, 0];
      expect(result).toEqual(expected);
    });
  });

  describe('Edge cases', () => {
    it('should handle arrays of length 2', () => {
      const nums = [3, 4];
      const result = productExceptSelf(nums);
      const expected = [4, 3];
      expect(result).toEqual(expected);
    });

    it('should return correct output for negative numbers', () => {
      const nums = [-1, -2, -3, -4];
      const result = productExceptSelf(nums);
      const expected = [-24, -12, -8, -6];
      expect(result).toEqual(expected);
    });
  });

  describe('Special cases', () => {
    it('should handle all ones', () => {
      const nums = [1, 1, 1, 1];
      const result = productExceptSelf(nums);
      const expected = [1, 1, 1, 1];
      expect(result).toEqual(expected);
    });

    it('should handle a mix of positive and negative numbers', () => {
      const nums = [1, -2, 3, -4];
      const result = productExceptSelf(nums);
      const expected = [24, -12, 8, -6];
      expect(result).toEqual(expected);
    });
  });

  describe('Extreme performance cases', () => {
    it('should handle a large input size efficiently', () => {
      const nums = Array(100_000).fill(1);
      const result = productExceptSelf(nums);
      const expected = Array(100_000).fill(1);
      expect(result).toEqual(expected);
    });

    it('should handle all elements as zero', () => {
      const nums = Array(100_000).fill(0);
      const result = productExceptSelf(nums);
      const expected = Array(100_000).fill(0);
      expect(result).toEqual(expected);
    });
  });
});
