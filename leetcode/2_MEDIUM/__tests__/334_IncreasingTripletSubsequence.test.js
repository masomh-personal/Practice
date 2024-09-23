import { increasingTriplet } from '../334_IncreasingTripletSubsequence.js'; // Replace with the actual path to your solution file

describe('increasingTriplet', () => {
  it('should return true for input [1, 2, 3, 4, 5]', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(increasingTriplet(nums)).toBe(true);
  });

  it('should return false for input [6,7,1,2]', () => {
    const nums = [6, 7, 1, 2];
    expect(increasingTriplet(nums)).toBe(false);
  });

  it('should return false for input [5, 4, 3, 2, 1]', () => {
    const nums = [5, 4, 3, 2, 1];
    expect(increasingTriplet(nums)).toBe(false);
  });

  it('should return true for input [2, 1, 5, 0, 4, 6]', () => {
    const nums = [2, 1, 5, 0, 4, 6];
    expect(increasingTriplet(nums)).toBe(true);
  });

  it('should return false for input [2, 4, 3, 1]', () => {
    const nums = [2, 4, 3, 1];
    expect(increasingTriplet(nums)).toBe(false);
  });

  it('should return false for input with only two elements [1, 2]', () => {
    const nums = [1, 2];
    expect(increasingTriplet(nums)).toBe(false); // Not enough elements for a triplet
  });

  it('should return false for input with negative numbers [-5, -4, -3]', () => {
    const nums = [-5, -4, -3];
    expect(increasingTriplet(nums)).toBe(true); // Triplet exists with negative numbers
  });

  it('should handle large input efficiently', () => {
    const nums = Array.from({ length: 1e5 }, (_, i) => i + 1); // Large increasing sequence
    expect(increasingTriplet(nums)).toBe(true);
  });

  it('should return false for input [1,1,1,1,1]', () => {
    const nums = [1, 1, 1, 1, 1];
    expect(increasingTriplet(nums)).toBe(false); // No valid triplet in identical elements
  });
});
