/**
 * Approach: Two-Pointer Swap with Array Destructuring
 *
 * Time Complexity: O(n) - We traverse the array once using a two-pointer approach.
 * Space Complexity: O(1) - We modify the array in-place without extra storage.
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {void} - Modifies the array in-place, moving all zeros to the end.
 */
export function moveZeroes(nums) {
  // Edge case: Single-element arrays don't require modifications.
  if (nums.length === 1) return;

  // Initialize two pointers:
  // - `writer` tracks where the next non-zero should be placed.
  // - `scanner` scans through the array.
  let writer = 0;
  let scanner = 0;

  while (scanner < nums.length) {
    // If `scanner` finds a non-zero element, swap it with `writer`
    if (nums[scanner] !== 0) {
      [nums[writer], nums[scanner]] = [nums[scanner], nums[writer]];
      writer++; // Move writer forward after swapping
    }

    // Always advance the runner pointer
    scanner++;
  }
}
