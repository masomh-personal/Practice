import { maxProfit } from '../122_BestTimeToBuyAndSellStockII.js';

describe('maxProfit', () => {
  it('should return the correct profit for multiple profitable transactions', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const result = maxProfit(prices);
    expect(result).toBe(7);
  });

  it('should return the correct profit for increasing prices', () => {
    const prices = [1, 2, 3, 4, 5];
    const result = maxProfit(prices);
    expect(result).toBe(4);
  });

  it('should return 0 for non-profitable decreasing prices', () => {
    const prices = [7, 6, 4, 3, 1];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  it('should return 0 when there is only one price point', () => {
    const prices = [5];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  it('should handle edge case with two price points where no profit is possible', () => {
    const prices = [10, 5];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  it('should handle edge case with two price points where profit is possible', () => {
    const prices = [5, 10];
    const result = maxProfit(prices);
    expect(result).toBe(5);
  });

  it('should handle case with all identical prices', () => {
    const prices = [5, 5, 5, 5];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  it('should handle large input within constraints', () => {
    const prices = Array(30000).fill(1);
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  it('should handle large input with increasing prices within constraints', () => {
    const prices = Array.from({ length: 30000 }, (_, i) => i + 1);
    const result = maxProfit(prices);
    expect(result).toBe(29999);
  });
});
