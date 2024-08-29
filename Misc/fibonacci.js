/**
 * Solving the Fibonacci sequence in three different approaches
 */

// 1) Brute Force: T:O(2 ** n) / S:O(n)
const fibBrute = (n) => {
  if (n === 0) return 0; // Base case: fib(0) = 0
  if (n <= 2) return 1; // Base case: fib(1) = fib(2) = 1

  // Recursive call: sum of the two preceding numbers
  return fibBrute(n - 1) + fibBrute(n - 2);
};

// 2) Memoization (Top Down): T:O(n) / S:O(n)
const fibMemo = (
  n,
  cache = new Map([
    [0, 0], // Base case: fib(0) = 0
    [1, 1], // Base case: fib(1) = 1
    [2, 1], // Base case: fib(2) = 1
  ])
) => {
  if (cache.has(n)) return cache.get(n); // Return cached result if available

  // Store and return the computed value
  cache.set(n, fibMemo(n - 1) + fibMemo(n - 2));
  return cache.get(n);
};

// 3) DP (Bottom Up): T:O(n) / S:O(1)
const fibDp = (n) => {
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

export { fibBrute, fibMemo, fibDp };
