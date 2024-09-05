/**
 * @param {number} n
 * @return {number}
 */
export const fib = (n) => {
  if (n === 0) return 0; // Base case: fib(0) = 0
  if (n <= 2) return 1; // Base case: fib(1) = fib(2) = 1

  const miniCache = [1, 1]; // Initialize with fib(1) and fib(2)

  // Iterate from 3 to n, updating miniCache with latest values
  for (let i = 3; i <= n; i++) {
    const temp = miniCache[0]; // Store the old fib(n-2)
    miniCache[0] = miniCache[1]; // Shift fib(n-1) to fib(n-2)
    miniCache[1] = temp + miniCache[1]; // Calculate fib(n)
  }

  return miniCache.at(-1); // Return the latest Fibonacci number
};
