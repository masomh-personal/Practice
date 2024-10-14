import { RecentCounter } from '../933_NumberOfRecentCalls.js';

describe('RecentCounter', () => {
  let recentCounter;

  beforeEach(() => {
    recentCounter = new RecentCounter(); // ES6 class instantiation
  });

  it('should return 1 for the first ping request at t = 1', () => {
    const result = recentCounter.ping(1);
    expect(result).toBe(1); // Only one request so far
  });

  it('should return 2 when ping is called at t = 100', () => {
    recentCounter.ping(1); // First request
    const result = recentCounter.ping(100); // Second request within 3000ms range
    expect(result).toBe(2); // Two requests in range [-2900, 100]
  });

  it('should return 3 when ping is called at t = 3001', () => {
    recentCounter.ping(1); // First request
    recentCounter.ping(100); // Second request
    const result = recentCounter.ping(3001); // Third request at boundary
    expect(result).toBe(3); // Three requests in range [1, 3001]
  });

  it('should return 3 when ping is called at t = 3002', () => {
    recentCounter.ping(1); // First request
    recentCounter.ping(100); // Second request
    recentCounter.ping(3001); // Third request
    const result = recentCounter.ping(3002); // Fourth request
    expect(result).toBe(3); // Requests at [1, 100, 3001] within [2, 3002]
  });

  it('should return 2 when the last two requests are within the 3000ms range', () => {
    recentCounter.ping(1); // First request
    recentCounter.ping(3001); // Second request
    const result = recentCounter.ping(6001); // Both [3001, 6001] are within range [3001, 6001]
    expect(result).toBe(2); // Two requests are within the 3000ms range
  });

  it('should return the correct number of pings when there are multiple requests outside the 3000ms range', () => {
    recentCounter.ping(1);
    recentCounter.ping(2);
    recentCounter.ping(3);
    const result = recentCounter.ping(3005); // Only last request (1) within range [3005]
    expect(result).toBe(1); // Pings in range [3005]
  });
});
