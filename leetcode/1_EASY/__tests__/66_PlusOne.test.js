import { plusOne, plusOneV2, plusOneRecursive } from '../66_PlusOne.js';

describe('Leetcode #66: Plus One', () => {
  const testCases = [
    { input: [1, 2, 3], expected: [1, 2, 4], description: 'Simple case' },
    { input: [4, 3, 2, 1], expected: [4, 3, 2, 2], description: 'Regular increment' },
    { input: [0], expected: [1], description: 'Single digit zero' },
    { input: [9], expected: [1, 0], description: 'Single digit with carry' },
    { input: [9, 9], expected: [1, 0, 0], description: 'Multiple digits with carry' },
    { input: [8, 9, 9, 9], expected: [9, 0, 0, 0], description: 'Large carry case' },
    { input: [9, 8, 9], expected: [9, 9, 0], description: 'Mixed carry' },
    { input: [1, 0, 0, 0], expected: [1, 0, 0, 1], description: 'Leading zeros after carry' },
    {
      input: new Array(1000).fill(9),
      expected: [1, ...new Array(1000).fill(0)],
      description: 'Handles very large number represented as an array of 1000 nines',
    },
  ];

  const implementations = [
    { name: 'plusOne', func: plusOne },
    { name: 'plusOneV2', func: plusOneV2 },
    { name: 'plusOneRecursive', func: plusOneRecursive },
  ];

  implementations.forEach(({ name, func }) => {
    describe(`${name}`, () => {
      testCases.forEach(({ input, expected, description }) => {
        it(`should return ${JSON.stringify(expected)} for input ${JSON.stringify(input)} (${description})`, () => {
          const result = func([...input]); // Use a copy of the input to avoid mutation
          expect(result).toEqual(expected);
        });
      });
    });
  });
});
