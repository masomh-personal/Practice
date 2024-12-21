import { compactObject } from '../2705_CompactObject.js';

// Test cases for Leetcode #2705: Compact Object
describe('Leetcode #2705: Compact Object', () => {
  it('should compact an array with falsy values', () => {
    const obj = [null, 0, false, 1];
    const expected = [1];
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });

  it('should compact a nested object with falsy values', () => {
    const obj = { a: null, b: [false, 1] };
    const expected = { b: [1] };
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });

  it('should compact a deeply nested array with falsy values', () => {
    const obj = [null, 0, 5, [0], [false, 16]];
    const expected = [5, [], [16]];
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });

  it('should handle an empty object', () => {
    const obj = {};
    const expected = {};
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const obj = [];
    const expected = [];
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });

  it('should handle no falsy values', () => {
    const obj = { a: 1, b: [2, 3], c: { d: 4 } };
    const expected = { a: 1, b: [2, 3], c: { d: 4 } };
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });

  it('should handle all falsy values', () => {
    const obj = { a: null, b: 0, c: false, d: undefined };
    const expected = {};
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });

  it('should compact a large array with deeper nests', () => {
    const obj = [0, [false, null, [undefined, ['', 42, [0, 'valid']]]], 100];
    const expected = [[[[42, ['valid']]]], 100];
    const result = compactObject(obj);
    expect(result).toEqual(expected);
  });
});
