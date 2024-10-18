import { fibBrute, fibMemo, fibDp } from '../fibonacci.js';

describe('Fibonacci Functions', () => {
  describe('fibBrute', () => {
    it('should return 0 for n = 0', () => {
      expect(fibBrute(0)).toBe(0);
    });

    it('should return 1 for n = 1', () => {
      expect(fibBrute(1)).toBe(1);
    });

    it('should return 1 for n = 2', () => {
      expect(fibBrute(2)).toBe(1);
    });

    it('should return 2 for n = 3', () => {
      expect(fibBrute(3)).toBe(2);
    });

    it('should return 3 for n = 4', () => {
      expect(fibBrute(4)).toBe(3);
    });

    // Keeping n low to avoid stack overflow
    it('should return 5 for n = 5', () => {
      expect(fibBrute(5)).toBe(5);
    });
  });

  describe('fibMemo', () => {
    it('should return 0 for n = 0', () => {
      expect(fibMemo(0)).toBe(0);
    });

    it('should return 1 for n = 1', () => {
      expect(fibMemo(1)).toBe(1);
    });

    it('should return 1 for n = 2', () => {
      expect(fibMemo(2)).toBe(1);
    });

    it('should return 2 for n = 3', () => {
      expect(fibMemo(3)).toBe(2);
    });

    it('should return 3 for n = 4', () => {
      expect(fibMemo(4)).toBe(3);
    });

    it('should return 5 for n = 5', () => {
      expect(fibMemo(5)).toBe(5);
    });

    it('should return 55 for n = 10', () => {
      expect(fibMemo(10)).toBe(55);
    });

    it('should return 6765 for n = 20', () => {
      expect(fibMemo(20)).toBe(6_765);
    });
  });

  describe('fibDp', () => {
    it('should return 0 for n = 0', () => {
      expect(fibDp(0)).toBe(0);
    });

    it('should return 1 for n = 1', () => {
      expect(fibDp(1)).toBe(1);
    });

    it('should return 1 for n = 2', () => {
      expect(fibDp(2)).toBe(1);
    });

    it('should return 2 for n = 3', () => {
      expect(fibDp(3)).toBe(2);
    });

    it('should return 3 for n = 4', () => {
      expect(fibDp(4)).toBe(3);
    });

    it('should return 5 for n = 5', () => {
      expect(fibDp(5)).toBe(5);
    });

    it('should return 55 for n = 10', () => {
      expect(fibDp(10)).toBe(55);
    });

    it('should return 6765 for n = 20', () => {
      expect(fibDp(20)).toBe(6_765);
    });

    it('should return 832040 for n = 30', () => {
      expect(fibDp(30)).toBe(832_040);
    });
  });
});
