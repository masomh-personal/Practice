import { isArmstrongNumber } from '../ArmstrongNumbers.js';

describe('Exercism: Armstrong Numbers', () => {
  it('Zero is an Armstrong number', () => {
    expect(isArmstrongNumber(0)).toBe(true);
  });

  it('Single-digit numbers are Armstrong numbers', () => {
    expect(isArmstrongNumber(5)).toBe(true);
  });

  it('There are no two-digit Armstrong numbers', () => {
    for (let i = 10; i <= 99; i++) {
      expect(isArmstrongNumber(i)).toBe(false);
    }
  });

  it('Three-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(153)).toBe(true);
  });

  it('Three-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(100)).toBe(false);
  });

  it('Four-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9474)).toBe(true);
  });

  it('Four-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9475)).toBe(false);
  });

  it('Seven-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9926315)).toBe(true);
  });

  it('Seven-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9926314)).toBe(false);
  });

  it('Armstrong number containing seven zeroes', () => {
    const bigInput = 186709961001538790100634132976990n;
    expect(isArmstrongNumber(bigInput)).toBe(true);
  });

  it('The largest and last Armstrong number', () => {
    const bigInput = 115132219018763992565095597973971522401n;
    expect(isArmstrongNumber(bigInput)).toBe(true);
  });
});
