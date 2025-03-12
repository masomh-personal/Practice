import { numberOfEmployeesWhoMetTarget } from '../2798_NumberOfEmployeesWhoMetTarget';

describe('Leetcode #2798: Number of Employees Who Met the Target', () => {
  describe('Basic Functionality', () => {
    it('should return the correct count when all employees meet the target', () => {
      const hours = [5, 6, 7, 8];
      const target = 5;
      const result = numberOfEmployeesWhoMetTarget(hours, target);
      const expected = 4;
      expect(result).toBe(expected);
    });

    it('should return the correct count when no employees meet the target', () => {
      const hours = [1, 2, 3, 4];
      const target = 5;
      const result = numberOfEmployeesWhoMetTarget(hours, target);
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should return the correct count when some employees meet the target', () => {
      const hours = [2, 4, 6, 8, 10];
      const target = 5;
      const result = numberOfEmployeesWhoMetTarget(hours, target);
      const expected = 3;
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should return 0 when given an empty array', () => {
      const hours = [];
      const target = 5;
      const result = numberOfEmployeesWhoMetTarget(hours, target);
      const expected = 0;
      expect(result).toBe(expected);
    });

    it('should return correct count when all values are equal to the target', () => {
      const hours = [5, 5, 5, 5];
      const target = 5;
      const result = numberOfEmployeesWhoMetTarget(hours, target);
      const expected = 4;
      expect(result).toBe(expected);
    });

    it('should return correct count when target is set to 0 (all employees qualify)', () => {
      const hours = [0, 1, 2, 3, 4, 5];
      const target = 0;
      const result = numberOfEmployeesWhoMetTarget(hours, target);
      const expected = 6;
      expect(result).toBe(expected);
    });
  });
});
