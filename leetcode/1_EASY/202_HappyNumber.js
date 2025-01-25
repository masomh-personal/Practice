/**
 * Approach: HashSet "seen" check for cycles
 * Time: O(log n) per iteration, where n is the input number
 * Space: O(U), where U is the number of unique sums encountered
 *
 * @param {number} n
 * @return {boolean}
 */
export function isHappy(n) {
  // Calculates the sum of the squares of digits
  // Using coercion for easy readability
  const getSum = (num) => {
    let sum = 0;
    const numStr = num.toString(); // Convert the number to a string once

    // Iterate over each character of the string representation of the number
    for (const digit of numStr) {
      sum += (+digit) ** 2; // Convert the character to a number and square it
    }

    return sum;
  };

  const seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false; // Cycle detected, not a happy number
    seen.add(n); // Track the current number
    n = getSum(n); // Calculate the sum of squares of digits
  }

  return true; // Found a happy number
}

/**
 * Approach: Floyd's Cycle Detection Algorithm
 * Time: O(log n) per iteration, where n is the input number
 * Space: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
export function isHappyFloyd(n) {
  // Helper to calculate the sum of the squares of digits
  // Using arithmetic approach without explicit coercion
  const getSum = (num) => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10; // Extract the last digit
      sum += digit ** 2; // Square it and add to sum
      num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
  };

  let slow = n; // Slow pointer
  let fast = getSum(n); // Fast pointer (moves two steps initially)

  while (fast !== 1) {
    slow = getSum(slow); // Move slow pointer by one step
    fast = getSum(getSum(fast)); // Move fast pointer by two steps

    if (slow === fast) return false; // cycle detected
  }

  return true; // happy number!
}
