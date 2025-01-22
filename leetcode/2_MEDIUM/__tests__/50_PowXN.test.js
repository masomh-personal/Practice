import { myPowCore, myPow, myPowNaive, myPowRecursive } from '../50_PowXN.js';

// Leetcode #50: Pow(x, n)

describe('Leetcode #50: Pow(x, n)', () => {
  const testCases = [
    {
      description: 'Should return 1 for any base when the exponent is 0',
      input: { x: 2.0, n: 0 },
      expected: 1,
    },
    {
      description: 'Should handle positive exponents',
      input: { x: 2.0, n: 10 },
      expected: 1024.0,
    },
    {
      description: 'Should handle negative exponents',
      input: { x: 2.0, n: -2 },
      expected: 0.25,
    },
    {
      description: 'Should handle fractional bases',
      input: { x: 0.5, n: 2 },
      expected: 0.25,
    },
    {
      description: 'Should return the base itself when the exponent is 1',
      input: { x: 2.0, n: 1 },
      expected: 2.0,
    },
    {
      description: 'Should handle negative fractional bases with even exponents',
      input: { x: -2.0, n: 2 },
      expected: 4.0,
    },
    {
      description: 'Should handle negative fractional bases with odd exponents',
      input: { x: -2.0, n: 3 },
      expected: -8.0,
    },
  ];

  describe('myPowCore (Using Core JS - ** Operator)', () => {
    testCases.forEach(({ description, input: { x, n }, expected }) => {
      it(description, () => {
        const result = myPowCore(x, n);
        expect(result).toBeCloseTo(expected, 5);
      });
    });
  });

  describe('myPow (Exponentiation by Squaring)', () => {
    testCases.forEach(({ description, input: { x, n }, expected }) => {
      it(description, () => {
        const result = myPow(x, n);
        expect(result).toBeCloseTo(expected, 5);
      });
    });
  });

  describe('myPowNaive (Naive Loop Implementation)', () => {
    testCases.forEach(({ description, input: { x, n }, expected }) => {
      it(description, () => {
        const result = myPowNaive(x, n);
        expect(result).toBeCloseTo(expected, 5);
      });
    });
  });

  describe('myPowRecursive (Recursive Exponentiation by Squaring))', () => {
    testCases.forEach(({ description, input: { x, n }, expected }) => {
      it(description, () => {
        const result = myPowRecursive(x, n);
        expect(result).toBeCloseTo(expected, 5);
      });
    });
  });
});
