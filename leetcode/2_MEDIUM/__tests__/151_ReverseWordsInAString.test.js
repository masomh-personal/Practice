import { reverseWords } from '../151_ReverseWordsInAString.js'; // Adjust the path accordingly

describe('reverseWords', () => {
  it('should reverse the words in a regular sentence', () => {
    const input = 'the sky is blue';
    const output = 'blue is sky the';
    expect(reverseWords(input)).toBe(output);
  });

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hello world  ';
    const output = 'world hello';
    expect(reverseWords(input)).toBe(output);
  });

  it('should handle multiple spaces between words and reduce them to a single space', () => {
    const input = 'a   good   example';
    const output = 'example good a';
    expect(reverseWords(input)).toBe(output);
  });

  it('should handle a single word input', () => {
    const input = 'word';
    const output = 'word';
    expect(reverseWords(input)).toBe(output);
  });

  it('should handle input with numbers and letters', () => {
    const input = 'abc 123 def 456';
    const output = '456 def 123 abc';
    expect(reverseWords(input)).toBe(output);
  });

  it('should handle an input with a mix of upper and lower case letters', () => {
    const input = 'The Sky Is Blue';
    const output = 'Blue Is Sky The';
    expect(reverseWords(input)).toBe(output);
  });

  it('should handle input with only spaces between words', () => {
    const input = 'a   b c';
    const output = 'c b a';
    expect(reverseWords(input)).toBe(output);
  });
});
