import { numJewelsInStones } from '../771_JewelsAndStones.js'; // Adjust the path accordingly

describe('numJewelsInStones', () => {
  it('should return 0 when no jewels are found in stones', () => {
    const jewels = 'aA';
    const stones = 'bbb';
    expect(numJewelsInStones(jewels, stones)).toBe(0);
  });

  it('should return the correct number of jewels in stones', () => {
    const jewels = 'aA';
    const stones = 'aAAbbbb';
    expect(numJewelsInStones(jewels, stones)).toBe(3);
  });

  it('should handle an empty jewels string', () => {
    const jewels = '';
    const stones = 'aAAbbbb';
    expect(numJewelsInStones(jewels, stones)).toBe(0);
  });

  it('should handle an empty stones string', () => {
    const jewels = 'aA';
    const stones = '';
    expect(numJewelsInStones(jewels, stones)).toBe(0);
  });

  it('should handle both jewels and stones being empty', () => {
    const jewels = '';
    const stones = '';
    expect(numJewelsInStones(jewels, stones)).toBe(0);
  });

  it('should count correctly when jewels and stones contain the same characters', () => {
    const jewels = 'abc';
    const stones = 'abcabcabc';
    expect(numJewelsInStones(jewels, stones)).toBe(9);
  });

  it('should return 0 when stones do not contain any jewels', () => {
    const jewels = 'xyz';
    const stones = 'abcdefg';
    expect(numJewelsInStones(jewels, stones)).toBe(0);
  });

  it('should work when jewels and stones contain repetitive characters', () => {
    const jewels = 'a';
    const stones = 'aaaaa';
    expect(numJewelsInStones(jewels, stones)).toBe(5);
  });

  it('should handle case sensitivity properly', () => {
    const jewels = 'aA';
    const stones = 'aAaaA';
    expect(numJewelsInStones(jewels, stones)).toBe(5);
  });

  it('should work with longer input strings', () => {
    const jewels = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const stones = 'abcABCabcABCabcABCabcABCabcABC';
    expect(numJewelsInStones(jewels, stones)).toBe(30);
  });
});
