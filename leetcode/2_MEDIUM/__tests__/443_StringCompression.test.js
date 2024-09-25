import { compress, compressNaive } from '../443_StringCompression.js'; // replace './yourFileName' with the actual file path

// Test cases for both compress and compressNaive
describe('String Compression - Optimized and Naive Functions', () => {
  // Optimized function tests
  describe('compress (Optimized)', () => {
    it('should compress the array ["a","a","b","b","c","c","c"] correctly', () => {
      const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
      const result = compress(chars);
      expect(result).toBe(6); // New length of compressed array
      expect(chars.slice(0, result)).toEqual(['a', '2', 'b', '2', 'c', '3']);
    });

    it('should return 1 for the array ["a"] with no compression needed', () => {
      const chars = ['a'];
      const result = compress(chars);
      expect(result).toBe(1);
      expect(chars.slice(0, result)).toEqual(['a']);
    });

    it('should compress the array ["a","b","b","b","b","b","b","b","b","b","b","b","b"] correctly', () => {
      const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
      const result = compress(chars);
      expect(result).toBe(4); // New length of compressed array
      expect(chars.slice(0, result)).toEqual(['a', 'b', '1', '2']);
    });

    it('should compress the array ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "b"] correctly', () => {
      const chars = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b'];
      const result = compress(chars);
      expect(result).toBe(4);
      expect(chars.slice(0, result)).toEqual(['a', '1', '0', 'b']);
    });

    it('should handle large groups correctly', () => {
      const chars = ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', 'c'];
      const result = compress(chars);
      expect(result).toBe(6);
      expect(chars.slice(0, result)).toEqual(['a', '4', 'b', '4', 'c', '3']);
    });
  });

  // Naive function tests
  describe('compressNaive (Naive)', () => {
    it('should compress the array ["a","a","b","b","c","c","c"] correctly', () => {
      const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
      const result = compressNaive(chars);
      expect(result).toBe(6); // New length of the "compressed" array
      // Naive version won't modify the array in place, so we can't check it directly.
    });

    it('should return 1 for the array ["a"] with no compression needed', () => {
      const chars = ['a'];
      const result = compressNaive(chars);
      expect(result).toBe(1);
    });

    it('should compress the array ["a","b","b","b","b","b","b","b","b","b","b","b","b"] correctly', () => {
      const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
      const result = compressNaive(chars);
      expect(result).toBe(4); // New length of the "compressed" array
    });

    it('should compress the array ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "b"] correctly', () => {
      const chars = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b'];
      const result = compressNaive(chars);
      expect(result).toBe(4);
    });

    it('should handle large groups correctly', () => {
      const chars = ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', 'c'];
      const result = compressNaive(chars);
      expect(result).toBe(6);
    });
  });
});
