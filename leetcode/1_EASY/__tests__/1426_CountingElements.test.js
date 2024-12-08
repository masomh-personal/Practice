import { countElements } from '../1426_CountingElements.js';

describe('countElements', () => {
  it('should return 0 for an empty array', () => {
    const result = countElements([]);
    const expected = 0;
    expect(result).toBe(expected);
  });

  it('should return 0 when no element satisfies the condition', () => {
    const result = countElements([1, 1, 1]);
    const expected = 0;
    expect(result).toBe(expected);
  });

  it('should count elements correctly when all satisfy the condition', () => {
    const result = countElements([1, 2, 3]);
    const expected = 2; // 1 is followed by 2, and 2 is followed by 3
    expect(result).toBe(expected);
  });

  it('should handle duplicate elements correctly', () => {
    const result = countElements([1, 2, 2, 3]);
    const expected = 3; // 1 is followed by 2 (counted once), both 2s are followed by 3
    expect(result).toBe(expected);
  });

  it('should handle arrays with mixed positive and negative numbers', () => {
    const result = countElements([-3, -2, -1, 0, 1]);
    const expected = 4; // -3 is followed by -2, -2 by -1, -1 by 0, and 0 by 1
    expect(result).toBe(expected);
  });

  it('should work with an array of one element', () => {
    const result = countElements([42]);
    const expected = 0; // No element satisfies the condition
    expect(result).toBe(expected);
  });

  it('should work with an array of all consecutive numbers', () => {
    const result = countElements([10, 11, 12, 13, 14]);
    const expected = 4; // Every element except the last satisfies the condition
    expect(result).toBe(expected);
  });

  it('should handle arrays with large numbers', () => {
    const result = countElements([1_000_000, 999_999, 1_000_001]);
    const expected = 2; // 999_999 is followed by 1_000_000, and 1_000_000 is followed by 1_000_001
    expect(result).toBe(expected);
  });

  it('should handle large arrays efficiently', () => {
    const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i);
    const result = countElements(largeArray);
    const expected = 999_999; // Every element except the last satisfies the condition
    expect(result).toBe(expected);
  });

  it('should handle an unsorted array with duplicates', () => {
    const result = countElements([3, 3, 2, 1, 4, 4, 4]);
    const expected = 4;
    expect(result).toBe(expected);
  });
});
