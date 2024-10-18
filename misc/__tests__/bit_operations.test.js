import {
  hammingWeight,
  hammingWeightBKA,
  hammingWeightNaive,
  reverseBitsNaive,
  reverseBits,
  countBits,
  countBitsNaive,
} from '../bit_operations.js';

// Test for hammingWeight, hammingWeightBKA, and hammingWeightNaive
describe('hammingWeight', () => {
  const testCases = [
    { input: 11, expected: 3 }, // 1011 -> three 1's
    { input: 128, expected: 1 }, // 10000000 -> one 1
    { input: 4_453_456, expected: 10 }, // larger numbers
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for input ${input}`, () => {
      expect(hammingWeight(input)).toBe(expected);
      expect(hammingWeightBKA(input)).toBe(expected);
      expect(hammingWeightNaive(input)).toBe(expected);
    });
  });
});

// Test for countBits and countBitsNaive
describe('countBits', () => {
  const testCases = [
    { input: 2, expected: [0, 1, 1] }, // 0 -> 0, 1 -> 1, 2 -> 10
    { input: 5, expected: [0, 1, 1, 2, 1, 2] }, // [0, 1, 1, 2, 1, 2] from 0 to 5
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for input ${input}`, () => {
      expect(countBits(input)).toEqual(expected);
      expect(countBitsNaive(input)).toEqual(expected);
    });
  });
});

// Test for reverseBits and reverseBitsNaive
describe('reverseBits', () => {
  const testCases = [
    { input: 43261596, expected: 964176192 }, // 00000010100101000001111010011100 -> 00111001011110000010100101000000
    { input: 4294967293, expected: 3221225471 }, // 11111111111111111111111111111101 -> 10111111111111111111111111111111
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for input ${input}`, () => {
      expect(reverseBits(input)).toBe(expected);
      expect(reverseBitsNaive(input)).toBe(expected);
    });
  });
});
