/**
 * Calculates the ratios of positive, negative, and zero values in an array.
 * Returns an object with the ratios formatted to six decimal places.
 *
 * Time Complexity: O(n) - Iterates through the array once.
 * Space Complexity: O(1) - Uses constant space for counting variables.
 *
 * @param {number[]} arr - The input array of integers.
 * @return {{positiveRatio: string, negativeRatio: string, zeroRatio: string}}
 *  - positiveRatio: Ratio of positive numbers as a string with six decimal places.
 *  - negativeRatio: Ratio of negative numbers as a string with six decimal places.
 *  - zeroRatio: Ratio of zeros as a string with six decimal places.
 */
export function plusMinus(arr) {
  if (arr.length === 0) {
    return {
      positiveRatio: '0.000000',
      negativeRatio: '0.000000',
      zeroRatio: '0.000000',
    };
  }

  const n = arr.length;
  let numPositives = 0;
  let numNegatives = 0;
  let numZeroes = 0;

  for (const num of arr) {
    if (num === 0) {
      numZeroes++;
    } else if (num > 0) {
      numPositives++;
    } else {
      numNegatives++;
    }
  }

  const DECIMAL_PLACES = 6;

  return {
    positiveRatio: (numPositives / n).toFixed(DECIMAL_PLACES),
    negativeRatio: (numNegatives / n).toFixed(DECIMAL_PLACES),
    zeroRatio: (numZeroes / n).toFixed(DECIMAL_PLACES),
  };
}
