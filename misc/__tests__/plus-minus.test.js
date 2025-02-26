import { plusMinus } from '../plus-minus.js';

describe('HackerRank: Plus Minus', () => {
  describe('Basic Functionality', () => {
    it('should return the correct ratios for a mix of positive, negative, and zero elements', () => {
      const input = [-4, 3, -9, 0, 4, 1];
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '0.500000',
        negativeRatio: '0.333333',
        zeroRatio: '0.166667',
      };
      expect(result).toEqual(expected);
    });

    it('should return correct ratios when all elements are positive', () => {
      const input = [1, 2, 3, 4, 5];
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '1.000000',
        negativeRatio: '0.000000',
        zeroRatio: '0.000000',
      };
      expect(result).toEqual(expected);
    });

    it('should return correct ratios when all elements are negative', () => {
      const input = [-1, -2, -3, -4, -5];
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '0.000000',
        negativeRatio: '1.000000',
        zeroRatio: '0.000000',
      };
      expect(result).toEqual(expected);
    });

    it('should return correct ratios when all elements are zero', () => {
      const input = [0, 0, 0, 0];
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '0.000000',
        negativeRatio: '0.000000',
        zeroRatio: '1.000000',
      };
      expect(result).toEqual(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should return correct ratios for an array with a single positive number', () => {
      const input = [1];
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '1.000000',
        negativeRatio: '0.000000',
        zeroRatio: '0.000000',
      };
      expect(result).toEqual(expected);
    });

    it('should return correct ratios for an array with a single negative number', () => {
      const input = [-1];
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '0.000000',
        negativeRatio: '1.000000',
        zeroRatio: '0.000000',
      };
      expect(result).toEqual(expected);
    });

    it('should return correct ratios for an array with a single zero', () => {
      const input = [0];
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '0.000000',
        negativeRatio: '0.000000',
        zeroRatio: '1.000000',
      };
      expect(result).toEqual(expected);
    });

    it('should return correct ratios for a large array with equal positive, negative, and zero elements', () => {
      const input = Array(100).fill(1).concat(Array(100).fill(-1), Array(100).fill(0));
      const result = plusMinus(input);
      const expected = {
        positiveRatio: '0.333333',
        negativeRatio: '0.333333',
        zeroRatio: '0.333333',
      };
      expect(result).toEqual(expected);
    });
  });
});
