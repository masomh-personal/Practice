import { uniqueOccurrences } from '../1207_UniqueNumberOfOccurrences.js';

describe('uniqueOccurrences', () => {
  it('should return true when all occurrences are unique', () => {
    const arr = [1, 2, 2, 1, 1, 3];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(true);
  });

  it('should return false when occurrences are not unique', () => {
    const arr = [1, 2];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(false);
  });

  it('should return true for a complex case with negative numbers and unique occurrences', () => {
    const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(true);
  });

  it('should return true for an array with one element', () => {
    const arr = [100];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(true);
  });

  it('should return false for an array with two elements having the same number of occurrences', () => {
    const arr = [1, 1, 2, 2];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(false);
  });

  it('should handle an empty array (though not part of constraints)', () => {
    const arr = [];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(true);
  });

  it('should return false for an array with no duplicates but the same number of occurrences', () => {
    const arr = [1, 2, 3, 4];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(false); // Each element appears exactly once, so occurrences are not unique
  });

  it('should return false when all numbers have the same number of occurrences', () => {
    const arr = [2, 2, 3, 3, 4, 4];
    const result = uniqueOccurrences(arr);
    expect(result).toBe(false);
  });
});
