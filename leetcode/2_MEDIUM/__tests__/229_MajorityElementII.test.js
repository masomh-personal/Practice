import { majorityElement, majorityElementMap } from '../229_MajorityElementII.js';

describe('Leetcode #229: Majority Element II', () => {
  // Test cases
  const testCases = [
    { input: [4, 2, 1, 1], expected: [1] },
    { input: [3, 2, 3], expected: [3] },
    { input: [1], expected: [1] },
    { input: [1, 2], expected: [1, 2] },
    { input: [2, 2, 1, 1, 1, 2, 2], expected: [2, 1] },
    { input: [4, 4, 2, 4, 3, 4, 3, 2, 2, 3, 3], expected: [3, 4] },
    { input: [0, 0, 0], expected: [0] },
    { input: [1, 2, 3, 4, 5, 6], expected: [] },
    { input: [1, 1, 1, 2, 2, 2, 3, 3], expected: [1, 2] },
  ];

  describe('Boyer-Moore Voting', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${JSON.stringify(expected)} for input ${JSON.stringify(input)}`, () => {
        const result = majorityElement(input);
        expect(new Set(result)).toEqual(new Set(expected));
      });
    });
  });

  describe('Hashmap Approach', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${JSON.stringify(expected)} for input ${JSON.stringify(input)}`, () => {
        const result = majorityElementMap(input);
        expect(new Set(result)).toEqual(new Set(expected));
      });
    });
  });

  describe('Performance Benchmarking', () => {
    const performanceTestCases = [
      {
        input: Array(50_000).fill(1).concat(Array(25_000).fill(2)).concat(Array(25_000).fill(3)),
        description: 'Large input with clear majority elements',
      },
      {
        input: Array(50_000)
          .fill(1)
          .map((_, i) => i % 3),
        description: 'Uniformly distributed elements with no clear majority',
      },
      {
        input: Array(100_000).fill(5).concat(Array(50_000).fill(6)),
        description: 'One strong majority element with a second contender',
      },
      {
        input: [...Array(10_000).keys()],
        description: 'All unique elements',
      },
    ];

    performanceTestCases.forEach(({ input, description }) => {
      it(`Benchmark Boyer-Moore: ${description}`, () => {
        console.time(`Boyer-Moore - ${description}`);
        majorityElement(input);
        console.timeEnd(`Boyer-Moore - ${description}`);
      });

      it(`Benchmark Hashmap: ${description}`, () => {
        console.time(`Hashmap - ${description}`);
        majorityElementMap(input);
        console.timeEnd(`Hashmap - ${description}`);
      });
    });
  });
});
