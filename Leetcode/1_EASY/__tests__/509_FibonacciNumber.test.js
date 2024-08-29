import { fib } from '../509_FibonacciNumber.js'; // Adjust the path as needed

describe('Fibonacci Function', () => {
  it('should return 0 for n = 0', () => {
    expect(fib(0)).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    expect(fib(1)).toBe(1);
  });

  it('should return 1 for n = 2', () => {
    expect(fib(2)).toBe(1);
  });

  it('should return 2 for n = 3', () => {
    expect(fib(3)).toBe(2);
  });

  it('should return 3 for n = 4', () => {
    expect(fib(4)).toBe(3);
  });

  it('should return 5 for n = 5', () => {
    expect(fib(5)).toBe(5);
  });

  it('should return 21 for n = 8', () => {
    expect(fib(8)).toBe(21);
  });

  it('should return 55 for n = 10', () => {
    expect(fib(10)).toBe(55);
  });

  it('should return 6765 for n = 20', () => {
    expect(fib(20)).toBe(6_765);
  });

  it('should return 1134903170 for n = 45', () => {
    expect(fib(45)).toBe(1_134_903_170);
  });
});
