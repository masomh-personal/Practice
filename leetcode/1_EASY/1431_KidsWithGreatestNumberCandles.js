/**
 * Determines if each kid, after receiving extraCandies, has the greatest number of candies.
 *
 * Time Complexity: O(n)
 *  - Finding the max value with Math.max() takes O(n) time.
 *  - Mapping over the candies array takes O(n) time.
 *  - Therefore, the overall time complexity is O(n), where n is the number of kids.
 *
 * Space Complexity: O(n)
 *  - The result array has the same length as the candies array, which requires O(n) space.
 *  - No additional space apart from the output array and a few variables is used.
 *
 * @param {number[]} candies - Array representing the number of candies each kid has.
 * @param {number} extraCandies - Number of extra candies to give to each kid.
 * @return {boolean[]} - Boolean array where each element represents whether the respective kid
 *                       will have the greatest number of candies after receiving extraCandies.
 */
export const kidsWithCandies = (candies, extraCandies) => {
  // Find the maximum number of candies that any kid currently has
  const max = Math.max(...candies);

  // Return a boolean array, where each value indicates if that kid has the greatest number of candies
  return candies.map((numCandy) => numCandy + extraCandies >= max);
};
