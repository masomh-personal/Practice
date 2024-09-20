import { kidsWithCandies } from '../1431_KidsWithGreatestNumberCandles.js';

describe('kidsWithCandies', () => {
  it('should return correct boolean array for example 1', () => {
    const candies = [2, 3, 5, 1, 3];
    const extraCandies = 3;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, true, true, false, true]);
  });

  it('should return correct boolean array for example 2', () => {
    const candies = [4, 2, 1, 1, 2];
    const extraCandies = 1;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, false, false, false, false]);
  });

  it('should return correct boolean array for example 3', () => {
    const candies = [12, 1, 12];
    const extraCandies = 10;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, false, true]);
  });

  it('should handle edge case with minimum number of candies', () => {
    const candies = [1, 1];
    const extraCandies = 1;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, true]);
  });

  it('should handle edge case with maximum number of candies', () => {
    const candies = [100, 99, 98];
    const extraCandies = 1;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, true, false]);
  });
});
