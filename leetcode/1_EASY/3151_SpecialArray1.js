/**
 * Time: O(n) - worst case, we check all elements in the array once
 * Space: O(1) - only a few variables, no extra data structures
 * @param {number[]} nums
 * @return {boolean}
 */
export function isArraySpecial(nums) {
  if (nums.length === 1) return true; // Single-element arrays are always special

  const isEven = (num) => num % 2 === 0;

  let prevEvenCheck = isEven(nums[0]); // Track parity of the first number

  for (let i = 1; i < nums.length; i++) {
    const currEvenCheck = isEven(nums[i]);

    if (prevEvenCheck === currEvenCheck) return false; // Adjacent elements have same parity, not special

    prevEvenCheck = currEvenCheck; // Update parity tracker for next comparison
  }

  return true; // If all adjacent pairs had different parity, array is special
}
