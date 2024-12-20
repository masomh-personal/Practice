/**
 * Flattens a deeply nested array up to a specified depth.
 *
 * Note: Other iterative approaches, such as using a queue or stack, can also flatten arrays without recursion.
 * These methods can help reduce the risk of stack overflow in environments with limited call stack depth.
 *
 * @param {Array} arr - The input array to flatten
 * @param {number} depth - The maximum depth to flatten
 * @return {Array} - The flattened array
 *
 * Time Complexity: O(n) - Each element is visited exactly once
 * Space Complexity: O(n) - Due to the recursive stack and result storage
 */
export function flat(arr, depth) {
  // Guard: return early if array is empty or depth is 0
  if (depth === 0 || arr.length === 0) {
    return arr;
  }

  // The result array will store the flattened elements
  const result = [];

  /**
   * Helper function to recursively flatten the array.
   *
   * @param {Array} currArr - The current array being processed
   * @param {number} currDepth - The remaining depth allowed for flattening
   */
  const flattenHelper = (currArr, currDepth) => {
    for (const currElem of currArr) {
      if (Array.isArray(currElem) && currDepth > 0) {
        // Recursively flatten nested arrays, reducing depth by 1
        flattenHelper(currElem, currDepth - 1);
      } else {
        // Add non-array elements directly to the result
        result.push(currElem);
      }
    }
  };

  // Start the recursive process
  flattenHelper(arr, depth);

  // Return the fully flattened array
  return result;
}

/**
 * NOTE: Just for future reference, we are not allowed to use built-in .flat() function
 *
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
export function flatBuiltIn(arr, depth) {
  // Guard: return early if array is empty or depth is 0
  if (depth === 0 || arr.length === 0) {
    return arr;
  }

  // NOT supposed to use built-in function, but I did it here for future reference
  // NOTE: you can pass "Infinity" into .flat() if you don't know or care the depth, but want to completely flatten out the array
  return arr.flat(depth);
}
