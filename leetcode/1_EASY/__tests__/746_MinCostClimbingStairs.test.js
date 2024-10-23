import { minCostClimbingStairs } from '../746_MinCostClimbingStairs.js';

describe('minCostClimbingStairs', () => {
  it('should return the minimum cost for a small staircase', () => {
    const cost = [10, 15, 20];
    const result = minCostClimbingStairs(cost);
    expect(result).toBe(15);
  });

  it('should return the minimum cost for a staircase with alternating costs', () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    const result = minCostClimbingStairs(cost);
    expect(result).toBe(6);
  });

  it('should handle a staircase with minimal costs', () => {
    const cost = [1, 2];
    const result = minCostClimbingStairs(cost);
    expect(result).toBe(1);
  });

  it('should handle a staircase where the optimal path involves skipping steps', () => {
    const cost = [1, 2, 3, 4, 5];
    const result = minCostClimbingStairs(cost);
    expect(result).toBe(6);
  });

  it('should handle the largest allowed staircase length', () => {
    const cost = Array(1000).fill(1);
    const result = minCostClimbingStairs(cost);
    expect(result).toBe(500);
  });

  it('should return 0 if all costs are zero', () => {
    const cost = [0, 0, 0, 0];
    const result = minCostClimbingStairs(cost);
    expect(result).toBe(0);
  });
});
