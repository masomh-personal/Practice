/**
 * APPROACH: Using a HashSet for O(1) lookup
 *
 * The goal is to count the elements `x` in the array such that `x + 1` also exists in the array.
 * By leveraging a `Set`, we can achieve efficient O(1) lookups to check if `x + 1` exists.
 *
 * TIME: O(n) - We iterate through the array once and perform constant-time lookups in the Set.
 * SPACE: O(n) - We create a Set to store all elements in the input array.
 *
 * @param {number[]} nums - An array of integers where we will count "elements of interest."
 * @return {number} - The count of elements `x` such that `x + 1` is in the array.
 */
export const countElements = (nums) => {
  // Edge case: If there's only one number, no element can satisfy the condition
  if (nums.length === 1) return 0;

  // Create a Set from the array for fast lookups (O(1) average time complexity per lookup)
  const numSet = new Set(nums);

  // Count elements with (num + 1) in the Set
  return nums.reduce((count, num) => count + (numSet.has(num + 1) ? 1 : 0), 0);
};
