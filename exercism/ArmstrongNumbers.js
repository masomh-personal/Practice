/**
 * Determines if a number is an Armstrong number.
 * @param {bigint | number} num - The number to check.
 * @return {boolean} - True if num is an Armstrong number, otherwise false.
 */
export const isArmstrongNumber = (num) => {
  if (num < 10) return true; // Single-digit numbers are always Armstrong numbers

  const strNum = String(num);
  const numLength = strNum.length;

  if (numLength === 2) return false; // No two-digit Armstrong numbers exist

  const power = BigInt(numLength); // Precompute power once
  let sum = 0n; // Accumulator for sum

  // Compute sum without unnecessary BigInt conversions in every iteration
  for (const num of strNum) {
    sum += BigInt(num) ** power;
  }

  return sum === BigInt(num);
};
