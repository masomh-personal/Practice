import { isValid } from '../20_ValidParentheses.js';

describe('isValid', () => {
  // Basic tests
  // NOT part of Leetcode constraints
  // it('should return true for empty string', () => {
  //   expect(isValid('')).toBe(true);
  // });

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

  // Tests for incorrect pairs
  it('should return false for mismatched parentheses', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[}]')).toBe(false);
  });

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

  // Tests for nested valid parentheses
  it('should return true for nested valid pairs', () => {
    expect(isValid('(([]){})')).toBe(true);
    expect(isValid('{{[[(())]]}}')).toBe(true);
  });

  // Complex cases
  it('should return false for invalid complex sequences', () => {
    expect(isValid('([)]')).toBe(false);
    expect(isValid('((())')).toBe(false);
    expect(isValid('({[})')).toBe(false);
  });

  // Edge case with the maximum input size
  it('should handle large input strings efficiently', () => {
    const largeValidString = '('.repeat(5000) + ')'.repeat(5000); // 10000 characters
    expect(isValid(largeValidString)).toBe(true);

    const largeInvalidString = '('.repeat(5000) + ')'.repeat(4999) + ']'; // 9999 valid, 1 invalid
    expect(isValid(largeInvalidString)).toBe(false);
  });
});
