/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = (nums) => {
  const numSet = new Set();
  for (const num of nums) {
    if (numSet.has(num)) return true; // Duplicate found
    numSet.add(num); // Add the number to the set
  }

  return false; // No duplicates found
};

// Alternative, less efficient way is testing size of set vs nums array length
const containsDuplicateSet = (nums) => {
  if (nums.length === 1) return false;

  return nums.length !== new Set(nums).size;
};
