import { largestAltitude } from '../1732_FindTheHighestAltitude.js';

describe('largestAltitude', () => {
  it('should return 1 for gain = [-5,1,5,0,-7]', () => {
    const gain = [-5, 1, 5, 0, -7];
    const result = largestAltitude(gain);
    expect(result).toBe(1);
  });

  it('should return 0 for gain = [-4,-3,-2,-1,4,3,2]', () => {
    const gain = [-4, -3, -2, -1, 4, 3, 2];
    const result = largestAltitude(gain);
    expect(result).toBe(0);
  });

  it('should return 0 for gain = [0]', () => {
    const gain = [0];
    const result = largestAltitude(gain);
    expect(result).toBe(0);
  });

  it('should return 3 for gain = [1,1,1]', () => {
    const gain = [1, 1, 1];
    const result = largestAltitude(gain);
    expect(result).toBe(3);
  });

  it('should return 0 for gain = [-1,-1,-1]', () => {
    const gain = [-1, -1, -1];
    const result = largestAltitude(gain);
    expect(result).toBe(0);
  });

  it('should return 100 for gain = [100]', () => {
    const gain = [100];
    const result = largestAltitude(gain);
    expect(result).toBe(100);
  });

  it('should return -50 for gain = [-50]', () => {
    const gain = [-50];
    const result = largestAltitude(gain);
    expect(result).toBe(0); // Even though we lose 50, the highest altitude is still 0 (start point)
  });

  it('should handle a large input with mixed positive and negative values', () => {
    const gain = Array.from({ length: 100 }, (_, i) => (i % 2 === 0 ? i : -i)); // Alternating positive and negative numbers
    const result = largestAltitude(gain);
    expect(result).toBe(49); // The highest altitude will be at 49
  });

  it('should handle an input with all zeros', () => {
    const gain = new Array(100).fill(0);
    const result = largestAltitude(gain);
    expect(result).toBe(0);
  });
});
