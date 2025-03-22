import { dailyTemperatures, dailyTemperaturesNaive } from '../739_DailyTemperatures';

describe('Leetcode #739: Daily Temperatures', () => {
  // === Basic Test Cases ===
  describe('Basic Cases', () => {
    it('should return an array of zeros for a single temperature', () => {
      const temperatures = [73];
      const expected = [0];
      const result = dailyTemperatures(temperatures);
      expect(result).toEqual(expected);
    });

    it('should correctly handle two increasing temperatures', () => {
      const temperatures = [70, 75];
      const expected = [1, 0];
      const result = dailyTemperatures(temperatures);
      expect(result).toEqual(expected);
    });

    it('should correctly handle two decreasing temperatures', () => {
      const temperatures = [80, 75];
      const expected = [0, 0];
      const result = dailyTemperatures(temperatures);
      expect(result).toEqual(expected);
    });

    it('should return correct days to wait for a warm temperature in a mixed array', () => {
      const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
      const expected = [1, 1, 4, 2, 1, 1, 0, 0];
      const result = dailyTemperatures(temperatures);
      expect(result).toEqual(expected);
    });
  });

  // === Edge Cases ===
  describe('Edge Cases', () => {
    it('should return all zeros for a strictly decreasing temperature array', () => {
      const temperatures = [80, 79, 78, 77, 76];
      const expected = [0, 0, 0, 0, 0];
      const result = dailyTemperatures(temperatures);
      expect(result).toEqual(expected);
    });

    it('should return all ones for a strictly increasing temperature array', () => {
      const temperatures = [60, 61, 62, 63, 64];
      const expected = [1, 1, 1, 1, 0];
      const result = dailyTemperatures(temperatures);
      expect(result).toEqual(expected);
    });
  });

  // === Stress Test ===
  describe('Stress Test', () => {
    it('should handle a large input efficiently (edge case stress test)', () => {
      const temperatures = new Array(10_000).fill(50);
      const expected = new Array(10_000).fill(0);
      const result = dailyTemperatures(temperatures);
      expect(result).toEqual(expected);
    });
  });

  // === Performance Test ===
  describe('Performance Comparison: Naive vs Monotonic Stack', () => {
    it('should compare execution times on a large input array', () => {
      const SIZE = 1e5;
      const temperatures = Array.from({ length: SIZE }, () => Math.floor(Math.random() * 100));

      console.time('Naive Implementation Time');
      dailyTemperaturesNaive([...temperatures]); // Spread to avoid reference issues
      console.timeEnd('Naive Implementation Time');

      console.time('Optimized Implementation Time');
      dailyTemperatures([...temperatures]);
      console.timeEnd('Optimized Implementation Time');

      // Dummy expect to satisfy Vitest
      expect(true).toBe(true);
    });
  });
});
