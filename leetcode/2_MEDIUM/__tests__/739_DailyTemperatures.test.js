import { dailyTemperatures, dailyTemperaturesNaive } from '../739_DailyTemperatures.js';

const testCases = [
  {
    input: [73, 74, 75, 71, 69, 72, 76, 73],
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
    description: 'a typical case with varying temperatures',
  },
  {
    input: [30, 40, 50, 60],
    expected: [1, 1, 1, 0],
    description: 'strictly increasing temperatures',
  },
  {
    input: [60, 50, 40, 30],
    expected: [0, 0, 0, 0],
    description: 'strictly decreasing temperatures',
  },
  {
    input: [80, 70, 60, 70, 80],
    expected: [0, 3, 1, 1, 0],
    description: 'temperatures decreasing, then increasing',
  },
  {
    input: [80],
    expected: [0],
    description: 'a single temperature',
  },
];

const DESCRIPTION_TEMPLATE = 'should return correct results for';

// PERFORMANCE testing
const largeArray = Array.from({ length: 10_000 }, (_, i) => i % 100); // Cyclic pattern: [0, 1, 2, ..., 99, 0, 1, 2, ...]
const largeExpected = Array.from({ length: 10_000 }, (_, i) => {
  for (let j = i + 1; j < largeArray.length; j++) {
    if (largeArray[j] > largeArray[i]) {
      return j - i; // Number of days until a warmer day
    }
  }
  return 0; // No warmer day
});

testCases.push({
  input: largeArray,
  expected: largeExpected,
  description: 'a large array with a cyclic pattern for performance testing',
});

describe('Leetcode #739: Daily Temperatures', () => {
  describe('Optimized Solution', () => {
    testCases.forEach(({ input, expected, description }) => {
      it(`${DESCRIPTION_TEMPLATE} ${description}`, () => {
        const result = dailyTemperatures(input);
        expect(result).toEqual(expected);
      });
    });
  });

  describe('Naive Solution', () => {
    testCases.forEach(({ input, expected, description }) => {
      it(`${DESCRIPTION_TEMPLATE} ${description}`, () => {
        const result = dailyTemperaturesNaive(input);
        expect(result).toEqual(expected);
      });
    });
  });
});
