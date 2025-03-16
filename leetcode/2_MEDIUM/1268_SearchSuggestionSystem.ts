/**
 * Binary Search approach
 *
 * Time Complexity: O(n log n + m log n), where:
 *   - n = number of products (sorting + binary search per prefix)
 *   - m = length of searchWord (number of prefixes)
 *
 * Space Complexity: O(n + m), for sorted products (O(n)) and result array (O(m × 3), simplified to O(m))
 *
 * @param products - List of product names
 * @param searchWord - Word to search suggestions for
 * @returns Array of suggestion arrays, one for each prefix of searchWord (up to 3 suggestions per prefix)
 */
export function suggestedProducts(products: string[], searchWord: string): string[][] {
  const result: string[][] = [];

  // Use string array as StringBuilder to avoid repeated string concatenation
  const prefixChars: string[] = [];

  // Sort products lexicographically (to enable binary search)
  const sortedProducts = products.toSorted();

  // Helper: Find first index where product >= prefix
  function lowerBound(arr: string[], prefix: string): number {
    const n = arr.length;
    if (n === 0) return 0;

    let left = 0;
    let right = n;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (arr[mid] < prefix) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  // Build prefix step-by-step
  for (const char of searchWord) {
    prefixChars.push(char);
    const prefixStr = prefixChars.join('');

    const startIdx = lowerBound(sortedProducts, prefixStr);
    const suggestions: string[] = [];

    // Collect up to 3 matching products starting from startIdx
    for (let i = startIdx; i < Math.min(startIdx + 3, sortedProducts.length); i++) {
      if (sortedProducts[i].startsWith(prefixStr)) {
        suggestions.push(sortedProducts[i]);
      } else {
        break; // Stop if product no longer matches prefix
      }
    }

    result.push(suggestions);
  }

  return result;
}

/**
 * NAIVE approach
 *
 * Time Complexity: O(n log n + m × n), where:
 *   - n = number of products (sorting + filtering each prefix)
 *   - m = length of searchWord (number of prefixes)
 *
 * Space Complexity: O(n), for storing the sorted copy of products
 *
 * @param products - Array of product names
 * @param searchWord - The search word used to generate prefix suggestions
 * @returns Array of suggestion arrays, one for each prefix of searchWord
 */

export function suggestedProductsNaive(products: string[], searchWord: string): string[][] {
  const result: string[][] = [];

  // Create a sorted copy of the products array (lexicographical order)
  const sortedProducts: string[] = products.toSorted();

  // Accumulate prefix characters one by one
  const prefixChars: string[] = [];

  for (const char of searchWord) {
    prefixChars.push(char);
    const prefixStr = prefixChars.join('');

    // Filter products that start with the current prefix
    // Limit suggestions to the first 3 matches
    const suggestions = sortedProducts
      .filter((product) => product.startsWith(prefixStr))
      .slice(0, 3);

    result.push(suggestions);
  }

  return result;
}
