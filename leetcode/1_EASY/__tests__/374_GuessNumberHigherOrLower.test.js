import { guessNumber } from '../374_GuessNumberHigherOrLower.js';

describe('guessNumber', () => {
  const createGuessFunction = (pickedNumber) => {
    return (num) => {
      if (num > pickedNumber) return -1;
      if (num < pickedNumber) return 1;
      return 0;
    };
  };

  it('should return 6 when n is 10 and pick is 6', () => {
    const guess = createGuessFunction(6);
    const n = 10;
    const result = guessNumber(n, guess);
    expect(result).toBe(6);
  });

  it('should return 1 when n is 1 and pick is 1', () => {
    const guess = createGuessFunction(1);
    const n = 1;
    const result = guessNumber(n, guess);
    expect(result).toBe(1);
  });

  it('should return 1 when n is 2 and pick is 1', () => {
    const guess = createGuessFunction(1);
    const n = 2;
    const result = guessNumber(n, guess);
    expect(result).toBe(1);
  });

  it('should return 2 when n is 2 and pick is 2', () => {
    const guess = createGuessFunction(2);
    const n = 2;
    const result = guessNumber(n, guess);
    expect(result).toBe(2);
  });

  it('should handle large numbers and return the correct pick', () => {
    const guess = createGuessFunction(500000);
    const n = 1000000;
    const result = guessNumber(n, guess);
    expect(result).toBe(500000);
  });
});
