import { score } from '../Darts.js';

describe('Exercism: Darts', () => {
  describe('Missed target', () => {
    it('should return 0 when outside the outer circle', () => {
      const result = score(-9, 9);
      const expected = 0;
      expect(result).toEqual(expected);
    });
  });

  describe('On the outer circle', () => {
    it('should return 1 when exactly on the outer circle', () => {
      const result = score(0, 10);
      const expected = 1;
      expect(result).toEqual(expected);
    });
  });

  describe('On the middle circle', () => {
    it('should return 5 when exactly on the middle circle', () => {
      const result = score(-5, 0);
      const expected = 5;
      expect(result).toEqual(expected);
    });
  });

  describe('On the inner circle', () => {
    it('should return 10 when exactly on the inner circle', () => {
      const result = score(0, -1);
      const expected = 10;
      expect(result).toEqual(expected);
    });

    it('should return 10 when exactly at the centre', () => {
      const result = score(0, 0);
      const expected = 10;
      expect(result).toEqual(expected);
    });

    it('should return 10 when near the centre', () => {
      const result = score(-0.1, -0.1);
      const expected = 10;
      expect(result).toEqual(expected);
    });

    it('should return 10 when just within the inner circle', () => {
      const result = score(0.7, 0.7);
      const expected = 10;
      expect(result).toEqual(expected);
    });
  });

  describe('Between inner and middle circles', () => {
    it('should return 5 when just outside the inner circle', () => {
      const result = score(0.8, -0.8);
      const expected = 5;
      expect(result).toEqual(expected);
    });

    it('should return 5 when just within the middle circle', () => {
      const result = score(-3.5, 3.5);
      const expected = 5;
      expect(result).toEqual(expected);
    });

    it('should return 5 when at an asymmetric position between the inner and middle circles', () => {
      const result = score(0.5, -4);
      const expected = 5;
      expect(result).toEqual(expected);
    });
  });

  describe('Between middle and outer circles', () => {
    it('should return 1 when just outside the middle circle', () => {
      const result = score(-3.6, -3.6);
      const expected = 1;
      expect(result).toEqual(expected);
    });

    it('should return 1 when just within the outer circle', () => {
      const result = score(-7.0, 7.0);
      const expected = 1;
      expect(result).toEqual(expected);
    });
  });

  describe('Missed target (outside outer circle)', () => {
    it('should return 0 when just outside the outer circle', () => {
      const result = score(7.1, -7.1);
      const expected = 0;
      expect(result).toEqual(expected);
    });
  });
});
