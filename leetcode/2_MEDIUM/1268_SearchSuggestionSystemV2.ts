/**
 * Trie (Prefix Tree) approach
 *
 * Time Complexity: O(n × l log 3 + m), where:
 *   - n = number of products
 *   - l = average product length (for insert)
 *   - m = length of searchWord (for prefix traversal)
 *   - log 3 is constant due to sorting max 3 suggestions
 *
 * Space Complexity: O(n × l), for Trie nodes and stored suggestions
 *
 * @param products - List of product names
 * @param searchWord - Word to search suggestions for
 * @returns Array of suggestion arrays, one for each prefix
 */
export function suggestedProducts(products: string[], searchWord: string): string[][] {
  const trie = new Trie();

  // Insert each product into the Trie
  for (const product of products) {
    trie.insert(product);
  }

  // Get suggestions per prefix of searchWord
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
  private readonly root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a product into the Trie, maintaining up to 3 lex suggestions at each node.
   * @param product - The product string to insert
   */
  insert(product: string): void {
    let node = this.root;

    for (const char of product) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char)!;

      // Insert product into lex suggestions, keep only 3 smallest
      node.suggestions.push(product);
      node.suggestions.sort();
      if (node.suggestions.length > 3) {
        node.suggestions.pop();
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
        result.push([]); // No further matches for this prefix
      }
    }

    return result;
  }
}
