import { gcdOfStrings } from '../1071_GreatestCommonDivisorStrings.js'; // assuming your function is in this file

describe('gcdOfStrings', () => {
  it('should return the correct gcd string when both strings share a common base', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC'); // common base: 'ABC'
    expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB'); // common base: 'AB'
  });

  it('should return an empty string when no common divisor string exists', () => {
    expect(gcdOfStrings('LEET', 'CODE')).toBe(''); // no common base
    expect(gcdOfStrings('ABCDEF', 'XYZ')).toBe(''); // no common base
  });

  it('should handle cases where both strings are identical', () => {
    expect(gcdOfStrings('ABC', 'ABC')).toBe('ABC'); // identical strings
    expect(gcdOfStrings('XYZXYZXYZ', 'XYZXYZXYZ')).toBe('XYZXYZXYZ'); // identical strings
  });

  it('should handle cases where one string is a multiple of the other', () => {
    expect(gcdOfStrings('AAAAAA', 'AA')).toBe('AA'); // 'AA' repeats
    expect(gcdOfStrings('BBBBBB', 'BB')).toBe('BB'); // 'BB' repeats
  });

  it('should return the entire string if one string is a prefix of the other', () => {
    expect(gcdOfStrings('AB', 'ABABAB')).toBe('AB'); // 'AB' is the gcd
    expect(gcdOfStrings('XYZ', 'XYZXYZ')).toBe('XYZ'); // 'XYZ' is the gcd
  });

  it('should return an empty string when no repeatable pattern exists', () => {
    expect(gcdOfStrings('ABCD', 'ABCE')).toBe(''); // 'ABCD' and 'ABCE' have no common divisor
  });

  it('should handle very long strings', () => {
    const longStr1 = 'A'.repeat(1000) + 'B'.repeat(1000);
    const longStr2 = 'A'.repeat(1000);
    expect(gcdOfStrings(longStr1, longStr2)).toBe(''); // no common base between A-repeats and mixed string
  });
});
