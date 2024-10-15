import { fizzBuzz } from '../fizz-buzz.js';

describe('FizzBuzz', () => {
  it('should return correct FizzBuzz sequence for n = 15', () => {
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
    const result = fizzBuzz(15);
    expect(result).toEqual(expected);
  });

  it('should handle n = 3 with one Fizz', () => {
    const expected = [1, 2, 'Fizz'];
    const result = fizzBuzz(3);
    expect(result).toEqual(expected);
  });

  it('should handle n = 5 with one Fizz and one Buzz', () => {
    const expected = [1, 2, 'Fizz', 4, 'Buzz'];
    const result = fizzBuzz(5);
    expect(result).toEqual(expected);
  });

  it('should return the correct output for n = 1', () => {
    const expected = [1];
    const result = fizzBuzz(1);
    expect(result).toEqual(expected);
  });
});
