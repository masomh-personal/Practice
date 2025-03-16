/**
 * NAIVE approach
 * Time Complexity: O(m × n), where:
 *   - m = length of searchWord
 *   - n = number of products (due to filtering on each prefix)
 * Space Complexity: O(n) for storing the sorted copy of products
 *
 * @param products - List of product names
 * @param searchWord - Word to search suggestions for
 * @returns Array of suggestion arrays, one for each prefix
 */
export function suggestedProducts(products: string[], searchWord: string): string[][] {
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
