/**
 * Executes a function immediately and repeatedly at specified intervals.
 * NOTE: not creating tests for this due to complexity with timers
 *
 * TIME: O(1) - Setting up the interval and returning the cancel function are constant-time operations.
 * SPACE: O(1) - No additional data structures are used; only a single timer ID is stored.
 *
 * @param {Function} fn - The function to be called at each interval.
 * @param {Array} args - Arguments to be passed to the function.
 * @param {number} t - Interval time in milliseconds.
 * @return {Function} - A cancel function to stop the interval execution.
 */
export function cancellable(fn, args, t) {
  // Call the function immediately with the provided arguments
  fn(...args);

  // Schedule the function to be executed repeatedly every `t` milliseconds
  const timer = setInterval(() => fn(...args), t);

  // Return a function that, when called, clears the interval to stop further executions
  return () => clearInterval(timer);
}
