import { canConstruct } from '../383_RansomNote.js';

describe('Ransom Note Tests', () => {
  describe('Naive Implementation', () => {
    it("should return false when ransomNote = 'a' and magazine = 'b'", () => {
      const ransomNote = 'a';
      const magazine = 'b';
      const result = canConstruct(ransomNote, magazine);
      const expected = false;
      expect(result).toBe(expected);
    });

    it("should return false when ransomNote = 'aa' and magazine = 'ab'", () => {
      const ransomNote = 'aa';
      const magazine = 'ab';
      const result = canConstruct(ransomNote, magazine);
      const expected = false;
      expect(result).toBe(expected);
    });

    it("should return true when ransomNote = 'aa' and magazine = 'aab'", () => {
      const ransomNote = 'aa';
      const magazine = 'aab';
      const result = canConstruct(ransomNote, magazine);
      const expected = true;
      expect(result).toBe(expected);
    });

    // we are going to skip this as the leetcode constraints do not allow for any empty strings
    it.skip("should return true for ransomNote = '' and magazine = 'abc'", () => {
      const ransomNote = '';
      const magazine = 'abc';
      const result = canConstruct(ransomNote, magazine);
      const expected = true;
      expect(result).toBe(expected);
    });

    it("should return false for ransomNote = 'abc' and magazine = 'def'", () => {
      const ransomNote = 'abc';
      const magazine = 'def';
      const result = canConstruct(ransomNote, magazine);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return true when ransomNote and magazine are identical', () => {
      const ransomNote = 'abcdefghijklmnopqrstuvwxyz';
      const magazine = 'abcdefghijklmnopqrstuvwxyz';
      const result = canConstruct(ransomNote, magazine);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should handle large inputs with true result', () => {
      const ransomNote = 'a'.repeat(50000);
      const magazine = 'a'.repeat(50000);
      const result = canConstruct(ransomNote, magazine);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should handle large inputs with false result', () => {
      const ransomNote = 'a'.repeat(50000);
      const magazine = 'a'.repeat(49999);
      const result = canConstruct(ransomNote, magazine);
      const expected = false;
      expect(result).toBe(expected);
    });
  });
});
