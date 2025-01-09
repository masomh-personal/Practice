import { majorityElement, majorityElementNaive } from '../169_MajorityElement.js';

describe('Leetcode #169: Majority Element', () => {
  const testCases = [
    { description: 'Simple case with majority element 3', input: [3, 2, 3], expected: 3 },
    {
      description: 'Majority element 2 appears more than half',
      input: [2, 2, 1, 1, 1, 2, 2],
      expected: 2,
    },
    { description: 'Single element array should return the element', input: [1], expected: 1 },
    {
      description: 'Case with multiple elements, majority element is 6',
      input: [6, 6, 6, 7, 7],
      expected: 6,
    },
    {
      description: 'Case with multiple elements, majority element is 5',
      input: [4, 5, 4, 4, 5, 5, 5, 5],
      expected: 5,
    },
    {
      description: 'Case where 10 is the majority',
      input: [10, 10, 10, 10, 2, 2, 2],
      expected: 10,
    },
    { description: 'Edge case with nums.length of size 2', input: [1, 1], expected: 1 },
    {
      description: 'Performance test with large array of majority element 7',
      input: new Array(10_000).fill(7),
      expected: 7,
    },
  ];

  describe('Optimized Approach', () => {
    testCases.forEach(({ description, input, expected }) => {
      it(`should return ${expected} - ${description}`, () => {
        const result = majorityElement(input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Brute Force Approach', () => {
    testCases.forEach(({ description, input, expected }) => {
      it(`should return ${expected} - ${description}`, () => {
        const result = majorityElementNaive(input);
        expect(result).toBe(expected);
      });
    });
  });
});
