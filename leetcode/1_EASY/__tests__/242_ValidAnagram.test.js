import { isAnagram } from '../242_ValidAnagram.js';

describe('Leetcode #242: Valid Anagram', () => {
  describe('Positive Cases', () => {
    it('should return true for valid anagrams', () => {
      const result = isAnagram('anagram', 'nagaram');
      expect(result).toBe(true);
    });

    it('should return true for both strings being empty', () => {
      const result = isAnagram('', '');
      expect(result).toBe(true);
    });

    it('should return true for strings with special characters', () => {
      const result = isAnagram('a!b@c', 'c!b@a');
      expect(result).toBe(true);
    });
  });

  describe('Negative Cases', () => {
    it('should return false for strings with different lengths', () => {
      const result = isAnagram('rat', 'car');
      expect(result).toBe(false);
    });

    it('should return false for strings with same characters but different frequencies', () => {
      const result = isAnagram('aabb', 'ab');
      expect(result).toBe(false);
    });

    it('should return false for one string being empty and the other non-empty', () => {
      const result = isAnagram('', 'a');
      expect(result).toBe(false);
    });

    it('should return false for strings with case mismatch', () => {
      const result = isAnagram('anagram', 'Nagaram');
      expect(result).toBe(false);
    });

    it('should return false when the frequency map does not handle decrements correctly', () => {
      const result = isAnagram('aabbcc', 'abccbaaa'); // Extra 'a' in second string
      expect(result).toBe(false);
    });
  });

  // Skipping this (tested and passed)
  describe.skip('Performance Cases', () => {
    it('should handle large strings efficiently', () => {
      const largeStr1 = 'a'.repeat(1_000_000) + 'b'.repeat(1_000_000);
      const largeStr2 = 'b'.repeat(1_000_000) + 'a'.repeat(1_000_000);

      const result = isAnagram(largeStr1, largeStr2);
      expect(result).toBe(true);
    });

    it('should return false for large strings that are not anagrams', () => {
      const largeStr1 = 'a'.repeat(1_000_000) + 'b'.repeat(1_000_000);
      const largeStr2 = 'a'.repeat(1_000_000) + 'b'.repeat(999_999) + 'c';

      const result = isAnagram(largeStr1, largeStr2);
      expect(result).toBe(false);
    });
  });
});
