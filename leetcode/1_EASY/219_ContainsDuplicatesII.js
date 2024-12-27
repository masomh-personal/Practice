/**
 * Uses a sliding window approach to check for nearby duplicates
 *
 * TIME: O(n) - One pass through the array
 * SPACE: O(k) - Max size of the sliding window (Set)
 *
 * @param {number[]} nums - Array of numbers to search
 * @param {number} k - Max distance for duplicates
 * @return {boolean} - True if duplicates exist within distance k
 */
export function containsNearbyDuplicate(nums, k) {
  if (k === 0) return false; // A window size of zero makes finding duplicates impossible

  const window = new Set();
  let left = 0; // Tracks the start of the sliding window

  for (let right = 0; right < nums.length; right++) {
    const currNum = nums[right];
    const leftNum = nums[left];

    // Remove the number at the left pointer from the window
    // This ensures the window size stays within the allowed range of k
    // By removing numbers that are too far back (i.e., index difference > k),
    // we maintain only the relevant numbers for comparison
    if (right - left > k) {
      window.delete(leftNum); // Shrinks window from the left
      left++;
    }

    // If the current number is already in the window, we found a duplicate
    if (window.has(currNum)) return true;

    // Add the current number to the window for future checks
    window.add(currNum);
  }

  return false; // No duplicates found within distance k
}
