import { lengthOfLastWord, lengthOfLastWordNaive } from '../58_LengthLastWord.js'; // Adjust the import based on your file name

// Helper function to test both implementations
const testFunction = (func, description) => {
  describe(description, () => {
    it('should return 5 for the string "Hello World"', () => {
      expect(func('Hello World')).toBe(5);
    });

    it('should return 4 for the string "Test case"', () => {
      expect(func('Test case')).toBe(4);
    });

    it('should return 0 for an empty string ""', () => {
      expect(func('')).toBe(0);
    });

    it('should return 0 for a string of only spaces "    "', () => {
      expect(func('    ')).toBe(0);
    });

    it('should return 1 for a single letter "a"', () => {
      expect(func('a')).toBe(1);
    });

    it('should return 0 for a single space " "', () => {
      expect(func(' ')).toBe(0);
    });

    it('should return 1 for a string "a "', () => {
      expect(func('a ')).toBe(1);
    });

    it('should return the correct length for a string with trailing spaces "test   "', () => {
      expect(func('test   ')).toBe(4);
    });

    it('should return the correct length for a string with multiple spaces between words "a quick   brown fox   "', () => {
      expect(func('a quick   brown fox   ')).toBe(3);
    });

    it('should return the correct length for a very long string', () => {
      const longString = 'a '.repeat(100_000) + 'longword';
      expect(func(longString)).toBe(8); // The last word 'longword' is 8 characters
    });
  });
};

// Testing both implementations with the same test cases
testFunction(lengthOfLastWord, 'Testing lengthOfLastWord implementation');
testFunction(lengthOfLastWordNaive, 'Testing lengthOfLastWordNaive implementation');
