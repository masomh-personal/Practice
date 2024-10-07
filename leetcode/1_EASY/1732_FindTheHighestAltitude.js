/**
 * JS Array.reduce() and Math.max() Approach to Find Highest Altitude
 * Time Complexity: O(n) - Traverse the gain array once.
 * Space Complexity: O(1) - Constant space since only a few variables are used.
 *
 * @param {number[]} gain - An array where each element represents the net altitude gain or loss between two points.
 * @return {number} - The highest altitude reached during the trip.
 */
export const largestAltitude = (gain) => {
  let maxAltitudeGain = 0; // To track the highest altitude reached
  gain.reduce((acc, num) => {
    acc += num; // Accumulate the altitude gain/loss
    maxAltitudeGain = Math.max(maxAltitudeGain, acc); // Update the maximum altitude at each "element/step"
    return acc; // Return the accumulated altitude for the next iteration
  }, 0);

  return maxAltitudeGain; // Return the highest altitude after processing all points
};
