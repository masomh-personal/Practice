import { intToRoman, intToRomanV2 } from '../12_IntegerToRoman.js'; // Adjust the import path as needed

describe('intToRoman', () => {
  it('should convert 3 to "III"', () => {
    expect(intToRoman(3)).toBe('III');
  });

  it('should convert 4 to "IV"', () => {
    expect(intToRoman(4)).toBe('IV');
  });

  it('should convert 9 to "IX"', () => {
    expect(intToRoman(9)).toBe('IX');
  });

  it('should convert 58 to "LVIII"', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });

  it('should convert 1994 to "MCMXCIV"', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });

  it('should convert 1 to "I"', () => {
    expect(intToRoman(1)).toBe('I');
  });

  it('should convert 3999 to "MMMCMXCIX"', () => {
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
  });

  it('should convert 1000 to "M"', () => {
    expect(intToRoman(1000)).toBe('M');
  });

  it('should convert 621 to "DCXXI"', () => {
    expect(intToRoman(621)).toBe('DCXXI');
  });

  it('should convert 44 to "XLIV"', () => {
    expect(intToRoman(44)).toBe('XLIV');
  });

  it('should convert 89 to "LXXXIX"', () => {
    expect(intToRoman(89)).toBe('LXXXIX');
  });

  it('should convert 1600 to "MDC"', () => {
    expect(intToRoman(1600)).toBe('MDC');
  });

  it('should convert 2763 to "MMDCCLXIII"', () => {
    expect(intToRoman(2763)).toBe('MMDCCLXIII');
  });
});

describe('intToRomanV2', () => {
  // Existing test cases
  it('should convert 3 to "III"', () => {
    expect(intToRomanV2(3)).toBe('III');
  });

  it('should convert 4 to "IV"', () => {
    expect(intToRomanV2(4)).toBe('IV');
  });

  it('should convert 9 to "IX"', () => {
    expect(intToRomanV2(9)).toBe('IX');
  });

  it('should convert 58 to "LVIII"', () => {
    expect(intToRomanV2(58)).toBe('LVIII');
  });

  it('should convert 1994 to "MCMXCIV"', () => {
    expect(intToRomanV2(1994)).toBe('MCMXCIV');
  });

  // Additional test cases
  it('should convert 40 to "XL"', () => {
    expect(intToRomanV2(40)).toBe('XL');
  });

  it('should convert 90 to "XC"', () => {
    expect(intToRomanV2(90)).toBe('XC');
  });

  it('should convert 400 to "CD"', () => {
    expect(intToRomanV2(400)).toBe('CD');
  });

  it('should convert 900 to "CM"', () => {
    expect(intToRomanV2(900)).toBe('CM');
  });

  it('should convert 100 to "C"', () => {
    expect(intToRomanV2(100)).toBe('C');
  });

  it('should convert 500 to "D"', () => {
    expect(intToRomanV2(500)).toBe('D');
  });

  it('should convert 1 to "I"', () => {
    expect(intToRomanV2(1)).toBe('I');
  });

  it('should convert 1001 to "MI"', () => {
    expect(intToRomanV2(1001)).toBe('MI');
  });

  it('should convert 3999 to "MMMCMXCIX"', () => {
    expect(intToRomanV2(3999)).toBe('MMMCMXCIX');
  });

  it('should convert 621 to "DCXXI"', () => {
    expect(intToRomanV2(621)).toBe('DCXXI');
  });

  it('should convert 2763 to "MMDCCLXIII"', () => {
    expect(intToRomanV2(2763)).toBe('MMDCCLXIII');
  });

  // Edge cases
  it('should convert the minimum possible input (1) to "I"', () => {
    expect(intToRomanV2(1)).toBe('I');
  });

  it('should convert the maximum possible input (3999) to "MMMCMXCIX"', () => {
    expect(intToRomanV2(3999)).toBe('MMMCMXCIX');
  });

  it('should convert 2500 to "MMD"', () => {
    expect(intToRomanV2(2500)).toBe('MMD');
  });

  it('should convert 44 to "XLIV"', () => {
    expect(intToRomanV2(44)).toBe('XLIV');
  });

  it('should convert 89 to "LXXXIX"', () => {
    expect(intToRomanV2(89)).toBe('LXXXIX');
  });

  it('should convert 1600 to "MDC"', () => {
    expect(intToRomanV2(1600)).toBe('MDC');
  });

  it('should convert 999 to "CMXCIX"', () => {
    expect(intToRomanV2(999)).toBe('CMXCIX');
  });

  it('should convert 2888 to "MMDCCCLXXXVIII"', () => {
    expect(intToRomanV2(2888)).toBe('MMDCCCLXXXVIII');
  });
});
