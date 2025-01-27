import { addDigits, addDigitsV2, addDigitsNaive } from '../258_AddDigits.js';

describe('Leetcode #258: Add Digits', () => {
  const testCases = [
    { input: 0, expected: 0, description: 'should return 0 for input 0' },
    { input: 38, expected: 2, description: 'should return 2 for input 38' },
    { input: 12345, expected: 6, description: 'should return 6 for input 12345' },
    { input: 9, expected: 9, description: 'should return 9 for input 9' },
    { input: 10000, expected: 1, description: 'should return 1 for input 10000' },
    {
      input: 2_147_483_647,
      expected: 1,
      description: 'should work for highest int32 bound number (per constraints)',
    },
  ];

  describe('addDigits (Digital Root Formula)', () => {
    testCases.forEach(({ input, expected, description }) => {
      it(description, () => {
        const result = addDigits(input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('addDigitsV2 (Modulo and Integer Division)', () => {
    testCases.forEach(({ input, expected, description }) => {
      it(description, () => {
        const result = addDigitsV2(input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('addDigitsNaive (String Conversion)', () => {
    testCases.forEach(({ input, expected, description }) => {
      it(description, () => {
        const result = addDigitsNaive(input);
        expect(result).toBe(expected);
      });
    });
  });
});
