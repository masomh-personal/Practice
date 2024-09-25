import { moveZeroes, moveZeroesV2 } from '../283_MoveZeroes.js';

describe('moveZeroes and moveZeroesV2', () => {
  const testCases = [
    { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
    { input: [0], expected: [0] },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
    { input: [0, 0, 0, 0], expected: [0, 0, 0, 0] },
    { input: [1, 2, 3, 0, 0], expected: [1, 2, 3, 0, 0] },
    { input: [], expected: [] },
    { input: [5], expected: [5] },
    { input: [-1, 0, 3, 0, 12], expected: [-1, 3, 12, 0, 0] },
    { input: [0, 0, 1, 0, 3, 12, 0, 0, 5, 6, 0], expected: [1, 3, 12, 5, 6, 0, 0, 0, 0, 0, 0] },
  ];

  // Run the same test cases for both moveZeroes and moveZeroesV2
  [moveZeroes, moveZeroesV2].forEach((moveFn) => {
    describe(moveFn.name, () => {
      testCases.forEach(({ input, expected }, index) => {
        it(`Test case #${index + 1}`, () => {
          const nums = [...input]; // Copy the array to avoid modifying the original input
          moveFn(nums);
          expect(nums).toEqual(expected);
        });
      });
    });
  });
});
