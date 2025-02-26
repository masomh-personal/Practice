import { fizzBuzzV2 } from '../fizz-buzz-V2.js';

describe('HackerRank: FizzBuzz', () => {
  it('should return numbers from 1 to 5 with Fizz and Buzz replacements', () => {
    const result = fizzBuzzV2(5);
    const expected = [1, 2, 'Fizz', 4, 'Buzz'];
    expect(result).toEqual(expected);
  });

  it('should return FizzBuzz for numbers divisible by both 3 and 5', () => {
    const result = fizzBuzzV2(15);
    const expected = [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ];
    expect(result).toEqual(expected);
  });

  it('should return only numbers when no FizzBuzz conditions are met', () => {
    const result = fizzBuzzV2(2);
    const expected = [1, 2];
    expect(result).toEqual(expected);
  });

  it('should handle edge case of n = 0 by returning an empty array', () => {
    const result = fizzBuzzV2(0);
    const expected = [];
    expect(result).toEqual(expected);
  });

  it('should correctly return Fizz for multiples of 3 and Buzz for multiples of 5', () => {
    const result = fizzBuzzV2(10);
    const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
    expect(result).toEqual(expected);
  });
});
