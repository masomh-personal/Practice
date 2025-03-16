/**
 * Trie (Prefix Tree) approach – Optimized
 *
 * Time Complexity: O(n log n + n × l + m), where:
 *   - n = number of products
 *   - l = average product length
 *   - m = length of searchWord
 *
 * - O(n log n) for global sort
 * - O(n × l) to insert each product (no sorting in insert)
 * - O(m) to traverse searchWord
 *
 * Space Complexity: O(n × l), for Trie nodes and stored suggestions
 *
 * @param products - List of product names
 * @param searchWord - Word to search suggestions for
 * @returns Array of suggestion arrays, one for each prefix
 */
export function suggestedProducts(products: string[], searchWord: string): string[][] {
  const trie = new Trie();

  // Pre-sort products lexicographically for efficient inserts
  const sortedProducts = products.toSorted();

  for (const product of sortedProducts) {
    trie.insert(product);
  }

  return trie.getSuggestions(searchWord);
}

/**
 * TrieNode class representing a single node in the Trie.
 */
class TrieNode {
  children: Map<string, TrieNode>;
  suggestions: string[];

  constructor() {
    this.children = new Map();
    this.suggestions = [];
  }
}

/**
 * Trie class for inserting products and retrieving prefix-based suggestions.
 */
class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a product into the Trie.
   * Appends to suggestions only if length < 3 (products are pre-sorted).
   * @param product - The product string to insert
   */
  insert(product: string): void {
    let node = this.root;

    for (const char of product) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char)!;

      if (node.suggestions.length < 3) {
        node.suggestions.push(product);
      }
    }
  }

  /**
   * Retrieves up to 3 suggestions for each prefix of searchWord.
   * @param searchWord - The search word to traverse the Trie
   * @returns Array of suggestions per prefix
   */
  getSuggestions(searchWord: string): string[][] {
    const result: string[][] = [];
    let node: TrieNode | null = this.root;

    for (const char of searchWord) {
      if (node && node.children.has(char)) {
        node = node.children.get(char)!;
        result.push([...node.suggestions]);
      } else {
        node = null;
        result.push([]);
      }
    }

    return result;
  }
}
