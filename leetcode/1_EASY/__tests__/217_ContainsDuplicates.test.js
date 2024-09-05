import { containsDuplicate } from '../217_ContainsDuplicates.js'; // Replace with your actual file name

describe('containsDuplicate', () => {
  it('should return false for an empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it('should return false for an array with one element', () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  it('should return false for an array with all unique elements', () => {
    expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false);
  });

  it('should return true for an array with duplicate elements', () => {
    expect(containsDuplicate([1, 2, 3, 4, 1])).toBe(true);
    expect(containsDuplicate([5, 4, 3, 2, 2])).toBe(true);
  });

  it('should handle large arrays efficiently', () => {
    const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i);
    expect(containsDuplicate([...largeArray, 1])).toBe(true);
  });

  it('should return true for an array with multiple duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 2, 3])).toBe(true);
  });

  it('should return false for an array with all negative unique elements', () => {
    expect(containsDuplicate([-1, -2, -3, -4, -5])).toBe(false);
  });

  it('should return true for an array with negative duplicate elements', () => {
    expect(containsDuplicate([-1, -2, -3, -4, -1])).toBe(true);
  });
});
