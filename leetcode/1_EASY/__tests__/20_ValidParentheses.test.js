import { isValid } from '../20_ValidParentheses.js';

describe('Leetcode #20: Valid Parentheses', () => {
  describe('Valid Cases', () => {
    it('should return true for single pair of parentheses', () => {
      expect(isValid('()')).toBe(true);
      expect(isValid('[]')).toBe(true);
      expect(isValid('{}')).toBe(true);
    });

    it('should return true for multiple pairs of different types', () => {
      expect(isValid('()[]{}')).toBe(true);
      expect(isValid('([])')).toBe(true);
      expect(isValid('{[]}')).toBe(true);
      expect(isValid('[({})]')).toBe(true);
    });

    it('should return true for nested valid pairs', () => {
      expect(isValid('(([]){})')).toBe(true);
      expect(isValid('{{[[(())]]}}')).toBe(true);
    });

    it('should return true for a large valid string', () => {
      const largeValidString = '('.repeat(5000) + ')'.repeat(5000);
      expect(isValid(largeValidString)).toBe(true);
    });
  });

  describe('Invalid Cases', () => {
    it('should return false for single closing parenthesis without opening', () => {
      expect(isValid(')')).toBe(false);
      expect(isValid(']')).toBe(false);
      expect(isValid('}')).toBe(false);
    });

    it('should return false for single opening parenthesis without closing', () => {
      expect(isValid('(')).toBe(false);
      expect(isValid('[')).toBe(false);
      expect(isValid('{')).toBe(false);
    });

    it('should return false for any sequence starting with a closed bracket', () => {
      expect(isValid('))[]{}')).toBe(false);
      expect(isValid(')[])')).toBe(false);
      expect(isValid('}[]}')).toBe(false);
      expect(isValid(']({})]')).toBe(false);
    });

    it('should return false for mismatched parentheses', () => {
      expect(isValid('(]')).toBe(false);
      expect(isValid('([)]')).toBe(false);
      expect(isValid('{[}]')).toBe(false);
    });

    it('should return false for odd number of brackets', () => {
      expect(isValid('()(')).toBe(false);
      expect(isValid('[][][')).toBe(false);
      expect(isValid('{}()[][')).toBe(false);
    });

    it('should return false for invalid complex sequences', () => {
      expect(isValid('([)]')).toBe(false);
      expect(isValid('((())')).toBe(false);
      expect(isValid('({[})')).toBe(false);
    });

    it('should return false for a large invalid string', () => {
      const largeInvalidString = '('.repeat(5000) + ')'.repeat(4999) + ']';
      expect(isValid(largeInvalidString)).toBe(false);
    });

    it('should return true for a large valid string', () => {
      const largeInvalidString = '('.repeat(5000) + ')'.repeat(5000);
      expect(isValid(largeInvalidString)).toBe(true);
    });
  });
});
