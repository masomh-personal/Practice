import { characterReplacement } from '../424_LongestRepeatingCharacterReplacement.js';

describe('Longest Repeating Character Replacement', () => {
  describe('General Cases', () => {
    it('should return 4 for input "ABAB" with k=2', () => {
      const s = 'ABAB';
      const k = 2;
      const result = characterReplacement(s, k);
      const expected = 4;
      expect(result).toBe(expected);
    });

    it('should return 4 for input "AABABBA" with k=1', () => {
      const s = 'AABABBA';
      const k = 1;
      const result = characterReplacement(s, k);
      const expected = 4;
      expect(result).toBe(expected);
    });

    it('should return 6 for input "AAAAAA" with k=2', () => {
      const s = 'AAAAAA';
      const k = 2;
      const result = characterReplacement(s, k);
      const expected = 6;
      expect(result).toBe(expected);
    });

    it('should return 2 for input "AB" with k=1', () => {
      const s = 'AB';
      const k = 1;
      const result = characterReplacement(s, k);
      const expected = 2;
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should return 1 for input "A" with k=0', () => {
      const s = 'A';
      const k = 0;
      const result = characterReplacement(s, k);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should return 1 for input "A" with k=1', () => {
      const s = 'A';
      const k = 1;
      const result = characterReplacement(s, k);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should return 5 for input "ABCDE" with k=4', () => {
      const s = 'ABCDE';
      const k = 4;
      const result = characterReplacement(s, k);
      const expected = 5;
      expect(result).toBe(expected);
    });

    it('should return 0 for an empty string', () => {
      const s = '';
      const k = 1;
      const result = characterReplacement(s, k);
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should return 1 for all unique characters with k=0', () => {
      const s = 'ABCDEF';
      const k = 0;
      const result = characterReplacement(s, k);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should return the string length for all same characters with k=0', () => {
      const s = 'AAAAA';
      const k = 0;
      const result = characterReplacement(s, k);
      const expected = 5;
      expect(result).toBe(expected);
    });
  });

  describe('Guard Clause Tests', () => {
    it('should return 0 for an empty string', () => {
      const s = '';
      const k = 1;
      const result = characterReplacement(s, k);
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should return 1 for a single character string, regardless of k', () => {
      const s = 'A';
      const k = 0;
      const result = characterReplacement(s, k);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should return 1 for a single character string with k > 0', () => {
      const s = 'A';
      const k = 5;
      const result = characterReplacement(s, k);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should return the string length when k >= s.length', () => {
      const s = 'ABC';
      const k = 3;
      const result = characterReplacement(s, k);
      const expected = 3;
      expect(result).toBe(expected);
    });

    it('should handle cases with k = 0 correctly', () => {
      const s = 'AABBA';
      const k = 0;
      const result = characterReplacement(s, k);
      const expected = 2; // Longest substring without replacement is "AA" or "BB"
      expect(result).toBe(expected);
    });

    it('should handle a case with no need for replacements', () => {
      const s = 'AAAA';
      const k = 0;
      const result = characterReplacement(s, k);
      const expected = 4; // All characters are already the same
      expect(result).toBe(expected);
    });
  });
});
