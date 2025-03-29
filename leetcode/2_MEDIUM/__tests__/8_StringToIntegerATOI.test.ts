import { myAtoi } from '../8_StringToIntegerATOI';

describe('LeetCode #8: String to Integer (atoi)', () => {
  describe('Basic functionality', () => {
    it('converts a simple positive number', () => {
      const input = '42';
      const expected = 42;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('converts a negative number', () => {
      const input = '-42';
      const expected = -42;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles leading whitespace', () => {
      const input = '   -42';
      const expected = -42;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('stops at non-digit characters', () => {
      const input = '4193 with words';
      const expected = 4193;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('returns 0 for non-numeric string', () => {
      const input = 'words and 987';
      const expected = 0;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('clamps to INT_MIN', () => {
      const input = '-91283472332';
      const expected = -2147483648; // INT_MIN (-2^31)
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('clamps to INT_MAX', () => {
      const input = '2147483648';
      const expected = 2147483647; // INT_MAX (2^31 - 1)
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });
  });

  describe('Special cases', () => {
    it('handles plus sign', () => {
      const input = '+42';
      const expected = 42;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles empty string', () => {
      const input = '';
      const expected = 0;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles only whitespace', () => {
      const input = '   ';
      const expected = 0;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles decimal point (.1)', () => {
      const input = '.1';
      const expected = 0; // Should only return the integer part, and stops at '.'
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });
  });

  describe('Additional test cases', () => {
    it('handles multiple signs', () => {
      const input = '+-12';
      const expected = 0; // Second sign invalidates the number
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles sign followed by non-digit', () => {
      const input = '+abc';
      const expected = 0; // No digits after sign
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles large number close to INT_MAX', () => {
      const input = '2147483647'; // Exactly INT_MAX
      const expected = 2147483647;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles large number close to INT_MIN', () => {
      const input = '-2147483648'; // Exactly INT_MIN
      const expected = -2147483648;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles zero', () => {
      const input = '0';
      const expected = 0;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles leading zeros', () => {
      const input = '00000123';
      const expected = 123;
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles digits followed by sign', () => {
      const input = '123-';
      const expected = 123; // Should stop at the sign
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles very long sequence of digits', () => {
      const input = '9'.repeat(100);
      const expected = 2147483647; // Should be clamped to INT_MAX
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });
  });

  describe('Stress tests', () => {
    it('handles large numbers at boundary conditions', () => {
      const input = '2147483646';
      const expected = 2147483646; // One less than INT_MAX
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles alternating characters', () => {
      const input = '1a2b3c4d5e';
      const expected = 1; // Should stop at first non-digit
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });

    it('handles complex beginning', () => {
      const input = '  \n\t  -42';
      const expected = -42; // Handles various whitespace
      const result = myAtoi(input);
      expect(result).toBe(expected);
    });
  });
});
