import { canFinish } from '../207_CourseSchedule.js';

describe('LeetCode 207: Course Schedule', () => {
  test('Test Case 1: No prerequisites (simple case)', () => {
    expect(canFinish(2, [])).toBe(true);
  });

  test('Test Case 2: Simple linear dependency', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  test('Test Case 3: Simple cycle', () => {
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ])
    ).toBe(false);
  });

  test('Test Case 4: Multiple independent courses', () => {
    expect(
      canFinish(4, [
        [1, 0],
        [2, 1],
        [3, 2],
      ])
    ).toBe(true);
  });

  test('Test Case 5: Complex dependency without a cycle', () => {
    expect(
      canFinish(5, [
        [1, 0],
        [2, 0],
        [3, 1],
        [4, 3],
      ])
    ).toBe(true);
  });

  test('Test Case 6: Complex dependency with a cycle', () => {
    expect(
      canFinish(5, [
        [1, 0],
        [2, 0],
        [3, 1],
        [4, 3],
        [1, 4],
      ])
    ).toBe(false);
  });

  test('Test Case 7: All courses independent', () => {
    expect(canFinish(3, [])).toBe(true);
  });

  test('Test Case 8: Course with itself as a prerequisite', () => {
    expect(canFinish(1, [[0, 0]])).toBe(false);
  });

  test('Test Case 9: Large number of courses with no dependencies', () => {
    expect(canFinish(1000, [])).toBe(true);
  });

  test('Test Case 10: Large number of courses with a complex but acyclic dependency', () => {
    expect(
      canFinish(1000, [
        [1, 0],
        [2, 0],
        [3, 1],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 5],
        [8, 6],
        [9, 7],
      ])
    ).toBe(true);
  });
});
