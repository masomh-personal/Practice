/**
 * Approach: Two-Pointer Greedy Algorithm
 * Time Complexity: O(n) - We traverse the array at most once.
 * Space Complexity: O(1) - Only a few extra variables are used.
 *
 * @param {number[]} heights - Array of heights representing vertical lines.
 * @return {number} - Maximum area of water the container can hold.
 */
export function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Store heights for current pointers
    const leftHeight = heights[left];
    const rightHeight = heights[right];

    // Calculate the current area between left and right pointers
    const currentArea = Math.min(leftHeight, rightHeight) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    // Move the pointer at the shorter line inward for a potentially larger area
    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
