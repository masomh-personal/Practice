/**
 * Merges two arrays of objects by `id`, combining properties for matching `id`s.
 * If an `id` exists in both arrays, properties from the second array override those from the first.
 *
 * TIME: O(n + m + k log k), where:
 *   - `n` is the length of `arr1`
 *   - `m` is the length of `arr2`
 *   - `k` is the size of the merged result (number of unique IDs)
 *
 * SPACE: O(n + m) for the map and resulting array
 *
 * @param {Array} arr1 - The first array of objects
 * @param {Array} arr2 - The second array of objects
 * @return {Array} - A new array with merged objects, sorted by `id`
 */
export function join(arr1, arr2) {
  // Use a Map to store objects by `id` for fast lookup and merging
  const joinedMap = new Map();

  // Add objects from `arr1` to the map, using `id` as the key
  for (const obj1 of arr1) {
    joinedMap.set(obj1.id, obj1); // Store each object using its `id` as the key
  }

  // Add or merge objects from `arr2` into the map
  for (const obj2 of arr2) {
    if (joinedMap.has(obj2.id)) {
      // If the `id` already exists, merge properties directly into the existing object
      const existingObj = joinedMap.get(obj2.id);
      for (const key in obj2) {
        existingObj[key] = obj2[key]; // Update or add the property from `arr2`
      }
    } else {
      // Add the new object if the `id` doesn't exist in the map
      joinedMap.set(obj2.id, obj2);
    }
  }

  // Convert the map values into an array
  const resultArr = Array.from(joinedMap.values());

  // Sort the result in ascending order by `id`
  return resultArr.sort((a, b) => a.id - b.id);
}
