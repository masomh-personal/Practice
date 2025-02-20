export class ComplexNumber {
  #real;
  #imag;

  constructor(real, imag) {
    if (real === undefined || imag === undefined) {
      throw new Error('A complex number must have a real and imaginary number');
    }

    this.#real = real;
    this.#imag = imag;
  }

  // Returns the real part of the complex number
  get real() {
    return this.#real;
  }

  // Returns the imaginary part of the complex number
  get imag() {
    return this.#imag;
  }

  // Adds two complex numbers
  add(cNum) {
    const { a, b, c, d } = this.#getAllVariables(cNum);
    const real = a + c;
    const imaginary = b + d;
    return new ComplexNumber(real, imaginary);
  }

  // Subtracts one complex number from another
  sub(cNum) {
    const { a, b, c, d } = this.#getAllVariables(cNum);
    const real = a - c;
    const imaginary = b - d;
    return new ComplexNumber(real, imaginary);
  }

  // Divides this complex number by another
  div(cNum) {
    const { a, b, c, d } = this.#getAllVariables(cNum);
    const denominator = c ** 2 + d ** 2;
    const real = (a * c + b * d) / denominator;
    const imaginary = (b * c - a * d) / denominator;

    return new ComplexNumber(real, imaginary);
  }

  // Multiplies two complex numbers
  mul(cNum) {
    const { a, b, c, d } = this.#getAllVariables(cNum);
    const real = a * c - b * d;
    const imaginary = b * c + a * d;

    return new ComplexNumber(real, imaginary);
  }

  // Calculates the absolute value (modulus) of the complex number
  get abs() {
    const { real: a, imag: b } = this;
    return Math.sqrt(a ** 2 + b ** 2);
  }

  // Returns the conjugate of the complex number
  get conj() {
    const { real: a, imag: b } = this;
    return new ComplexNumber(a, -b);
  }

  // Calculates the exponential of the complex number using Euler's formula
  get exp() {
    const { real: a, imag: b } = this;
    const expReal = Math.exp(a); // e^a
    const real = expReal * Math.cos(b); // e^a * cos(b)
    const imaginary = expReal * Math.sin(b); // e^a * sin(b)

    return new ComplexNumber(real, imaginary);
  }

  // Utility method to destructure all variables for cleaner calculations
  #getAllVariables(cNum) {
    const { real: a, imag: b } = this;
    const { real: c, imag: d } = cNum;
    return { a, b, c, d };
  }
}
