/**
 * Time: O(n) - We iterate through the flowerbed array once.
 * Space: O(1) - We use a constant amount of extra space.
 *
 * NOTE: we are using [] notation here (I normally like to use .at())
 * WHY? because of this use case, we may have a negative index passing int .at() which will return bad results
 *
 * @param {number[]} flowerbed - Array representing plots where 0 is empty and 1 is planted.
 * @param {number} n - Number of new flowers to plant.
 * @return {boolean} - Returns true if n flowers can be planted without violating the no-adjacent-flowers rule.
 */
export const canPlaceFlowers = (flowerbed, n) => {
  // Guard clause: return true immediately if no flowers need to be planted
  if (n === 0) return true;

  let numPossibleFlowers = 0; // Initialize counter for how many flowers can be planted

  // Iterate over each plot in the flowerbed
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current plot is empty (0)
    if (flowerbed[i] === 0) {
      // Check if the previous plot is empty or out of bounds (defaults to 0 for out of bounds)
      const prevBed = flowerbed[i - 1] ?? 0;

      // Check if the next plot is empty or out of bounds (defaults to 0 for out of bounds)
      const nextBed = flowerbed[i + 1] ?? 0;

      // If both adjacent plots (previous and next) are empty, we can plant a flower
      if (prevBed === 0 && nextBed === 0) {
        flowerbed[i] = 1; // Mark this plot as planted to avoid planting adjacent flowers
        numPossibleFlowers++; // Increment the number of possible flowers planted

        i++; // Skip the next plot, as no flower can be planted adjacent to the one we just placed

        // If we've already planted enough flowers, return true immediately
        if (numPossibleFlowers >= n) return true;
      }
    }
  }

  // If we've gone through the entire flowerbed and haven't planted enough flowers, return false
  return false;
};
