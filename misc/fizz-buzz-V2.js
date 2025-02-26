/**
 * Time: O(n) - We loop from 1 to n once
 * Space: O(1) - Only a small array is used and reused each iteration
 * @param {number} n - The upper limit of the FizzBuzz sequence
 * @return {Array<string|number>} - Array of FizzBuzz results
 */
export function fizzBuzzV2(n) {
  const overallResults = []; // Store the results to return

  for (let i = 1; i <= n; i++) {
    const result = []; // Collects parts of the output for this iteration

    // Check divisibility by 3
    if (i % 3 === 0) result.push('Fizz');
    // Check divisibility by 5
    if (i % 5 === 0) result.push('Buzz');

    // Join array into a string, or use the number if empty
    overallResults.push(result.length > 0 ? result.join('') : i);
  }

  return overallResults;
}
