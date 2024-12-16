import { wordBreak, wordBreakBFS } from '../139_WordBreak.js';

describe('Leetcode #139: "Word Break"', () => {
  const testCases = [
    {
      description: "should return true for s = 'leetcode' and wordDict = ['leet', 'code']",
      s: 'leetcode',
      wordDict: ['leet', 'code'],
      expected: true,
    },
    {
      description: "should return true for s = 'applepenapple' and wordDict = ['apple', 'pen']",
      s: 'applepenapple',
      wordDict: ['apple', 'pen'],
      expected: true,
    },
    {
      description:
        "should return false for s = 'catsandog' and wordDict = ['cats', 'dog', 'sand', 'and', 'cat']",
      s: 'catsandog',
      wordDict: ['cats', 'dog', 'sand', 'and', 'cat'],
      expected: false,
    },
    {
      description: "should return false for s = 'a' and wordDict = ['b']",
      s: 'a',
      wordDict: ['b'],
      expected: false,
    },
    {
      description: "should return true for s = 'aaaaaaaaaa' and wordDict = ['a', 'aa', 'aaa']",
      s: 'aaaaaaaaaa',
      wordDict: ['a', 'aa', 'aaa'],
      expected: true,
    },
    {
      description: "should return false for s = 'aaaaaaaaaa' and wordDict = ['b', 'bb', 'bbb']",
      s: 'aaaaaaaaaa',
      wordDict: ['b', 'bb', 'bbb'],
      expected: false,
    },
  ];

  describe('Testing wordBreak (Recursive + Memoization)', () => {
    testCases.forEach(({ description, s, wordDict, expected }) => {
      it(description, () => {
        const result = wordBreak(s, wordDict);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Testing wordBreakBFS (Breadth-First Search)', () => {
    testCases.forEach(({ description, s, wordDict, expected }) => {
      it(description, () => {
        const result = wordBreakBFS(s, wordDict);
        expect(result).toBe(expected);
      });
    });
  });
});
