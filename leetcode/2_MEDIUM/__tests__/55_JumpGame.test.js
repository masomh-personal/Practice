import { canJump, canJumpForwardGreedy, canJumpGreedy } from '../55_JumpGame.js';

describe('Leetcode #55: Jump Game', () => {
  const testCases = [
    { input: [2, 3, 1, 1, 4], expected: true }, // Can reach the last index
    { input: [3, 2, 1, 0, 4], expected: false }, // Stuck at index 3
    { input: [0], expected: true }, // Single element, already at the last index
    { input: [2, 0, 0], expected: true }, // Can reach the last index
    { input: [1, 1, 1, 1, 1], expected: true }, // Incremental steps reaching the end
    { input: [1, 2, 3], expected: true }, // Can jump forward progressively
    { input: [1, 0, 1, 0], expected: false }, // Gets stuck at index 1
    { input: [0, 2, 3], expected: false }, // Cannot move from index 0
    { input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0], expected: false }, // Large initial jump but gets stuck
    { input: [1, 2, 0, 0, 3, 4], expected: false }, // Stuck at index 3
    { input: [1, 1, 0, 1], expected: false }, // Trapped at index 2
    { input: [4, 2, 0, 0, 1, 0], expected: true }, // Can jump past zeros
    { input: [2, 5, 0, 0], expected: true }, // Can jump past zeros
  ];

  describe('Greedy Backward Approach (optimized)', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${JSON.stringify(input)}`, () => {
        const result = canJumpGreedy(input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Greedy Forward Approach (optimized)', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${JSON.stringify(input)}`, () => {
        const result = canJumpForwardGreedy(input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('True Dynamic Programming (Bottom-Up: intuitive, naive)', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${JSON.stringify(input)}`, () => {
        const result = canJump(input);
        expect(result).toBe(expected);
      });
    });
  });
});
