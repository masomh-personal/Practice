import { minimumBoxes, minimumBoxesBucketSort } from '../3074_AppleRedistributionIntoBoxes.js';

describe('Apple Redistribution into Boxes', () => {
  // Define test cases in an array for reuse
  const testCases = [
    {
      description: 'Basic example with 2 boxes needed',
      apple: [1, 3, 2],
      capacity: [4, 3, 1, 5, 2],
      expected: 2,
    },
    {
      description: 'Basic example with all boxes needed',
      apple: [5, 5, 5],
      capacity: [2, 4, 2, 7],
      expected: 4,
    },
    {
      description: 'Edge case: Minimum input size',
      apple: [1],
      capacity: [1],
      expected: 1,
    },
    {
      description: 'Edge case: Single large apple pack',
      apple: [50],
      capacity: [50],
      expected: 1,
    },
    {
      description: 'Edge case: Single apple pack, multiple boxes',
      apple: [50],
      capacity: [25, 25, 25, 25],
      expected: 2,
    },
    {
      description: 'General case: Multiple apple packs with varying sizes',
      apple: [10, 15, 20],
      capacity: [15, 15, 15, 15],
      expected: 3,
    },
    {
      description: 'General case: One box per apple pack',
      apple: [10, 10, 10, 10, 10],
      capacity: [10, 10, 10, 10, 10],
      expected: 5,
    },
    {
      description: 'Uneven distribution of apples',
      apple: [10, 20, 30],
      capacity: [40, 10, 10, 5],
      expected: 3,
    },
    {
      description: 'Edge case: Large capacities but minimal apples',
      apple: [1, 1, 1],
      capacity: [10, 10, 10],
      expected: 1,
    },
    {
      description: 'Complex case: All apple packs split across boxes',
      apple: [5, 5, 5, 5, 5],
      capacity: [5, 5, 5, 5, 5, 5],
      expected: 5,
    },
  ];

  // Implementations to test
  const implementations = [
    { name: 'minimumBoxes (Sorting Solution)', func: minimumBoxes },
    { name: 'minimumBoxesBucketSort (Bucket Sort Solution)', func: minimumBoxesBucketSort },
  ];

  implementations.forEach(({ name, func }) => {
    describe(name, () => {
      testCases.forEach(({ description, apple, capacity, expected }) => {
        it(description, () => {
          const result = func(apple, capacity);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
