import { countWords } from '../WordCount.js';

describe('countWords', () => {
  it('count one word', () => {
    const result = countWords('word');
    const expectedCounts = { word: 1 };
    expect(result).toEqual(expectedCounts);
  });

  it('count one of each word', () => {
    const result = countWords('one of each');
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(result).toEqual(expectedCounts);
  });

  it('multiple occurrences of a word', () => {
    const result = countWords('one fish two fish red fish blue fish');
    const expectedCounts = {
      one: 1,
      fish: 4,
      two: 1,
      red: 1,
      blue: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('handles cramped lists', () => {
    const result = countWords('one,two,three');
    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('handles expanded lists', () => {
    const result = countWords('one,\ntwo,\nthree');
    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('ignore punctuation', () => {
    const result = countWords('car: carpet as java: javascript!!&@$%^&');
    const expectedCounts = {
      car: 1,
      carpet: 1,
      as: 1,
      java: 1,
      javascript: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('include numbers', () => {
    const result = countWords('testing, 1, 2 testing');
    const expectedCounts = {
      testing: 2,
      1: 1,
      2: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('normalize case', () => {
    const result = countWords('go Go GO Stop stop');
    const expectedCounts = {
      go: 3,
      stop: 2,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('with apostrophes', () => {
    const result = countWords("First: don't laugh. Then: don't cry.");
    const expectedCounts = {
      first: 1,
      "don't": 2,
      laugh: 1,
      then: 1,
      cry: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('with quotations', () => {
    const result = countWords("Joe can't tell between 'large' and large.");
    const expectedCounts = {
      joe: 1,
      "can't": 1,
      tell: 1,
      between: 1,
      large: 2,
      and: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('substrings from the beginning', () => {
    const result = countWords("Joe can't tell between app, apple and a.");
    const expectedCounts = {
      joe: 1,
      "can't": 1,
      tell: 1,
      between: 1,
      app: 1,
      apple: 1,
      and: 1,
      a: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('multiple spaces not detected as a word', () => {
    const result = countWords(' multiple   whitespaces');
    const expectedCounts = {
      multiple: 1,
      whitespaces: 1,
    };
    expect(result).toEqual(expectedCounts);
  });

  it('alternating word separators not detected as a word', () => {
    const result = countWords(",\n,one,\n ,two \n 'three'");
    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1,
    };
    expect(result).toEqual(expectedCounts);
  });
});
