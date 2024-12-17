/**
 * Determines if a person can attend all meetings by checking for overlapping intervals.
 *
 * TIME: O(n log n) - Sorting the intervals dominates the time complexity
 * SPACE: O(1) - Sorting is done in place, and no additional data structures are used
 *
 * @param {number[][]} intervals - An array of meeting intervals [start, end]
 * @return {boolean} - Returns true if no meetings overlap, false otherwise
 */
export function canAttendMeetings(intervals) {
  // Sort the intervals by start time in ascending order
  // Sorting in place saves space but mutates the original input array
  intervals.sort(([a], [b]) => a - b);

  // Variable to keep track of the end time of the previous meeting
  let previousEnd = -1;

  // Traverse the sorted intervals and check for overlaps
  for (const [start, end] of intervals) {
    // If the current start time overlaps with the previous end time, return false
    if (start < previousEnd) {
      return false;
    }

    // Update the previous end time to the current meeting's end time
    previousEnd = end;
  }

  // If no overlaps are found, return true
  return true;
}
