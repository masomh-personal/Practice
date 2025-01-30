import { isUgly } from '../263_UglyNumber.js';

describe('Leetcode #263: Ugly Number', () => {
  describe('Valid ugly numbers', () => {
    it('should return true for 6, which is divisible by only 2, 3, and 5', () => {
      const result = isUgly(6);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for 1, as it is considered an ugly number by definition', () => {
      const result = isUgly(1);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for 30, which consists only of factors 2, 3, and 5', () => {
      const result = isUgly(30);
      const expected = true;
      expect(result).toBe(expected);
    });
  });

  describe('Non-ugly numbers', () => {
    it('should return false for 14, which has a prime factor of 7', () => {
      const result = isUgly(14);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return false for 17, which is a prime number not in {2,3,5}', () => {
      const result = isUgly(17);
      const expected = false;
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('should return false for 0, as 0 is not an ugly number', () => {
      const result = isUgly(0);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return false for -6, as negative numbers are not considered ugly', () => {
      const result = isUgly(-6);
      const expected = false;
      expect(result).toBe(expected);
    });
  });
});
