/*
 * FizzBuzz function
 * For every number from 1 to n:
 * - If divisible by 3, return "Fizz"
 * - If divisible by 5, return "Buzz"
 * - If divisible by both 3 and 5, return "FizzBuzz"
 * - Otherwise, return the number itself
 */

export const fizzBuzz = (n) => {
  // Helper function to check if a number is divisible by 3
  const isMult3 = (num) => num % 3 === 0;

  // Helper function to check if a number is divisible by 5
  const isMult5 = (num) => num % 5 === 0;

  // Constants for the Fizz and Buzz strings
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';

  // Array to store the results
  let results = [];

  // Loop through numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    const test3 = isMult3(i); // Check divisibility by 3
    const test5 = isMult5(i); // Check divisibility by 5

    // If divisible by both 3 and 5, add "FizzBuzz" to results
    if (test3 && test5) {
      results.push(`${FIZZ}${BUZZ}`);
    }
    // If divisible only by 3, add "Fizz" to results
    else if (test3) {
      results.push(FIZZ);
    }
    // If divisible only by 5, add "Buzz" to results
    else if (test5) {
      results.push(BUZZ);
    }
    // If divisible by neither, add the number itself to results
    else {
      results.push(i);
    }
  }

  // Return the array of results
  return results;
};
