import { getLucky } from '../1945_SumOfDigitsOfStringAfterConvert.js';

describe('Leetcode #1945: Sum of Digits of String After Convert', () => {
  it('should return the correct sum of digits after one transformation when k = 1', () => {
    const s = 'leetcode';
    const k = 1;
    const result = getLucky(s, k);
    const expected = 33;
    expect(result).toBe(expected);
  });

  it('should return the correct sum of digits after multiple transformations', () => {
    const s = 'leetcode';
    const k = 2;
    const result = getLucky(s, k);
    const expected = 6;
    expect(result).toBe(expected);
  });

  it('should return the correct sum when the input string is a single character', () => {
    const s = 'z';
    const k = 2;
    const result = getLucky(s, k);
    const expected = 8; // 'z' -> "26" -> 2+6 = 8
    expect(result).toBe(expected);
  });

  it('should handle the case where k is large but does not change the sum after a few iterations', () => {
    const s = 'a';
    const k = 10;
    const result = getLucky(s, k);
    const expected = 1; // 'a' -> "1" -> remains 1
    expect(result).toBe(expected);
  });

  it('should correctly process a long string with large k values', () => {
    const s = 'zzzzzzzzzz'; // Each 'z' -> "26", so "2626262626..."
    const k = 3;
    const result = getLucky(s, k);
    const expected = 8; // "2626262626" -> sum digits multiple times
    expect(result).toBe(expected);
  });

  it('should handle a very long string efficiently', () => {
    const s = 'abcdefghijklmnopqrstuvwxyz'.repeat(100); // 2600 characters long
    const k = 3;
    const result = getLucky(s, k);

    // Step 1: Convert letters to digits
    // 'abcdefghijklmnopqrstuvwxyz' -> "123456789101112...262526" repeated 100 times
    // Sum of one cycle (1 to 26) = 351
    // 351 * 100 = 35_100 (after first transformation)
    // 3 + 5 + 1 + 0 + 0 = 9 (after second transformation)
    // 9 (after third transformation)

    const expected = 9; // Final reduced sum
    expect(result).toBe(expected);
  });
});
