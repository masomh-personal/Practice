/**
 * APPROACH: Sliding Window with Left Pointer
 *
 * TIME: O(n) - Iterates through the array once
 * SPACE: O(1) - Uses constant space
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} averageThreshold
 * @return {number}
 */
export function numOfSubarrays(nums, k, averageThreshold) {
  let result = 0;
  let subArraySum = 0;
  let left = 0; // Left pointer for the start of the window

  // Iterate through the array with `right` as the end of the window
  for (let right = 0; right < nums.length; right++) {
    subArraySum += nums[right]; // Add the current number to the window

    // Check if the window size is reached
    if (right - left + 1 === k) {
      const currAverage = subArraySum / k;
      // Check if the average meets the threshold
      if (currAverage >= averageThreshold) {
        result++;
      }
      // Slide the window: Remove the leftmost element and move `left` forward
      subArraySum -= nums[left];
      left++;
    }
  }

  return result;
}
