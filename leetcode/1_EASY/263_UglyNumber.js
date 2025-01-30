/**
 * TIME: O(log n) (since n gets divided repeatedly by 2, 3, or 5)
 * SPACE: O(1) (only a few variables are used)
 * @param {number} n
 * @return {boolean}
 */
export function isUgly(n) {
  if (n <= 0) return false; // Ugly numbers are positive only
  if (n === 1) return true; // By definition

  const allowedFactors = [2, 3, 5]; // Allowed prime factors

  // Keep dividing n by allowed factors while possible
  for (const factor of allowedFactors) {
    while (n % factor === 0) {
      n /= factor;
    }
  }

  return n === 1; // If reduced fully to 1, it's an ugly number
}
