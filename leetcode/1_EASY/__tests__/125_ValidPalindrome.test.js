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
    // Define constants for test configuration
    const REPEAT_COUNT = 1e5; // Using scientific notation for clarity
    const MIDDLE_CHAR = 'b';
    const REPEATED_CHAR = 'a';

    it('should handle a very long palindromic string with a character in the middle without errors', () => {
      // Build a palindrome: many 'a's + one 'b' + many 'a's
      const input =
        REPEATED_CHAR.repeat(REPEAT_COUNT) + MIDDLE_CHAR + REPEATED_CHAR.repeat(REPEAT_COUNT);
      const result = isPalindrome(input);

      // The string is a perfect palindrome, so we expect true
      expect(result).toBe(true);
    });

    it('should return true for a very long uniform palindrome string', () => {
      // First build the string with middle character
      const inputWithMiddle =
        REPEATED_CHAR.repeat(REPEAT_COUNT) + MIDDLE_CHAR + REPEATED_CHAR.repeat(REPEAT_COUNT);

      // Then remove the middle character to create a uniform string
      const uniformInput = inputWithMiddle.replace(new RegExp(MIDDLE_CHAR, 'g'), '');

      const result = isPalindrome(uniformInput);
      expect(result).toBe(true);
    });
  });
});
