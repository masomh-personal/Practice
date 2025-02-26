import { timeConversion } from '../TimeConversion.js';

describe('HackerRank: Time Conversion', () => {
  describe('Basic Functionality', () => {
    it('should convert 12:00:00AM to 00:00:00', () => {
      const input = '12:00:00AM';
      const result = timeConversion(input);
      const expected = '00:00:00';
      expect(result).toBe(expected);
    });

    it('should convert 12:00:00PM to 12:00:00', () => {
      const input = '12:00:00PM';
      const result = timeConversion(input);
      const expected = '12:00:00';
      expect(result).toBe(expected);
    });

    it('should convert 01:00:00PM to 13:00:00', () => {
      const input = '01:00:00PM';
      const result = timeConversion(input);
      const expected = '13:00:00';
      expect(result).toBe(expected);
    });

    it('should convert 01:00:00AM to 01:00:00', () => {
      const input = '01:00:00AM';
      const result = timeConversion(input);
      const expected = '01:00:00';
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should convert 11:59:59PM to 23:59:59', () => {
      const input = '11:59:59PM';
      const result = timeConversion(input);
      const expected = '23:59:59';
      expect(result).toBe(expected);
    });

    it('should convert 12:59:59PM to 12:59:59', () => {
      const input = '12:59:59PM';
      const result = timeConversion(input);
      const expected = '12:59:59';
      expect(result).toBe(expected);
    });

    it('should convert 12:59:59AM to 00:59:59', () => {
      const input = '12:59:59AM';
      const result = timeConversion(input);
      const expected = '00:59:59';
      expect(result).toBe(expected);
    });

    it('should convert 11:59:59AM to 11:59:59', () => {
      const input = '11:59:59AM';
      const result = timeConversion(input);
      const expected = '11:59:59';
      expect(result).toBe(expected);
    });
  });
});
