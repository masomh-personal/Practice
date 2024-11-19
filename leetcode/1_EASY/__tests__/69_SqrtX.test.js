import { mySqrt, mySqrtNaive } from '../69_SqrtX.js';

describe('Square Root Functions', () => {
  const testCases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 3, expected: 1 },
    { input: 4, expected: 2 },
    { input: 8, expected: 2 },
    { input: 9, expected: 3 },
    { input: 10, expected: 3 },
    { input: 15, expected: 3 },
    { input: 16, expected: 4 },
    { input: 2147395600, expected: 46340 }, // Large perfect square
    { input: 2147483647, expected: 46340 }, // Large non-perfect square
  ];

  describe('mySqrt (Binary Search)', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${input}`, () => {
        const result = mySqrt(input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('mySqrtNaive (Iterative Naive)', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${input}`, () => {
        const result = mySqrtNaive(input);
        expect(result).toBe(expected);
      });
    });
  });
});
