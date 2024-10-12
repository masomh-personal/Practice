import { removeStars, removeStarsTwoPointer } from '../2390_RemovingStarsFromAString.js';

describe('Removing Stars from a String', () => {
  describe('Stack Approach', () => {
    it('should return "lecoe" for input "leet**cod*e"', () => {
      const result = removeStars('leet**cod*e');
      expect(result).toBe('lecoe');
    });

    it('should return "e" for input "e"', () => {
      const result = removeStars('e');
      expect(result).toBe('e');
    });

    it('should return empty string for input "*"', () => {
      const result = removeStars('*');
      expect(result).toBe('');
    });

    it('should return an empty string for input "erase*****"', () => {
      const result = removeStars('erase*****');
      expect(result).toBe('');
    });

    it('should return the input string when there are no stars', () => {
      const result = removeStars('hello');
      expect(result).toBe('hello');
    });

    it('should handle input with alternating stars and letters correctly', () => {
      const result = removeStars('a*b*c*d*');
      expect(result).toBe('');
    });

    it('should return an empty string when input has only stars', () => {
      const result = removeStars('*****');
      expect(result).toBe('');
    });

    it('should handle larger input strings efficiently', () => {
      const largeInput = 'a'.repeat(50000) + '*'.repeat(50000);
      const result = removeStars(largeInput);
      expect(result).toBe('');
    });
  });

  describe('Two Pointer Approach', () => {
    it('should return "lecoe" for input "leet**cod*e"', () => {
      const result = removeStarsTwoPointer('leet**cod*e');
      expect(result).toBe('lecoe');
    });

    it('should return "e" for input "e"', () => {
      const result = removeStarsTwoPointer('e');
      expect(result).toBe('e');
    });

    it('should return empty string for input "*"', () => {
      const result = removeStarsTwoPointer('*');
      expect(result).toBe('');
    });

    it('should return an empty string for input "erase*****"', () => {
      const result = removeStarsTwoPointer('erase*****');
      expect(result).toBe('');
    });

    it('should return the input string when there are no stars', () => {
      const result = removeStarsTwoPointer('hello');
      expect(result).toBe('hello');
    });

    it('should handle input with alternating stars and letters correctly', () => {
      const result = removeStarsTwoPointer('a*b*c*d*');
      expect(result).toBe('');
    });

    it('should return an empty string when input has only stars', () => {
      const result = removeStarsTwoPointer('*****');
      expect(result).toBe('');
    });

    it('should handle larger input strings efficiently', () => {
      const largeInput = 'a'.repeat(50000) + '*'.repeat(50000);
      const result = removeStarsTwoPointer(largeInput);
      expect(result).toBe('');
    });
  });
});
