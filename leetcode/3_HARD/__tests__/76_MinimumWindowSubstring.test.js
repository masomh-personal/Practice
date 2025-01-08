import { minWindow } from '../76_MinimumWindowSubstring.js';

describe('Leetcode #76: Minimum Window Substring', () => {
  describe('Two Pointer Approach', () => {
    it('Test case 1 - Basic Case', () => {
      const result = minWindow('ADOBECODEBANC', 'ABC');
      expect(result).toBe('BANC');
    });

    it('Test case 2 - Single Character Match', () => {
      const result = minWindow('a', 'a');
      expect(result).toBe('a');
    });

    it('Test case 3 - Insufficient Characters', () => {
      const result = minWindow('a', 'aa');
      expect(result).toBe('');
    });

    it('Test case 4 - Substring in Middle', () => {
      const result = minWindow('abc', 'b');
      expect(result).toBe('b');
    });

    it('Test case 5 - Substring at End', () => {
      const result = minWindow('ab', 'b');
      expect(result).toBe('b');
    });

    it('Test case 6 - Exact Match', () => {
      const result = minWindow('aa', 'aa');
      expect(result).toBe('aa');
    });

    it('Test case 7 - Long String with Repeating Characters', () => {
      const result = minWindow('aaflslflsldkalskaaa', 'aaa');
      expect(result).toBe('aaa');
    });

    it('Test case 8 - Multiple Matches, Selecting the Shortest One', () => {
      const result = minWindow('abcdebdde', 'bde');
      expect(result).toBe('deb'); // Fix expected result from "bdde" to "bde"
    });

    it('Test case 9 - Duplicate Characters in `t` (Ensuring Count is Maintained)', () => {
      const result = minWindow('aaabbcc', 'aabc');
      expect(result).toBe('aabbc'); // Must include two 'a's
    });

    it('Test case 10 - Case Sensitivity Test', () => {
      const result = minWindow('aAbBcC', 'ABC');
      expect(result).toBe('AbBcC'); // Case-sensitive match required
    });

    it('Test case 11 - Case Sensitivity Test (Valid Match)', () => {
      const result = minWindow('XAaBbCcYABCZ', 'ABC');
      expect(result).toBe('ABC'); // Explicitly checking correct case match
    });

    it('Test case 12 - `t` Contains Only Uppercase but `s` is Mixed', () => {
      const result = minWindow('aAAbBc', 'AAB');
      expect(result).toBe('AAbB');
    });

    it('Test case 13 - Characters Not Present in `s`', () => {
      const result = minWindow('abcdefgh', 'xyz');
      expect(result).toBe('');
    });

    it('Test case 14 - String Contains Only One Valid Substring', () => {
      const result = minWindow('abacccab', 'aabc');
      expect(result).toBe('abac');
    });
  });
});
