/**
 * Groups anagrams from an array of strings.
 * TIME: O(n * k log k) - Sorting each string dominates the runtime, where `n` is the number of strings
 *                       and `k` is the average length of each string.
 * SPACE: O(n) - Space used by the Map to store grouped anagrams.
 *
 * @param {string[]} strArr - Array of strings to group by anagrams.
 * @return {string[][]} - A 2D array containing groups of anagrams.
 */
export function groupAnagrams(strArr) {
  // Edge case: If there's only one string, just return it wrapped in a group.
  // NOTE: Constraints guarantee the input is non-empty, so no need to handle an empty array.
  if (strArr.length === 1) {
    return [[strArr[0]]];
  }

  // Create a map to group strings by their "sorted key".
  // Key: Sorted version of the string (e.g., "eat" -> "aet").
  // Value: Array of strings that are anagrams of the key.
  const anagramMap = strArr.reduce((acc, str) => {
    // Generate the "sorted key" by sorting characters in the string.
    const sortedKey = [...str].sort().join('');

    // Check if the key already exists in the map.
    if (acc.has(sortedKey)) {
      // If it does, append the current string to the existing group.
      acc.get(sortedKey).push(str);
    } else {
      // Otherwise, create a new group for this sorted key.
      acc.set(sortedKey, [str]);
    }

    return acc; // Return the updated map for the next iteration.
  }, new Map());

  // Extract all values (arrays of grouped anagrams) from the map.
  // We use Array.from() to convert the map's values into an array.
  return Array.from(anagramMap.values());
}
