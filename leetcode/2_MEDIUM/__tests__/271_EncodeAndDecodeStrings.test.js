import { Codec } from '../271_EncodeAndDecodeStrings.js';

describe('Codec', () => {
  let codec;

  beforeEach(() => {
    codec = new Codec();
  });

  // Detailed example test
  it('should return the same array after encoding and decoding a simple list of strings', () => {
    const strArr = ['Hello', 'World'];

    // After encoding, `encoded` should be a single string where each element
    // is represented as "<length>#<string>". So, for `strArr = ['Hello', 'World']`:
    // - "Hello" has length 5, so it's encoded as "5#Hello".
    // - "World" also has length 5, so it's encoded as "5#World".
    // The final encoded string should be: "5#Hello5#World"
    const encoded = codec.encode(strArr);
    // encoded should be "5#Hello5#World"

    // After decoding, `decoded` should match the original array `strArr`.
    // Decoding the string "5#Hello5#World" involves:
    // - Reading "5" up to the first "#" (length of the first word).
    // - Extracting the next 5 characters ("Hello").
    // - Repeating for "5#World" to get "World".
    const decoded = codec.decode(encoded);
    // decoded should be ['Hello', 'World']

    expect(decoded).toEqual(strArr);
  });

  it('should handle a single empty string', () => {
    const strArr = [''];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle an array with multiple empty strings', () => {
    const strArr = ['', '', ''];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle strings with special characters', () => {
    const strArr = ['Hello#World', 'Test#123', 'String#With#Hashes'];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle strings with spaces', () => {
    const strArr = ['Hello World', 'This is a test', 'Encode and Decode'];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle strings with non-ASCII characters', () => {
    const strArr = ['こんにちは', '你好', '안녕하세요'];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle an empty array', () => {
    const strArr = [];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle a single long string', () => {
    const strArr = ['a'.repeat(200)];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle multiple long strings', () => {
    const strArr = ['a'.repeat(200), 'b'.repeat(150), 'c'.repeat(100)];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle a list of strings with different lengths', () => {
    const strArr = ['a', 'bb', 'ccc', 'dddd', 'eeeee', 'ffffff'];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle strings with numeric characters only', () => {
    const strArr = ['12345', '67890', '1234567890'];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });

  it('should handle Leetcode testcase #233 with a dummy input of: ["","vn"]', () => {
    const strArr = ['","vn'];
    const encoded = codec.encode(strArr);
    const decoded = codec.decode(encoded);
    expect(decoded).toEqual(strArr);
  });
});
