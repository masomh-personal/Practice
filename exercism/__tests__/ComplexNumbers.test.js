import { ComplexNumber } from '../ComplexNumbers.js';
// Vitest Test File for Exercism: Complex Numbers

describe('ComplexNumber', () => {
  describe('Basic Properties', () => {
    it('should return the real part of a purely real number', () => {
      const z = new ComplexNumber(1, 0);
      const result = z.real;
      const expected = 1;
      expect(result).toEqual(expected);
    });

    it('should return the real part of a purely imaginary number', () => {
      const z = new ComplexNumber(0, 1);
      const result = z.real;
      const expected = 0;
      expect(result).toEqual(expected);
    });

    it('should return the real part of a number with real and imaginary part', () => {
      const z = new ComplexNumber(1, 2);
      const result = z.real;
      const expected = 1;
      expect(result).toEqual(expected);
    });

    it('should return the imaginary part of a purely real number', () => {
      const z = new ComplexNumber(1, 0);
      const result = z.imag;
      const expected = 0;
      expect(result).toEqual(expected);
    });

    it('should return the imaginary part of a purely imaginary number', () => {
      const z = new ComplexNumber(0, 1);
      const result = z.imag;
      const expected = 1;
      expect(result).toEqual(expected);
    });

    it('should return the imaginary part of a number with real and imaginary part', () => {
      const z = new ComplexNumber(1, 2);
      const result = z.imag;
      const expected = 2;
      expect(result).toEqual(expected);
    });
  });

  describe('Addition', () => {
    it('should add purely real numbers', () => {
      const z1 = new ComplexNumber(1, 0);
      const z2 = new ComplexNumber(2, 0);
      const result = z1.add(z2);
      const expected = new ComplexNumber(3, 0);
      expect(result).toEqual(expected);
    });

    it('should add purely imaginary numbers', () => {
      const z1 = new ComplexNumber(0, 1);
      const z2 = new ComplexNumber(0, 2);
      const result = z1.add(z2);
      const expected = new ComplexNumber(0, 3);
      expect(result).toEqual(expected);
    });

    it('should add numbers with real and imaginary parts', () => {
      const z1 = new ComplexNumber(1, 2);
      const z2 = new ComplexNumber(3, 4);
      const result = z1.add(z2);
      const expected = new ComplexNumber(4, 6);
      expect(result).toEqual(expected);
    });
  });

  describe('Subtraction', () => {
    it('should subtract purely real numbers', () => {
      const z1 = new ComplexNumber(1, 0);
      const z2 = new ComplexNumber(2, 0);
      const result = z1.sub(z2);
      const expected = new ComplexNumber(-1, 0);
      expect(result).toEqual(expected);
    });

    it('should subtract purely imaginary numbers', () => {
      const z1 = new ComplexNumber(0, 1);
      const z2 = new ComplexNumber(0, 2);
      const result = z1.sub(z2);
      const expected = new ComplexNumber(0, -1);
      expect(result).toEqual(expected);
    });

    it('should subtract numbers with real and imaginary parts', () => {
      const z1 = new ComplexNumber(1, 2);
      const z2 = new ComplexNumber(3, 4);
      const result = z1.sub(z2);
      const expected = new ComplexNumber(-2, -2);
      expect(result).toEqual(expected);
    });
  });

  describe('Multiplication', () => {
    it('should multiply purely real numbers', () => {
      const z1 = new ComplexNumber(1, 0);
      const z2 = new ComplexNumber(2, 0);
      const result = z1.mul(z2);
      const expected = new ComplexNumber(2, 0);
      expect(result).toEqual(expected);
    });

    it('should multiply imaginary units', () => {
      const z1 = new ComplexNumber(0, 1);
      const z2 = new ComplexNumber(0, 1);
      const result = z1.mul(z2);
      const expected = new ComplexNumber(-1, 0);
      expect(result).toEqual(expected);
    });

    it('should multiply numbers with real and imaginary parts', () => {
      const z1 = new ComplexNumber(1, 2);
      const z2 = new ComplexNumber(3, 4);
      const result = z1.mul(z2);
      const expected = new ComplexNumber(-5, 10);
      expect(result).toEqual(expected);
    });
  });

  describe('Division', () => {
    it('should divide purely real numbers', () => {
      const z1 = new ComplexNumber(1, 0);
      const z2 = new ComplexNumber(2, 0);
      const result = z1.div(z2);
      const expected = new ComplexNumber(0.5, 0);
      expect(result).toEqual(expected);
    });

    it('should divide numbers with real and imaginary parts', () => {
      const z1 = new ComplexNumber(1, 2);
      const z2 = new ComplexNumber(3, 4);
      const result = z1.div(z2);
      const expected = new ComplexNumber(0.44, 0.08);
      expect(result.real).toBeCloseTo(expected.real, 2);
      expect(result.imag).toBeCloseTo(expected.imag, 2);
    });
  });

  describe('Absolute Value', () => {
    it('should calculate the absolute value', () => {
      const z = new ComplexNumber(3, 4);
      const result = z.abs;
      const expected = 5;
      expect(result).toEqual(expected);
    });
  });

  describe('Conjugate', () => {
    it('should conjugate a number with real and imaginary parts', () => {
      const z = new ComplexNumber(1, 1);
      const result = z.conj;
      const expected = new ComplexNumber(1, -1);
      expect(result).toEqual(expected);
    });
  });

  describe('Exponentiation', () => {
    it("should satisfy Euler's identity/formula", () => {
      const z = new ComplexNumber(0, Math.PI);
      const result = z.exp;
      const expected = new ComplexNumber(-1, 0);
      expect(result.real).toBeCloseTo(expected.real, 5);
      expect(result.imag).toBeCloseTo(expected.imag, 5);
    });
  });
});
