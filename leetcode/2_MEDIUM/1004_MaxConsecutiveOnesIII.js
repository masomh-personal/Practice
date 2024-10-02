/**
 * This function finds the maximum number of consecutive 1's in a binary array
 * where we can flip at most `k` zeros to 1's.
 *
 * Sliding Window Approach:
 * Time: O(n) - We iterate through the `nums` array once
 * Space: O(1) - We only use a few primitive variables
 *
 * @param {number[]} nums - The binary array (only contains 0's and 1's)
 * @param {number} k - Maximum number of 0's that can be flipped to 1's
 * @returns {number} - The maximum number of consecutive 1's after flipping
 */
export const longestOnes = (nums, k) => {
  // Initialize two pointers:
  // `leftAnchor` as the anchor of the sliding window and `rightWorker` to expand the window
  let leftAnchor = 0;
  let rightWorker = 0;

  // Loop over the array using `rightWorker` as the expanding edge of the window
  while (rightWorker < nums.length) {
    const currentNum = nums[rightWorker];

    // If we encounter a 0, we reduce `k` because we consider it flippable
    if (currentNum === 0) {
      k--;
    }

    // If `k` is negative, it means we have flipped more than the allowed number of 0's
    // We need to shrink the window by moving the `left` pointer forward
    if (k < 0) {
      // If the element at the leftAnchor is a 0, increment k because you're no longer counting it as a flip (since it's outside the window now)
      k += nums[leftAnchor] === 0 ? 1 : 0;
      // Move the `leftAnchor` pointer to shrink the window
      leftAnchor++;
    }

    // Expand the window by moving `rightWorker` pointer
    rightWorker++;
  }

  // The length of the largest window is the distance between `rightWorker` and `leftAnchor`
  return rightWorker - leftAnchor;
};
