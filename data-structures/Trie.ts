class TrieNode {
  children: Map<string, TrieNode>;
  suggestions: string[];

  constructor() {
    this.children = new Map();
    this.suggestions = [];
  }
}

export class Trie {
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

      // Add product to suggestions in lex order, max 3
      node.suggestions.push(product);
      node.suggestions.sort();
      if (node.suggestions.length > 3) {
        node.suggestions.pop();
      }
    }
  }

  /**
   * Returns an array of suggestions for each prefix of searchWord.
   * @param searchWord - The search word to query the Trie
   * @returns Array of up to 3 suggestions per prefix
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
