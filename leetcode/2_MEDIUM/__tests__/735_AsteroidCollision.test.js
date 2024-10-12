import { asteroidCollision } from '../735_AsteroidCollision.js';

describe('asteroidCollision', () => {
  // Test Case 1: No collision scenario
  it('should return [5, 10] when no asteroids collide', () => {
    const asteroids = [5, 10, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([5, 10]);
  });

  // Test Case 2: Equal-sized asteroids collide
  it('should return [] when both asteroids of the same size collide', () => {
    const asteroids = [8, -8];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([]);
  });

  // Test Case 3: Multiple collisions
  it('should return [10] after multiple collisions', () => {
    const asteroids = [10, 2, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([10]);
  });

  // Test Case 4: Large-sized asteroid survives
  it('should return [-10, -5] when asteroids -10 and -5 survive', () => {
    const asteroids = [-10, 2, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([-10, -5]);
  });

  // Test Case 5: No collisions for asteroids moving in the same direction
  it('should return [5, 10] when all asteroids are moving right and none collide', () => {
    const asteroids = [5, 10];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([5, 10]);
  });

  // Test Case 6: Asteroids moving in opposite directions but do not collide
  it('should return [-10, -5] when all asteroids are moving left and none collide', () => {
    const asteroids = [-10, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([-10, -5]);
  });

  // Test Case 7: Edge case - One asteroid survives
  it('should return [10] when the only remaining asteroid survives', () => {
    const asteroids = [10, -1, -2, -3];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([10]);
  });

  // Leetcode test case: No collisions, asteroids moving in opposite directions cancel each other
  it('should return  [-2, -1, 1, 2] when all asteroids collide', () => {
    const asteroids = [-2, -1, 1, 2];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([-2, -1, 1, 2]);
  });
});
