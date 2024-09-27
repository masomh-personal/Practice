/**
 * Finds the maximum area that can be formed between two vertical lines.
 * Time complexity: O(n) - We traverse the array once using the two-pointer technique.
 * Space complexity: O(1) - We only use a constant amount of extra space for variables.
 *
 * @param {number[]} heights - An array representing the heights of the vertical lines.
 * @return {number} - The maximum area of water the container can hold.
 */
export const maxArea = function (heights) {
  let max = 0; // Initialize max to 0 as the minimum possible area is 0.

  let left = 0; // Start the left pointer at the beginning of the array.
  let right = heights.length - 1; // Start the right pointer at the end of the array.

  // Continue until the two pointers meet.
  while (left < right) {
    const heightLeft = heights[left]; // Height of the line at the left pointer.
    const heightRight = heights[right]; // Height of the line at the right pointer.

    // The container's height is determined by the shorter of the two lines.
    const minHeight = Math.min(heightLeft, heightRight);

    // The width is the distance between the left and right pointers.
    const width = right - left;

    // Calculate the current area based on minHeight and width.
    const currArea = minHeight * width;

    // Update the max area if the current area is larger.
    max = Math.max(currArea, max);

    // Move the pointer that points to the shorter line to try and find a taller one.
    if (heightLeft >= heightRight) {
      right--; // Move the right pointer left if the right line is shorter or equal.
    } else {
      left++; // Move the left pointer right if the left line is shorter.
    }
  }

  // Return the maximum area found.
  return max;
};
