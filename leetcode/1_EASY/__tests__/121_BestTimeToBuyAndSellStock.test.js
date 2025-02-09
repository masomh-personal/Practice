import { maxProfit } from '../121_BestTimeToBuyAndSellStock.js';

describe('Leetcode #121: Best Time to Buy and Sell Stock', () => {
  describe('Basic Cases', () => {
    it('should return the maximum profit for a valid price sequence', () => {
      const prices = [7, 1, 5, 3, 6, 4];
      const expected = 5;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });

    it('should return 0 if no profit can be made', () => {
      const prices = [7, 6, 4, 3, 1];
      const expected = 0;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });

    it('should correctly handle increasing prices', () => {
      const prices = [1, 2, 3, 4, 5, 6, 7];
      const expected = 6;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });

    it('should correctly handle decreasing then increasing prices', () => {
      const prices = [9, 2, 5, 1, 6, 4];
      const expected = 5;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should handle a single-day scenario with no transaction possible', () => {
      const prices = [5];
      const expected = 0;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });

    it('should handle an empty price array', () => {
      const prices = [];
      const expected = 0;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });

    it('should return 0 when all prices are the same', () => {
      const prices = [3, 3, 3, 3, 3];
      const expected = 0;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });

    it('should correctly handle a dataset with descending values (no profit to be made)', () => {
      // Prices decrease each day, ensuring no profitable transaction exists
      const SIZE = 10_000;
      const prices = Array.from({ length: SIZE }, (_, i) => SIZE - i);

      const expected = 0; // No opportunity to buy low and sell high
      const result = maxProfit(prices);

      expect(result).toBe(expected);
    });
  });

  describe('Large Dataset & Performance Tests', () => {
    it('should correctly handle a medium-size dataset with large variance', () => {
      // Generate prices with random variance (values between 2 and 7)
      // but guarantee minPrice (1) and maxPrice (1_000_001) to ensure a consistent expected result.
      const prices = Array.from({ length: 10_000 }, () => Math.floor(Math.random() * 5 + 2));

      prices[0] = 1; // Set a guaranteed minimum price (buy price)
      prices[9_999] = 1_000_001; // Set a guaranteed maximum price (sell price)

      const expected = 1_000_000; // Profit should always be 1_000_000 due to forced min/max
      const result = maxProfit(prices);

      expect(result).toBe(expected);
    });

    it('should correctly handle a large dataset', () => {
      const prices = Array.from({ length: 1_000_000 }, (_, i) => i + 1);
      const expected = 999_999;
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });

    it('should correctly handle a dataset with a large spike in the middle', () => {
      // Prices gradually increase, spike at the midpoint, then decrease
      const prices = Array.from({ length: 10_001 }, (_, i) =>
        i === 5_000 ? 1_000_000 : Math.min(i + 1, 5_000)
      );

      const expected = 999_999; // Best buy at 1, best sell at 1_000_000
      const result = maxProfit(prices);

      expect(result).toBe(expected);
    });
  });
});
