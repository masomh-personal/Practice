/**
 * @description Finds the missing number in an array containing n distinct numbers from 0 to n
 *
 * Approach: Using a Set for O(1) lookups to efficiently find the missing number
 *
 * Time Complexity: O(n)
 * - Building the Set takes O(n) time
 * - Iterating through potential values takes O(n) time in worst case
 * - Set lookups are O(1)
 *
 * Space Complexity: O(n)
 * - The Set stores up to n elements from the input array
 *
 * @param nums Array of distinct integers in the range [0, n] with one number missing
 * @returns The missing number
 */
export function missingNumberNaive(nums: number[]): number {
  // Create a Set for O(1) lookups when checking if a number exists
  const numSet: Set<number> = new Set(nums);

  // The range should be from 0 to nums.length (inclusive)
  // since we're missing exactly one number from the range [0, n]
  const n = nums.length;

  // Check each number from 0 to n
  for (let i = 0; i <= n; i++) {
    // If the current number isn't in our set, we've found our missing number
    if (!numSet.has(i)) {
      return i;
    }
  }

  // This line should never be reached given the problem constraints
  return -1;
}

/**
 * @description Finds the missing number in an array containing n distinct numbers from 0 to n
 *
 * Approach: Mathematical approach using sum formula
 *
 * Time Complexity: O(n)
 * - Calculating the actual sum with reduce() takes O(n) time
 * - Formula calculation is O(1)
 *
 * Space Complexity: O(1)
 * - No additional data structures needed, just variables
 *
 * @param nums Array of distinct integers in the range [0, n] with one number missing
 * @returns The missing number
 */
export function missingNumber(nums: number[]): number {
  // Calculate the expected length (n+1)
  const n = nums.length;

  // Calculate expected sum from 0 to n using the formula n*(n+1)/2
  // This formula gives us the sum of first n natural numbers
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate actual sum in the array using reduce()
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // The difference is our missing number
  return expectedSum - actualSum;
}
