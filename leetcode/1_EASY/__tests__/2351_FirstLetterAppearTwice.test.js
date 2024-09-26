import { repeatedCharacter, repeatedCharacterSet } from '../2351_FirstLetterAppearTwice.js';

describe('repeatedCharacter and repeatedCharacterSet', () => {
  const testCases = [
    {
      input: 'abccbaacz',
      expectedOutput: 'c',
    },
    {
      input: 'abcdd',
      expectedOutput: 'd',
    },
    {
      input: 'aabbcc',
      expectedOutput: 'a',
    },
    {
      input: 'acbdb',
      expectedOutput: 'b',
    },
    {
      input: 'abcdefghif',
      expectedOutput: 'f',
    },
    {
      input: 'zz',
      expectedOutput: 'z',
    },
    {
      input: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza', // Very long string
      expectedOutput: 'a',
    },
  ];

  describe('repeatedCharacter (Array approach)', () => {
    testCases.forEach(({ input, expectedOutput }) => {
      it(`should return "${expectedOutput}" for the input "${input}"`, () => {
        const result = repeatedCharacter(input);
        expect(result).toBe(expectedOutput);
      });
    });
  });

  describe('repeatedCharacterSet (Set approach)', () => {
    testCases.forEach(({ input, expectedOutput }) => {
      it(`should return "${expectedOutput}" for the input "${input}"`, () => {
        const result = repeatedCharacterSet(input);
        expect(result).toBe(expectedOutput);
      });
    });
  });
});
