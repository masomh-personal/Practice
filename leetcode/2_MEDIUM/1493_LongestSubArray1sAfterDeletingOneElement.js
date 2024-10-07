/**
 * Sliding Window Approach
 * Time: O(n) - We traverse the array with both left and right pointers,
 *               each pointer moving through the array at most once.
 * Space: O(1) - Only a few extra variables are used, so the space complexity is constant.
 * @param {number[]} nums - An array of binary integers (0's and 1's)
 * @return {number} - The length of the longest subarray of 1's after deleting one element
 */
export const longestSubarray = (nums) => {
  // If there's only one element, return 1 (as per user-defined preference)
  if (nums.length === 1) return 1;

  let longest = 0; // To track the longest subarray of 1's
  let zeroCounter = 0; // To track the number of zeroes in the current window

  // We use a sliding window with left and right pointers
  for (let left = 0, right = 0; right < nums.length; right++) {
    const currNum = nums[right];

    // Increase the zeroCounter when we encounter a zero
    if (currNum === 0) {
      zeroCounter++;
    }

    // If there are more than 1 zero in the current window, move the left pointer
    while (zeroCounter > 1) {
      if (nums[left] === 0) {
        zeroCounter--; // Reduce the zero count when sliding past a zero
      }
      left++; // Shrink the window by moving the left pointer
    }

    // Update the longest subarray found so far
    longest = Math.max(longest, right - left);
  }

  // Handle the case where the array contains only 1's
  // In such cases, since we have to delete one element, return longest - 1
  return longest === nums.length ? longest - 1 : longest;
};
