import { rob, robRecursive } from '../198_HouseRobber.js'; // Adjust the import based on your file structure

describe('House Robber - Iterative and Recursive Solutions', () => {
  const testCases = [
    { nums: [1, 2, 3, 1], expected: 4, description: 'leetcode: example #1' },
    { nums: [2, 7, 9, 3, 1], expected: 12, description: 'leetcode: example #2' },
    { nums: [1], expected: 1, description: 'Single house' },
    { nums: [1, 2], expected: 2, description: 'Two houses with increasing values' },
    { nums: [2, 1], expected: 2, description: 'Two houses with decreasing values' },
    { nums: [2, 3, 2], expected: 4, description: 'Three houses, max by skipping one' },
    { nums: [1, 2, 3, 1], expected: 4, description: 'Four houses, max by skipping adjacent' },
    { nums: [2, 7, 9, 3, 1], expected: 12, description: 'Five houses with higher middle values' },
    { nums: [10, 5, 15, 10, 20], expected: 45, description: 'Alternate houses have higher values' },
    { nums: [100, 1, 1, 100], expected: 200, description: 'Maximized by robbing first and last house' },
    { nums: [5, 5, 10, 100, 10, 5], expected: 110, description: 'Maximized by skipping middle houses' },
    {
      nums: [400, 0, 0, 400],
      expected: 800,
      description: 'Maximized by robbing first and last house with zeroes in between',
    },
    {
      nums: Array(100).fill(1), // Edge case: 100 houses all with value 1
      expected: 50,
      description: 'Large input with small consistent values',
    },
    {
      nums: Array(100).fill(400), // Edge case: 100 houses all with value 400
      expected: 20_000,
      description: 'Large input with maximum consistent values',
    },
  ];

  testCases.forEach(({ nums, expected, description }) => {
    it(`rob: ${description}`, () => {
      if (expected !== null) {
        expect(rob(nums)).toBe(expected);
      } else {
        console.log(`Test '${description}' produces rob result: ${rob(nums)}`);
      }
    });

    it(`robRecursive: ${description}`, () => {
      if (expected !== null) {
        expect(robRecursive(nums)).toBe(expected);
      } else {
        console.log(`Test '${description}' produces robRecursive result: ${robRecursive(nums)}`);
      }
    });
  });
});
