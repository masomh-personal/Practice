/**
 * Time: O(n) - at worst, we iterate through the array once
 * Space: O(n) - at worst, we have two sets that have all the elements of nums
 *
 * @param {number[]} nums
 * @return {boolean}
 */
export function isPossibleToSplit(nums) {
  // Two sets to keep track of distinct elements in both halves
  const set1 = new Set();
  const set2 = new Set();

  // Iterate through each number in nums
  for (const num of nums) {
    // Attempt to add to set1 if the element is not already there
    if (!set1.has(num)) {
      set1.add(num);
    }
    // If set1 already has it, try to add to set2
    else if (!set2.has(num)) {
      set2.add(num);
    }
    // If both sets already have the number, splitting is not possible
    else {
      return false;
    }
  }

  // If we reach here, a valid split was found
  return true;
}
