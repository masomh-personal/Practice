import { longestConsecutive } from './128_LongestConsecutiveSequence.js';

describe('longestConsecutive', () => {
  it('returns the length of the longest consecutive sequence when sequence is mixed', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it('returns the correct length for a larger, unsorted array with multiple sequences', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  it('returns 0 for an empty array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it('returns 1 for an array with one element', () => {
    expect(longestConsecutive([5])).toBe(1);
  });

  it('returns 1 for an array where all elements are identical', () => {
    expect(longestConsecutive([1, 1, 1, 1])).toBe(1);
  });

  it('handles arrays with mixed positive and negative numbers', () => {
    expect(longestConsecutive([10, -1, -2, 0, 1, 2, 3, 7, 8, 9])).toBe(6);
  });

  it('returns the length of the longest consecutive sequence with only negative numbers', () => {
    expect(longestConsecutive([-5, -3, -2, -4, -1])).toBe(5);
  });

  it('handles large arrays with non-consecutive elements', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2);
    expect(longestConsecutive(largeArray)).toBe(1);
  });

  it('handles large arrays with consecutive elements', () => {
    const largeConsecutiveArray = Array.from({ length: 10000 }, (_, i) => i);
    expect(longestConsecutive(largeConsecutiveArray)).toBe(10000);
  });
});
