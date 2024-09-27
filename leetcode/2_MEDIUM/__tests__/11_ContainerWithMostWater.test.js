import { maxArea } from '../11_ContainerWithMostWater.js';

describe('maxArea', () => {
  it('should return the correct area for a general case', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toBe(49);
  });

  it('should return the correct area when all heights are the same', () => {
    const height = [1, 1];
    expect(maxArea(height)).toBe(1);
  });

  it('should return the correct area for the minimum length of height array', () => {
    const height = [1, 2];
    expect(maxArea(height)).toBe(1);
  });

  it('should handle large values in the height array', () => {
    const height = [10000, 10000];
    expect(maxArea(height)).toBe(10000);
  });

  it('should return the correct area for height array with decreasing values', () => {
    const height = [6, 5, 4, 3, 2, 1];
    expect(maxArea(height)).toBe(9);
  });

  it('should return the correct area for height array with increasing values', () => {
    const height = [1, 2, 3, 4, 5, 6];
    expect(maxArea(height)).toBe(9);
  });

  it('should return the correct area when there is a large difference between the smallest and largest values', () => {
    const height = [1, 10_000, 1];
    expect(maxArea(height)).toBe(2);
  });

  it('should return 0 for a height array with all zeros', () => {
    const height = [0, 0, 0, 0, 0];
    expect(maxArea(height)).toBe(0);
  });
});
