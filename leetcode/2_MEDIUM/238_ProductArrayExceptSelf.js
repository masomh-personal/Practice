/**
 * Approach: Single Pass Prefix and Suffix Multiplication
 * - First Pass: Calculate prefix products directly in the result array.
 *   - Store the product of all elements before the current index.
 * - Second Pass: Accumulate suffix products in reverse order.
 *   - Multiply the current result by the accumulated suffix product.
 *   - Accumulate the suffix product by multiplying it with the current element.
 *
 * Time Complexity: O(n) - Two passes through the array.
 * Space Complexity: O(1) - Extra space is constant since result array is considered output.
 *
 * @param {number[]} nums - Input array of numbers.
 * @return {number[]} - Output array where each element is the product of all elements except itself.
 */
export function productExceptSelf(nums) {
  const n = nums.length;
  const result = Array(n).fill(1); // Initialize with 1 for multiplication

  // First Pass: Build prefix products in the result array
  // NOTE: result[i] stores the product of all elements before index i
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Second Pass: Accumulate suffix products and multiply into result array
  // NOTE: suffixAcc accumulates the product of all elements after the current index
  let suffixAcc = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixAcc; // Multiply the current result by the accumulated suffix product
    suffixAcc *= nums[i]; // Update suffix product for the next iteration
  }

  return result;
}

/**
 * Approach: Naive Nested Loop
 * - For each element, multiply all other elements.
 * - Skip the current index using a conditional check.
 *
 * Time Complexity: O(n^2) - Due to the nested loops.
 * Space Complexity: O(n) - Result array is the same size as input.
 *
 * @param {number[]} nums - Input array of numbers.
 * @return {number[]} - Output array where each element is the product of all elements except itself.
 */
export function productExceptSelfNaive(nums) {
  const result = [];

  // Calculate product for each element except itself
  for (let i = 0; i < nums.length; i++) {
    let currProduct = 1;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      currProduct *= nums[j];
    }

    result.push(currProduct);
  }

  return result;
}
