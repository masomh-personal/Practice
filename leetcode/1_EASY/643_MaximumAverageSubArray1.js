/**
 * Sliding Window Approach
 *
 * Time: O(n) - We traverse the array once to compute the initial window sum
 *               and then slide the window across the array, performing constant time operations.
 * Space: O(1) - Only a few extra variables are used; no additional space is needed that scales with input size.
 *
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The size of the subarray for which to compute the maximum average.
 * @return {number} - The maximum average of a subarray of length k.
 */
export const findMaxAverage = (nums, k) => {
  // Handle the edge case where the array is empty
  if (nums.length === 0) return 0;

  // If the array has only one element, return that element (since k will be 1)
  if (nums.length === 1) return nums[0];

  // Step 1: Compute the initial window sum (first 'k' elements)
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  // Step 2: Set the initial max average to the first window
  let maxAverage = windowSum / k;

  // Step 3: Slide the window from the k-th element to the end of the array
  for (let i = k; i < nums.length; i++) {
    // Update the window sum by adding the new element and removing the old element
    const newNumToAdd = nums[i]; // Element that enters the window
    const oldNumToRemove = nums[i - k]; // Element that leaves the window
    windowSum = windowSum + newNumToAdd - oldNumToRemove;

    // Step 4: Update the maxAverage if the current window's average is higher
    maxAverage = Math.max(windowSum / k, maxAverage);
  }

  // Step 5: Return the maximum average found
  return maxAverage;
};
