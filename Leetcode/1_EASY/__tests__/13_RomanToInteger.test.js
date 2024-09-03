import { romanToInt } from '../13_RomanToInteger.js'; // Adjust the import path as needed

describe('romanToInt', () => {
  // Leetcode example tests
  it('should convert "III" to 3', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('should convert "IV" to 4', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  it('should convert "IX" to 9', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  it('should convert "LVIII" to 58', () => {
    expect(romanToInt('LVIII')).toBe(58); // L = 50, V = 5, III = 3
  });

  it('should convert "MCMXCIV" to 1994', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994); // M = 1000, CM = 900, XC = 90, IV = 4
  });

  // Additional comprehensive tests
  it('should convert "XLII" to 42', () => {
    expect(romanToInt('XLII')).toBe(42); // XL = 40, II = 2
  });

  it('should convert "XCIX" to 99', () => {
    expect(romanToInt('XCIX')).toBe(99); // XC = 90, IX = 9
  });

  it('should convert "MMXXIII" to 2023', () => {
    expect(romanToInt('MMXXIII')).toBe(2023); // MM = 2000, XX = 20, III = 3
  });

  it('should convert "DCCCXLV" to 845', () => {
    expect(romanToInt('DCCCXLV')).toBe(845); // D = 500, CCC = 300, XL = 40, V = 5
  });

  it('should convert "CMXLIV" to 944', () => {
    expect(romanToInt('CMXLIV')).toBe(944); // CM = 900, XL = 40, IV = 4
  });

  // Edge cases
  it('should convert the minimum value "I" to 1', () => {
    expect(romanToInt('I')).toBe(1); // I = 1
  });

  it('should convert the maximum value "MMMCMXCIX" to 3999', () => {
    expect(romanToInt('MMMCMXCIX')).toBe(3999); // MMM = 3000, CM = 900, XC = 90, IX = 9
  });

  it('should convert "MCMXC" to 1990', () => {
    expect(romanToInt('MCMXC')).toBe(1990); // M = 1000, CM = 900, XC = 90
  });

  it('should convert "C" to 100', () => {
    expect(romanToInt('C')).toBe(100); // C = 100
  });

  it('should convert "D" to 500', () => {
    expect(romanToInt('D')).toBe(500); // D = 500
  });

  it('should convert "M" to 1000', () => {
    expect(romanToInt('M')).toBe(1000); // M = 1000
  });

  it('should convert "DCXXI" to 621', () => {
    expect(romanToInt('DCXXI')).toBe(621); // D = 500, C = 100, XX = 20, I = 1
  });

  it('should convert "MCMXCI" to 1991', () => {
    expect(romanToInt('MCMXCI')).toBe(1991); // M = 1000, CM = 900, XC = 90, I = 1
  });
});
