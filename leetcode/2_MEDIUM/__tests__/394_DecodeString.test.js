import { decodeString, decodeStringRecursive } from '../394_DecodeString.js';

describe('decodeString (Stack Approach)', () => {
  it('should decode single-level encoded strings', () => {
    const input = '3[a]2[bc]';
    const expected = 'aaabcbc';
    expect(decodeString(input)).toBe(expected);
  });

  it('should handle nested encoded strings', () => {
    const input = '3[a2[c]]';
    const expected = 'accaccacc';
    expect(decodeString(input)).toBe(expected);
  });

  it('should decode strings with multiple different patterns', () => {
    const input = '2[abc]3[cd]ef';
    const expected = 'abcabccdcdcdef';
    expect(decodeString(input)).toBe(expected);
  });

  it('should return the original string when no encoding is present', () => {
    const input = 'abcdef';
    const expected = 'abcdef';
    expect(decodeString(input)).toBe(expected);
  });

  it('should decode strings with multiple digits for the repeat count', () => {
    const input = '10[a]';
    const expected = 'aaaaaaaaaa';
    expect(decodeString(input)).toBe(expected);
  });

  it('should handle input with a single character repeated multiple times', () => {
    const input = '4[z]';
    const expected = 'zzzz';
    expect(decodeString(input)).toBe(expected);
  });

  it('should handle complex nesting and multiple patterns', () => {
    const input = '2[2[b]c]';
    const expected = 'bbcbbc';
    expect(decodeString(input)).toBe(expected);
  });
});

describe('decodeStringRecursive (Recursive Approach)', () => {
  it('should decode single-level encoded strings', () => {
    const input = '3[a]2[bc]';
    const expected = 'aaabcbc';
    expect(decodeStringRecursive(input)).toBe(expected);
  });

  it('should handle nested encoded strings', () => {
    const input = '3[a2[c]]';
    const expected = 'accaccacc';
    expect(decodeStringRecursive(input)).toBe(expected);
  });

  it('should decode strings with multiple different patterns', () => {
    const input = '2[abc]3[cd]ef';
    const expected = 'abcabccdcdcdef';
    expect(decodeStringRecursive(input)).toBe(expected);
  });

  it('should return the original string when no encoding is present', () => {
    const input = 'abcdef';
    const expected = 'abcdef';
    expect(decodeStringRecursive(input)).toBe(expected);
  });

  it('should decode strings with multiple digits for the repeat count', () => {
    const input = '10[a]';
    const expected = 'aaaaaaaaaa';
    expect(decodeStringRecursive(input)).toBe(expected);
  });

  it('should handle input with a single character repeated multiple times', () => {
    const input = '4[z]';
    const expected = 'zzzz';
    expect(decodeStringRecursive(input)).toBe(expected);
  });

  it('should handle complex nesting and multiple patterns', () => {
    const input = '2[2[b]c]';
    const expected = 'bbcbbc';
    expect(decodeStringRecursive(input)).toBe(expected);
  });
});
