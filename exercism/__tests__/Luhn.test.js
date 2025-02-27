import { valid } from '../Luhn.js';

describe('Exercism: Luhn', () => {
  describe('Invalid Luhn Numbers', () => {
    it('should return false for single digit strings', () => {
      expect(valid('1')).toBe(false);
    });

    it('should return false for a single zero', () => {
      expect(valid('0')).toBe(false);
    });

    it('should return false for invalid Canadian SIN', () => {
      expect(valid('055 444 286')).toBe(false);
    });

    it('should return false for an invalid credit card', () => {
      expect(valid('8273 1232 7352 0569')).toBe(false);
    });

    it('should return false for an invalid long number with an even remainder', () => {
      expect(valid('1 2345 6789 1234 5678 9012')).toBe(false);
    });

    it('should return false for strings with a non-digit at the end', () => {
      expect(valid('059a')).toBe(false);
    });

    it('should return false for strings with punctuation included', () => {
      expect(valid('055-444-285')).toBe(false);
    });

    it('should return false for strings with symbols included', () => {
      expect(valid('055# 444$ 285')).toBe(false);
    });

    it('should return false for single zero with space', () => {
      expect(valid(' 0')).toBe(false);
    });

    it('should return false when using ASCII value for non-doubled non-digit', () => {
      expect(valid('055b 444 285')).toBe(false);
    });

    it('should return false when using ASCII value for doubled non-digit', () => {
      expect(valid(':9')).toBe(false);
    });
  });

  describe('Valid Luhn Numbers', () => {
    it('should return true for a simple valid SIN that remains valid if reversed', () => {
      expect(valid('059')).toBe(true);
    });

    it('should return true for a simple valid SIN that becomes invalid if reversed', () => {
      expect(valid('59')).toBe(true);
    });

    it('should return true for a valid Canadian SIN', () => {
      expect(valid('055 444 285')).toBe(true);
    });

    it('should return true for a valid number with an even number of digits', () => {
      expect(valid('095 245 88')).toBe(true);
    });

    it('should return true for a valid number with an odd number of spaces', () => {
      expect(valid('234 567 891 234')).toBe(true);
    });

    it('should return true for more than a single zero', () => {
      expect(valid('0000 0')).toBe(true);
    });

    it('should return true when input digit 9 is correctly converted to output digit 9', () => {
      expect(valid('091')).toBe(true);
    });
  });
});
