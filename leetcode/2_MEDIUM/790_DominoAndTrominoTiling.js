/**
 * 790. Domino and Tromino Tiling
 * Approach: Dynamic Programming (Tabulation)
 *
 * Time Complexity: O(n) - We iterate through all values from 4 to n.
 * Space Complexity: O(1) - We only use a fixed number of variables for state.
 *
 * @param {number} n - The size of the board (2 x n).
 * @return {number} - The number of ways to tile the board modulo 1,000,000,007.
 */
export function numTilings(n) {
  const MOD = 1_000_000_007; // Modulo constant

  // Handle small cases directly
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  // Initialize base states:
  // d1 -> f(n-2), the number of ways to tile a (2 x (n-2)) board
  // d2 -> f(n-1), the number of ways to tile a (2 x (n-1)) board
  // d3 -> f(n), the number of ways to tile a (2 x n) board (current state)
  let d1 = 1; // Base case: f(1)
  let d2 = 2; // Base case: f(2)
  let d3 = 5; // Base case: f(3)

  // Iterate from 4 to n, updating the states iteratively
  for (let i = 4; i <= n; i++) {
    // Calculate the new state f(n) using the recurrence relation/formula:
    // f(n) = 2 * f(n-1) + f(n-3)
    let dpCurr = (2 * d3 + d1) % MOD;

    // Shift the states forward (destructuring swap)
    [d1, d2, d3] = [d2, d3, dpCurr];
  }

  // Return the final computed state f(n), which represents the number of ways to tile a 2 x n board
  return d3;
}
