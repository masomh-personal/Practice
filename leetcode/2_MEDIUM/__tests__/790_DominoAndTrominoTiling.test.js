import { numTilings } from '../790_DominoAndTrominoTiling.js';

describe('Domino and Tromino Tiling - Naive Implementation', () => {
  it('should return the correct number of ways for n = 1', () => {
    const n = 1;
    const result = numTilings(n);
    const expected = 1;
    expect(result).toBe(expected);
  });

  it('should return the correct number of ways for n = 2', () => {
    const n = 2;
    const result = numTilings(n);
    const expected = 2;
    expect(result).toBe(expected);
  });

  it('should return the correct number of ways for n = 3', () => {
    const n = 3;
    const result = numTilings(n);
    const expected = 5;
    expect(result).toBe(expected);
  });

  it('should return the correct number of ways for n = 10', () => {
    const n = 10;
    const result = numTilings(n);
    const expected = 1_255; // Pre-calculated
    expect(result).toBe(expected);
  });

  it('should return the correct number of ways for large n', () => {
    const n = 1000;
    const result = numTilings(n);
    const expected = 979_232_805; // Pre-calculated
    expect(result).toBe(expected);
  });
});
