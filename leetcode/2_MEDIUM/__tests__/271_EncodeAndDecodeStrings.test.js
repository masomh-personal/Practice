import {
  encode,
  decode,
  encodeLengthPrefix,
  decodeLengthPrefix,
  DELIMITER,
} from '../271_EncodeAndDecodeStrings.js';

describe('Leetcode #271: Encode and Decode Strings', () => {
  describe('Delimiter-Based Encoding', () => {
    it('should encode and decode a normal case with multiple words', () => {
      const input = ['hello', 'world', 'leet', 'code'];
      const encoded = encode(input);
      const expectedEncoded = `hello${DELIMITER}world${DELIMITER}leet${DELIMITER}code`;
      expect(encoded).toBe(expectedEncoded);
      const decoded = decode(encoded);
      expect(decoded).toEqual(input);
    });

    it('should handle the smallest input of one empty string', () => {
      const input = [''];
      const encoded = encode(input);
      const expectedEncoded = '';
      expect(encoded).toBe(expectedEncoded);
      const decoded = decode(encoded);
      expect(decoded).toEqual(input);
    });

    it('should handle multiple empty strings', () => {
      const input = ['', '', ''];
      const encoded = encode(input);
      const expectedEncoded = `${DELIMITER}${DELIMITER}`;
      expect(encoded).toBe(expectedEncoded);
      const decoded = decode(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array with one character per string', () => {
      const input = ['a', 'b', 'c', 'd'];
      const encoded = encode(input);
      const expectedEncoded = `a${DELIMITER}b${DELIMITER}c${DELIMITER}d`;
      expect(encoded).toBe(expectedEncoded);
      const decoded = decode(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array with strings containing spaces and special characters', () => {
      const input = ['hello world!', 'this#is#a#test', 'foo@bar$baz'];
      const encoded = encode(input);
      const decoded = decode(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array containing all 256 ASCII characters in a string', () => {
      const input = [Array.from({ length: 256 }, (_, i) => String.fromCharCode(i)).join('')];
      const encoded = encode(input);
      const decoded = decode(encoded);
      expect(decoded).toEqual(input);
    });
  });

  describe('Length-Prefix Encoding', () => {
    it('should encode and decode a normal case with multiple words', () => {
      const input = ['hello', 'world', 'leet', 'code'];
      const encoded = encodeLengthPrefix(input);
      const expectedEncoded = `5#hello5#world4#leet4#code`;
      expect(encoded).toBe(expectedEncoded);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });

    it('should handle an empty string', () => {
      const input = [''];
      const encoded = encodeLengthPrefix(input);
      const expectedEncoded = `0#`;
      expect(encoded).toBe(expectedEncoded);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });

    it('should handle multiple empty strings', () => {
      const input = ['', '', ''];
      const encoded = encodeLengthPrefix(input);
      const expectedEncoded = `0#0#0#`;
      expect(encoded).toBe(expectedEncoded);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array with one character per string', () => {
      const input = ['a', 'b', 'c', 'd'];
      const encoded = encodeLengthPrefix(input);
      const expectedEncoded = `1#a1#b1#c1#d`;
      expect(encoded).toBe(expectedEncoded);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array with strings containing numbers and symbols', () => {
      const input = ['123', '!@#$%^&*()', '9*8*7*6'];
      const encoded = encodeLengthPrefix(input);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array containing all 256 ASCII characters in a string', () => {
      const input = [Array.from({ length: 256 }, (_, i) => String.fromCharCode(i)).join('')];
      const encoded = encodeLengthPrefix(input);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array where each string is of maximum length 200', () => {
      const longString = 'a'.repeat(200);
      const input = Array.from({ length: 5 }, () => longString);
      const encoded = encodeLengthPrefix(input);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });

    it('should correctly encode and decode an array with the worst-case scenario (200 strings of 200 characters each)', () => {
      const maxString = 'x'.repeat(200);
      const input = Array.from({ length: 200 }, () => maxString);
      const encoded = encodeLengthPrefix(input);
      const decoded = decodeLengthPrefix(encoded);
      expect(decoded).toEqual(input);
    });
  });
});
