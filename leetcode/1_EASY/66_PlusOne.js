/**
 * Approach: Using BigInt to handle all numbers safely, big or small
 * Time: O(n) where n is the length of the digits array
 * Space: O(n) for creating the string representation and the resulting array
 *
 * @param {number[]} digits - Array of digits representing a number
 * @return {number[]} - Array of digits representing the incremented number
 */
export function plusOne(digits) {
  // Combine digits into a single BigInt and add 1
  const normalizedCalculatedNum = BigInt(digits.join('')) + 1n;

  // Convert the resulting BigInt back to an array of digits
  return normalizedCalculatedNum
    .toString() // Convert BigInt to a string
    .split('') // Split string into individual characters
    .map((num) => +num); // Map characters back to numbers
}

/**
 * Approach: Direct manipulation on the array to handle carries manually
 * Time: O(n) where n is the length of the digits array
 * Space: O(n) in case of edge cases requiring a new array
 *
 * @param {number[]} digits - Array of digits representing a number
 * @return {number[]} - Array of digits representing the incremented number
 */
export function plusOneV2(digits) {
  let right = digits.length - 1;

  while (right >= 0) {
    if (digits[right] === 9) {
      digits[right] = 0; // Handle carry
    } else {
      digits[right] += 1; // Increment and stop
      return digits;
    }
    right--; // Move to the next digit
  }

  // If all digits were 9, prepend 1
  return [1, ...digits];
}

/**
 * Approach: Recursion
 * NOTE: The recursion depth may exceed the stack limit for very large inputs, making it
 *  less suitable for practical use in some environments.
 *
 * Time: O(n)
 * Space: O(n) (due to recursive stack for each digit)
 *
 * @param {number[]} digits
 * @return {number[]}
 */
export function plusOneRecursive(digits) {
  function recursiveHelper(index) {
    // Base case: we hae reached the beginning of array and need to prepend 1
    if (index < 0) {
      // If carry is left after processing all digits, prepend 1
      return [1, ...digits];
    }

    if (digits[index] === 9) {
      digits[index] = 0; // Set current digit to 0 and propagate carry
      return recursiveHelper(index - 1); // Recurse to the next digit
    } else {
      digits[index] += 1; // Increment current digit and stop recursion
      return digits;
    }
  }

  // Start recursive journey starting from last index
  return recursiveHelper(digits.length - 1);
}
