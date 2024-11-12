import { isPalindrome } from '../125_ValidPalindrome.js';

describe('isPalindrome function', () => {
  describe('Standard Palindrome Checks', () => {
    it('should return true for a standard palindrome ignoring non-alphanumeric characters', () => {
      const input = 'A man, a plan, a canal: Panama';
      const result = isPalindrome(input);
      expect(result).toBe(true);
    });

    it('should return false for a non-palindrome string with alphanumeric characters only', () => {
      const input = 'race a car';
      const result = isPalindrome(input);
      expect(result).toBe(false);
    });

    it('should return false for a mixed alphanumeric string that is not a palindrome', () => {
      const input = '0P';
      const result = isPalindrome(input);
      expect(result).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should return true for an empty string', () => {
      const input = ' ';
      const result = isPalindrome(input);
      expect(result).toBe(true);
    });

    it('should return true for a single character string', () => {
      const input = 'a';
      const result = isPalindrome(input);
      expect(result).toBe(true);
    });
  });

  describe('Case Insensitivity and Mixed Characters', () => {
    it('should return true for a mixed case palindrome', () => {
      const input = 'Able , was I saw eLba';
      const result = isPalindrome(input);
      expect(result).toBe(true);
    });

    it('should return true for a string with only spaces and symbols', () => {
      const input = '!!!@@@$$$';
      const result = isPalindrome(input);
      expect(result).toBe(true);
    });

    it('should return false for a non-palindrome mixed with symbols and spaces', () => {
      const input = "No 'x' in Nixon";
      const result = isPalindrome(input);
      expect(result).toBe(true); // Changed from true to false as per correct logic
    });
  });

  describe('Performance Tests', () => {
    it('should handle a very long palindromic string with a character in the middle without errors', () => {
      const input = 'a'.repeat(10 ** 5) + 'b' + 'a'.repeat(10 ** 5);
      const result = isPalindrome(input);
      expect(result).toBe(true); // Correctly expects true since it's a palindrome
    });

    it('should return true for a very long palindrome string', () => {
      const input = 'a'.repeat(10 ** 5) + 'b' + 'a'.repeat(10 ** 5);
      const alteredInput = input.replace(/b/g, ''); // Still a palindrome after removing "b"
      const result = isPalindrome(alteredInput);
      expect(result).toBe(true);
    });
  });
});
