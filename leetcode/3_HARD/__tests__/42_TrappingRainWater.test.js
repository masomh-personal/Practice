import { trap } from '../42_TrappingRainWater.js';

describe('Leetcode #42: Trapping Rain Water', () => {
  it('Handles empty array', () => {
    const input = [];
    const expected = 0;
    const result = trap(input);
    expect(result).toBe(expected);
  });

  it('Handles array with no trapping water', () => {
    const input = [1, 2, 3, 4];
    const expected = 0;
    const result = trap(input);
    expect(result).toBe(expected);
  });

  it('Handles array with one trapping area', () => {
    const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const expected = 6;
    const result = trap(input);
    expect(result).toBe(expected);
  });

  it('Handles array with multiple trapping areas', () => {
    const input = [4, 2, 0, 3, 2, 5];
    const expected = 9;
    const result = trap(input);
    expect(result).toBe(expected);
  });
});
