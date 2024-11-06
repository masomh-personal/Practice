/**
 * Approach: Set for O(1) lookups and tracking consecutive sequences
 * Time Complexity: O(n) **NOTE: we do not want to sort b/c that would be O(n log n)
 * Space Complexity: O(n)
 * @param {number[]} nums - Array of integers
 * @return {number} - Length of the longest consecutive sequence
 */
export const longestConsecutive = function (nums) {
  // Edge case: if the input array is empty, there can't be any sequence
  if (nums.length === 0) return 0;

  // Convert nums array to a Set to allow O(1) lookups for each element
  const numSet = new Set(nums);
  let longestStreak = 0; // Variable to store the longest consecutive sequence found

  // Loop through each number in the set
  for (const num of numSet) {
    // Check if the current number is the start of a sequence
    // A number is the start of a sequence if there's no smaller number in the set
    if (!numSet.has(num - 1)) {
      let currentNum = num; // Starting number of the current sequence
      let currentStreak = 1; // Length of the current consecutive sequence

      // Continue the sequence by checking if the next consecutive number exists in the set
      while (numSet.has(currentNum + 1)) {
        currentNum++; // Move to the next number in the sequence
        currentStreak++; // Increment the length of the current sequence
      }

      // Update longestStreak if the current sequence is the longest found so far
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  // Return the length of the longest consecutive sequence found
  return longestStreak;
};
