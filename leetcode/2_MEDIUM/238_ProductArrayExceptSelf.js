/**
 * Time: O(n)
 * Space: O(n) [Can further optimize this to O(1)]
 * @param {number[]} nums - Input array of numbers
 * @return {number[]} - Output array where each element is the product of all elements in the input except itself
 */
export const productExceptSelfNaive = (nums) => {
  const n = nums.length;

  // Initialize suffixArr and prefixArr to store the prefix and suffix products.
  const suffixArr = Array(n).fill(1); // Holds the prefix products (product of elements before each index)
  const prefixArr = Array(n).fill(1); // Holds the suffix products (product of elements after each index)

  // Calculate the prefix product (left side products).
  // The prefix product at index 0 is 1, since there are no elements before the first element.
  suffixArr[0] = 1;
  for (let i = 1; i < n; i++) {
    suffixArr[i] = nums[i - 1] * suffixArr[i - 1]; // Multiply the previous prefix product by the previous number in nums
  }

  // Calculate the suffix product (right side products).
  // The suffix product at the last index is 1, since there are no elements after the last element.
  prefixArr[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    prefixArr[i] = nums[i + 1] * prefixArr[i + 1]; // Multiply the next suffix product by the next number in nums
  }

  // Combine the prefix and suffix products to get the result.
  // Multiply the corresponding prefix and suffix products at each index.
  return prefixArr.map((suffixProd, idx) => suffixProd * suffixArr[idx]);
};

/**
 * Time: O(n)
 * Space: O(1) (excluding the output array)
 * @param {number[]} nums - Input array of numbers
 * @return {number[]} - Output array where each element is the product of all elements in the input except itself
 */
export const productExceptSelf = (nums) => {
  const n = nums.length;

  // Initialize the output array with 1s since we'll be multiplying values into this array.
  const output = Array(n).fill(1);

  // Calculate the prefix product for each index.
  // The prefix product at index i is the product of all elements before 'i'.
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1]; // Multiply the previous prefix product by the previous element in nums
  }

  // Initialize suffix to 1. This will be used to calculate the suffix product.
  // Suffix product is the product of all elements after the current index.
  let suffix = 1;

  // Loop backwards to calculate the suffix product and update the output array.
  // Multiply the suffix product with the prefix product stored in the output array.
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix; // Multiply the current value in output (prefix product) with the suffix product.
    suffix *= nums[i]; // Update suffix to include the current element from nums for the next iteration.
  }

  // Return the final output array which contains the product of all elements except the one at each index.
  return output;
};
