/**
 * Time: O(n)
 * - We iterate over both nums1 and nums2 once.
 *   - Converting both arrays to sets takes O(n) time, where n is the combined length of nums1 and nums2.
 *   - Each `for...of` loop also iterates over nums1 and nums2, resulting in O(n) time for each loop.
 *   - Since checking if an element exists in a set (`set.has()`) is an O(1) operation, the overall time complexity is O(n).
 *
 * Space: O(n)
 * - We use additional space for two sets (set1 and set2) and two result sets (uniq1 and uniq2).
 *   - The space required is proportional to the number of unique elements in both nums1 and nums2.
 *   - Therefore, the space complexity is O(n), where n is the combined size of nums1 and nums2.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
export const findDifference = (nums1, nums2) => {
  // Convert both arrays to sets to ensure unique values and for O(1) lookups
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Create two new sets to store unique elements from nums1 and nums2
  const uniq1 = new Set();
  const uniq2 = new Set();

  // Iterate over nums1, add elements to uniq1 that are not present in set2
  for (const num of nums1) {
    if (!set2.has(num)) {
      uniq1.add(num);
    }
  }

  // Iterate over nums2, add elements to uniq2 that are not present in set1
  for (const num of nums2) {
    if (!set1.has(num)) {
      uniq2.add(num);
    }
  }

  // Convert sets to arrays and return as a list of two arrays
  return [[...uniq1], [...uniq2]];
};

/**
 * Using Array.reduce()
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
export const findDifferenceReduce = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const uniq1 = nums1.reduce((acc, num) => {
    if (!set2.has(num)) {
      acc.add(num);
    }

    return acc;
  }, new Set());

  const uniq2 = nums2.reduce((acc, num) => {
    if (!set1.has(num)) {
      acc.add(num);
    }

    return acc;
  }, new Set());

  return [[...uniq1], [...uniq2]];
};

/**
 * Using Array.filter() from created set
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
export const findDifferenceSetFilter = (nums1, nums2) => {
  // Create unique set from provided number arrays
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Use set difference to find elements in set1 that are not in set2
  const uniq1 = [...set1].filter((num) => !set2.has(num));

  // Use set difference to find elements in set2 that are not in set1
  const uniq2 = [...set2].filter((num) => !set1.has(num));

  return [uniq1, uniq2];
};
