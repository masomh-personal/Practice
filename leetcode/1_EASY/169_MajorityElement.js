/**
 * Approach: Boyer-Moore Voting Algorithm
 * - The algorithm effectively "cancels out" non-majority elements, leaving only the most frequent one.
 * - We maintain a candidate and a vote count, adjusting the vote based on element occurrences.
 *
 * Time Complexity: O(n) - Single pass through the array.
 * Space Complexity: O(1) - Uses only two variables.
 */
export function majorityElement(nums) {
  let candidate = null;
  let voteCount = 0;

  for (const num of nums) {
    if (voteCount === 0) {
      candidate = num; // Reset the candidate when vote count is depleted
    }
    voteCount += num === candidate ? 1 : -1;
  }

  // NOTE: we don't really need this check for the question b/c there is a guaranteed answer
  // Optional: Verify that the candidate actually occurs > n/2 times
  let count = nums.reduce((acc, num) => {
    acc += num === candidate ? 1 : 0;
    return acc;
  }, 0);

  return count > Math.floor(nums.length / 2) ? candidate : null;
}

/**
 * Brute Force Approach using a frequency counter
 *
 * Time Complexity: O(n) - We iterate through the array once
 * Space Complexity: O(n) - We use a hash map to store element frequencies
 */
export function majorityElementNaive(nums) {
  // NOTE: don't really need this guard edge case check here because it's pretty efficient
  // if (nums.length <= 2) return nums[0]; // A single-element array means that element is the majority

  const MAJORITY_THRESHOLD = Math.floor(nums.length / 2);
  const freqMap = new Map();

  for (const num of nums) {
    // Increment count for the current number
    const count = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, count);

    // If this number surpasses the majority threshold, return it immediately
    if (count > MAJORITY_THRESHOLD) return num;
  }

  // NOTE: we will never reach here as (per description on leetcode) we will always have an answer
  return null;
}
