/**
 * Time: O(n)
 * - We iterate over the array once to populate the occurrenceMap, which takes O(n).
 * - We iterate over the occurrenceMap to check for unique frequencies, which takes O(n).
 * - Since all other operations (Map.get(), Set.has(), Set.add()) are O(1), the overall time complexity is O(n).
 *
 * Space: O(n)
 * - We store elements in the occurrenceMap and uniqueFreqsSet, both of which can grow up to the size of the input array.
 * - Therefore, the space complexity is O(n), where n is the size of the input array.
 *
 * @param {number[]} arr
 * @return {boolean}
 */
export const uniqueOccurrences = (arr) => {
  // Create a map to store the occurrence count of each element in the array
  const occurrenceMap = arr.reduce((acc, num) => acc.set(num, (acc.get(num) ?? 0) + 1), new Map());

  // Create a set to track unique frequencies of occurrences
  const uniqueFreqSet = new Set();

  // Iterate over the values (frequencies) of the occurrenceMap
  for (const [, frequency] of occurrenceMap) {
    // If the frequency is already in the set, return false (non-unique)
    if (uniqueFreqSet.has(frequency)) return false;

    // Add the frequency to the set
    uniqueFreqSet.add(frequency);
  }

  // If all frequencies are unique, return true
  return true;
};
