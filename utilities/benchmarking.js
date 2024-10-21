/**
 * measurePerformance - A utility function to measure the execution time of a function.
 *
 * This function takes a function (fn) and any number of arguments (...args),
 * measures how long it takes for the function to execute with the provided arguments,
 * and returns the duration in milliseconds.
 *
 * @param {Function} fn - The function whose performance is being measured.
 * @param {...any} args - The arguments to be passed to the function.
 * @returns {number} - The time taken for the function to execute in milliseconds.
 */
const measurePerformance = (fn, ...args) => {
  // Record the start time in milliseconds
  const start = performance.now();

  // Execute the function with the provided arguments
  fn(...args);

  // Record the end time in milliseconds
  const end = performance.now();

  // Calculate and return the time difference (execution time in milliseconds)
  return end - start;
};

// TODO: additional utility and benchmarking
export { measurePerformance };
