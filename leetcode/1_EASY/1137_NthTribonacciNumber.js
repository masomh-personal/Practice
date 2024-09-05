/**
 * Calculates the n-th Tribonacci number.
 * @param {number} n - The index of the Tribonacci sequence.
 * @return {number} - The n-th Tribonacci number.
 * Space: O(1)
 * Time: O(n)
 */
export const tribonacci = (n) => {
  if (n === 0) return 0; // Base case: tribonacci(0) = 0
  if (n <= 2) return 1; // Base case: tribonacci(1) = tribonacci(2) = 1

  let p3 = 0; // Initial value for tribonacci(n-3)
  let p2 = 1; // Initial value for tribonacci(n-2)
  let p1 = 1; // Initial value for tribonacci(n-1)

  // Iterate from 3 to n, updating p1, p2, and p3 in one step
  for (let i = 3; i <= n; i++) {
    [p3, p2, p1] = [p2, p1, p1 + p2 + p3]; // Update p3, p2, p1 (JS Destructuring)
  }

  return p1;
};
