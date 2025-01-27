/**
 * APPROACH: Two-Pointer with Tracking Max Heights
 * TIME COMPLEXITY: O(n) - We iterate through the array once.
 * SPACE COMPLEXITY: O(1) - Uses only a few variables for tracking, no additional data structures.
 *
 * @param {number[]} heights - Array of non-negative integers representing the height of walls.
 * @return {number} - Total water trapped between the walls.
 */
export function trap(heights) {
  // Edge case: If the array has less than 3 heights, no water can be trapped.
  if (heights.length < 3) return 0;

  // Initialize pointers
  let left = 0; // Start pointer
  let right = heights.length - 1; // End pointer

  // Variables to track the maximum heights on the left and right
  let leftMax = 0;
  let rightMax = 0;

  // Variable to accumulate the total trapped water
  let totalWater = 0;

  // Use two pointers to iterate toward each other
  while (left < right) {
    const currLeftHeight = heights[left];
    const currRightHeight = heights[right];

    // Update the maximum heights seen so far from the left and right
    leftMax = Math.max(leftMax, currLeftHeight);
    rightMax = Math.max(rightMax, currRightHeight);

    // Water trapped depends on the smaller of the two boundaries
    if (leftMax < rightMax) {
      // Water trapped at the current position is determined by leftMax
      totalWater += leftMax - currLeftHeight;
      left++; // Move the left pointer inward
    } else {
      // Water trapped at the current position is determined by rightMax
      totalWater += rightMax - currRightHeight;
      right--; // Move the right pointer inward
    }
  }

  return totalWater;
}
