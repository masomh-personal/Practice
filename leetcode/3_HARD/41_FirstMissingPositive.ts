/**
 * First Missing Positive - Optimized in-place approach
 * Time Complexity: O(n) where n is array length
 * Space Complexity: O(1) - constant extra space
 *
 * This solution uses the array itself to mark 'presence' of positive integers
 * by placing each number at its correct index position.
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} - First missing positive integer
 */
export function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  // Step 1: Convert non-positives to a value outside our range of interest
  // We only care about 1 to n, so replace negatives and zeros with n+1
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }

  // Step 2: Mark existing numbers by making their corresponding positions negative
  // For each valid number x in range [1,n], mark nums[x-1] as negative
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);

    // Only consider values in the range [1,n]
    if (num <= n) {
      // Make the value at the corresponding index negative to mark presence
      // Use Math.abs because the value might have already been marked
      const idx = num - 1;
      if (nums[idx] > 0) {
        nums[idx] = -nums[idx];
      }
    }
  }

  // Step 3: Find the first positive value in the array
  // The first positive index i means i+1 is missing
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  // If all positions [0,n-1] are marked (negative), return n+1
  return n + 1;
}

/**
 * First Missing Positive - Naive Set-based approach
 * Time Complexity: O(n + maxNum) where n is array length and maxNum is maximum value
 * Space Complexity: O(n) for the Set
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} - First missing positive integer
 */
export function firstMissingPositiveNaive(nums: number[]): number {
  // Create a set for O(1) lookups, only adding positive integers
  const positiveSet: Set<number> = new Set();
  let maxPositive = 0;

  // Single-pass to populate set and find max positive value
  for (const num of nums) {
    if (num > 0) {
      positiveSet.add(num);
      maxPositive = Math.max(maxPositive, num);
    }
  }

  // If no positive numbers found, return 1
  if (maxPositive === 0) {
    return 1;
  }

  // Check each positive integer from 1 to maxPositive
  for (let i = 1; i <= maxPositive; i++) {
    if (!positiveSet.has(i)) {
      return i; // Found the first missing positive
    }
  }

  // If all consecutive positive integers from 1 to maxPositive exist,
  // then the answer is maxPositive + 1
  return maxPositive + 1;
}
