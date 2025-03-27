import { missingNumber } from '../268_MissingNumber';

describe('Leetcode #268: Missing Number', () => {
  // Category: Basic cases
  describe('basic cases', () => {
    it('should find the missing middle number', () => {
      const input = [3, 0, 1];
      const expected = 2;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });

    it('should find the missing largest number', () => {
      const input = [0, 1];
      const expected = 2;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });

    it('should find the missing number in a larger array', () => {
      const input = [9, 6, 4, 2, 3, 5, 7, 0, 1];
      const expected = 8;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });
  });

  // Category: Edge cases
  describe('edge cases', () => {
    it('should handle when 0 is the missing number', () => {
      const input = [1];
      const expected = 0;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });

    it('should handle when the missing number is the largest possible value', () => {
      const input = [0];
      const expected = 1;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });

    it('should handle arrays with all numbers present except 0', () => {
      const input = Array.from({ length: 50 }, (_, index) => index + 1);
      const expected = 0;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });
  });

  // Category: Performance tests
  describe('performance', () => {
    it('should handle large arrays efficiently', () => {
      const n = 10000;
      const fullArray = Array.from({ length: n }, (_, index) => index);
      const missingIndex = Math.floor(Math.random() * n);
      const missing = fullArray[missingIndex];
      fullArray.splice(missingIndex, 1);

      const input = fullArray;
      const expected = missing;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });
  });

  // Category: Special cases
  describe('special arrangements', () => {
    it('should handle arrays in descending order', () => {
      const input = [3, 2, 0];
      const expected = 1;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });

    it('should handle arrays with various arrangements', () => {
      const input = [0, 1, 3, 4];
      const expected = 2;
      const result = missingNumber(input);

      expect(result).toBe(expected);
    });
  });
});
