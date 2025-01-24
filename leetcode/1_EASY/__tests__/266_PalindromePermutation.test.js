import { canPermutePalindrome } from '../266_PalindromePermutation.js';

// Leetcode #266: Palindrome Permutation
describe('Leetcode #266: Palindrome Permutation', () => {
  describe('Valid palindrome permutations', () => {
    it('should return true for "aabb"', () => {
      const result = canPermutePalindrome('aabb'); // Replace with your function name
      expect(result).toBe(true);
    });

    it('should return true for "carerac"', () => {
      const result = canPermutePalindrome('carerac'); // Replace with your function name
      expect(result).toBe(true);
    });

    it('should return true for an empty string', () => {
      const result = canPermutePalindrome(''); // Replace with your function name
      expect(result).toBe(true);
    });

    it('should return true for a single character string "a"', () => {
      const result = canPermutePalindrome('a'); // Replace with your function name
      expect(result).toBe(true);
    });
  });

  describe('Invalid palindrome permutations', () => {
    it('should return false for "abc"', () => {
      const result = canPermutePalindrome('abc'); // Replace with your function name
      expect(result).toBe(false);
    });
  });
});
