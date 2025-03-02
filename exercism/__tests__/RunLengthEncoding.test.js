import { encode, decode } from '../RunLengthEncoding.js';

// Vitest test file for Exercism problem "Run-Length Encoding"

describe('Exercism: Run-Length Encoding', () => {
  describe('Encoding', () => {
    it('should return an empty string when encoding an empty string', () => {
      const result = encode('');
      const expected = '';
      expect(result).toEqual(expected);
    });

    it('should return the same string when encoding single characters only', () => {
      const result = encode('XYZ');
      const expected = 'XYZ';
      expect(result).toEqual(expected);
    });

    it('should encode a string with no single characters', () => {
      const result = encode('AABBBCCCC');
      const expected = '2A3B4C';
      expect(result).toEqual(expected);
    });

    it('should encode a string with single characters mixed with repeated characters', () => {
      const result = encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
      const expected = '12WB12W3B24WB';
      expect(result).toEqual(expected);
    });

    it('should encode a string with multiple whitespaces', () => {
      const result = encode('  hsqq qww  ');
      const expected = '2 hs2q q2w2 ';
      expect(result).toEqual(expected);
    });

    it('should encode a string with lowercase characters', () => {
      const result = encode('aabbbcccc');
      const expected = '2a3b4c';
      expect(result).toEqual(expected);
    });
  });

  describe('Decoding', () => {
    it('should return an empty string when decoding an empty string', () => {
      const result = decode('');
      const expected = '';
      expect(result).toEqual(expected);
    });

    it('should return the same string when decoding a string with single characters only', () => {
      const result = decode('XYZ');
      const expected = 'XYZ';
      expect(result).toEqual(expected);
    });

    it('should decode a string with no single characters', () => {
      const result = decode('2A3B4C');
      const expected = 'AABBBCCCC';
      expect(result).toEqual(expected);
    });

    it('should decode a string with single characters mixed with repeated characters', () => {
      const result = decode('12WB12W3B24WB');
      const expected = 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB';
      expect(result).toEqual(expected);
    });

    it('should decode a string with multiple whitespaces', () => {
      const result = decode('2 hs2q q2w2 ');
      const expected = '  hsqq qww  ';
      expect(result).toEqual(expected);
    });

    it('should decode a string with lowercase characters', () => {
      const result = decode('2a3b4c');
      const expected = 'aabbbcccc';
      expect(result).toEqual(expected);
    });
  });

  describe('Encoding and Decoding', () => {
    it('should return the original string when encoding followed by decoding', () => {
      const result = decode(encode('zzz ZZ  zZ'));
      const expected = 'zzz ZZ  zZ';
      expect(result).toEqual(expected);
    });

    it('should return the original string when encoding followed by decoding (Large String)', () => {
      const originalLongString = 'a'.repeat(1000) + 'b'.repeat(500) + 'c'.repeat(250);
      const encoded = encode(originalLongString);
      const expectedEncoded = '1000a500b250c';
      expect(encoded).toEqual(expectedEncoded);
      const decoded = decode(encoded);
      expect(decoded).toEqual(originalLongString);
    });
  });
});
