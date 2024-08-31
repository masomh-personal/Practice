import { climbStairs, climbStairsRecursive } from '../70_ClimbingStairs.js';

describe('Climbing Stairs', () => {
  const testCases = [
    { n: 1, expected: 1 },
    { n: 2, expected: 2 },
    { n: 3, expected: 3 },
    { n: 4, expected: 5 },
    { n: 5, expected: 8 },
    { n: 10, expected: 89 },
    { n: 20, expected: 10_946 },
    { n: 30, expected: 1_346_269 },
    { n: 35, expected: 14_930_352 },
    { n: 40, expected: 165_580_141 },
    { n: 45, expected: 1_836_311_903 },
  ];

  testCases.forEach(({ n, expected }) => {
    it(`should return ${expected} for n = ${n} using climbStairs`, () => {
      expect(climbStairs(n)).toBe(expected);
    });

    it(`should return ${expected} for n = ${n} using climbStairsRecursive`, () => {
      expect(climbStairsRecursive(n)).toBe(expected);
    });
  });
});
