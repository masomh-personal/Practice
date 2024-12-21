/**
 * TIME: O(n) - have to visit each item and nested item
 * SPACE: O(n) - due to recursive call stack
 *
 * @param {Object|Array} obj - Input object or array to compact
 * @return {Object|Array} - Compacted version of the input
 */
export function compactObject(obj) {
  /**
   * HELPER: recursively compacts an object or array by removing falsy values
   * @param {Object|Array} currObj - Current object or array being processed
   * @return {Object|Array} - Compacted object or array
   */
  const recursiveCompact = (currObj) => {
    // Process arrays: filter out falsy values and recursively compact elements
    if (Array.isArray(currObj)) {
      return currObj
        .filter(Boolean) // Remove falsy values from the array
        .map(recursiveCompact); // Recursively compact each array element
    }

    // Process objects: filter out falsy values and recursively compact properties
    if (currObj && typeof currObj === 'object') {
      return Object.entries(currObj).reduce((compacted, [key, value]) => {
        if (Boolean(value)) {
          // Only process truthy values
          compacted[key] = recursiveCompact(value); // Recursively compact the value
        }
        return compacted; // Return the updated object
      }, {});
    }

    // Base case: return primitive values as-is
    return currObj;
  };

  // Invoke recursive compaction on the input object or array
  return recursiveCompact(obj);
}
