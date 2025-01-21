/**
 * APPROACH: Optimized Approach using Monotonic Stack
 * Time: O(n) - Each temperature is pushed and popped from the stack at most once
 * Space: O(n) - Due to the stack and result array
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
export function dailyTemperatures(temperatures) {
  const n = temperatures.length; // Total number of days
  const result = new Array(n).fill(0); // Pre-fill result with 0s, as default for "no warmer day"
  const stack = []; // Stack to store indices of temperatures in decreasing order

  // Traverse the temperatures array
  for (let i = 0; i < n; i++) {
    // While the current temperature is greater than the temperature at the index stored on top of the stack
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      // Get the index of the last stored temperature
      const prevIndex = stack.pop();
      // Calculate the difference in days and store in the result array
      result[prevIndex] = i - prevIndex;
    }
    // Push the current index onto the stack
    stack.push(i);
  }

  return result;
}

/**
 * APPROACH: Optimized Naive Brute Force (Time Limit Exceeded)
 * Time: O(n^2) - Still checks all future dates for each element
 * Space: O(n) - due to size of answer array
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
export function dailyTemperaturesNaive(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0); // Pre-fill result array with 0s

  for (let i = 0; i < n - 1; i++) {
    const currTemp = temperatures[i];
    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > currTemp) {
        result[i] = j - i; // Store the difference directly
        break; // No need to check further
      }
    }
  }

  return result;
}
