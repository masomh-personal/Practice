import { score as scrabbleScore } from '../ScrabbleScore.js';

describe('Exercism: Scrabble Score', () => {
  describe('Basic letter scoring', () => {
    it('should score a single letter correctly', () => {
      const result = scrabbleScore('A');
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should score a high-value letter correctly', () => {
      const result = scrabbleScore('Z');
      const expected = 10;
      expect(result).toBe(expected);
    });
  });

  describe('Word scoring', () => {
    it('should score a short word correctly', () => {
      const result = scrabbleScore('QUIZ');
      const expected = 22;
      expect(result).toBe(expected);
    });

    it('should score a mixed-case word correctly', () => {
      const result = scrabbleScore('cAbBaGe');
      const expected = 14;
      expect(result).toBe(expected);
    });

    it('should score a single lowercase letter correctly', () => {
      const result = scrabbleScore('b');
      const expected = 3;
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('should return 0 for an empty string', () => {
      const result = scrabbleScore('');
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should return 0 for null input', () => {
      const result = scrabbleScore(null);
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should return 0 for undefined input', () => {
      const result = scrabbleScore(undefined);
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should handle long words correctly', () => {
      const result = scrabbleScore('supercalifragilisticexpialidocious');
      const expected = 56; // Precomputed sum
      expect(result).toBe(expected);
    });

    it('should correctly handle all letters in the alphabet', () => {
      const result = scrabbleScore('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      const expected = 87; // Precomputed sum
      expect(result).toBe(expected);
    });
  });
});
