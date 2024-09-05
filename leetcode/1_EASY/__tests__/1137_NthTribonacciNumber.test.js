import { tribonacci } from '../1137_NthTribonacciNumber.js';

describe('Tribonacci Function', () => {
  it('should return 0 for n = 0', () => {
    expect(tribonacci(0)).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    expect(tribonacci(1)).toBe(1);
  });

  it('should return 1 for n = 2', () => {
    expect(tribonacci(2)).toBe(1);
  });

  it('should return 2 for n = 3', () => {
    expect(tribonacci(3)).toBe(2);
  });

  it('should return 4 for n = 4', () => {
    expect(tribonacci(4)).toBe(4);
  });

  it('should return 7 for n = 5', () => {
    expect(tribonacci(5)).toBe(7);
  });

  it('should return 13 for n = 6', () => {
    expect(tribonacci(6)).toBe(13);
  });

  it('should return 24 for n = 7', () => {
    expect(tribonacci(7)).toBe(24);
  });

  it('should return 44 for n = 8', () => {
    expect(tribonacci(8)).toBe(44);
  });

  it('should return 81 for n = 9', () => {
    expect(tribonacci(9)).toBe(81);
  });

  it('should return 149 for n = 10', () => {
    expect(tribonacci(10)).toBe(149);
  });

  it('should handle larger values like n = 25', () => {
    expect(tribonacci(25)).toBe(1_389_537);
  });

  it('should handle larger values like n = 45', () => {
    expect(tribonacci(45)).toBe(272_809_183_135);
  });
});
