//import { suggestedProducts } from '../1268_SearchSuggestionSystem';
import { suggestedProducts } from '../1268_SearchSuggestionSystemV2';

describe('Leetcode #1268: Search Suggestions System', () => {
  describe('Function: suggestedProducts', () => {
    // Basic Functionality
    it('should return suggestions matching each prefix of the search word in lexicographical order', () => {
      const products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
      const searchWord = 'mouse';
      const result = suggestedProducts(products, searchWord);
      const expected = [
        ['mobile', 'moneypot', 'monitor'],
        ['mobile', 'moneypot', 'monitor'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
      ];
      expect(result).toEqual(expected);
    });

    // No Matching Prefix
    it('should return empty suggestions for prefixes with no matching products', () => {
      const products = ['havana'];
      const searchWord = 'tatiana';
      const result = suggestedProducts(products, searchWord);
      const expected = [[], [], [], [], [], [], []];
      expect(result).toEqual(expected);
    });

    // Multiple Suggestions (limit 3)
    it('should handle case with multiple suggestions per prefix (limit 3)', () => {
      const products = ['bags', 'baggage', 'banner', 'box', 'cloths'];
      const searchWord = 'bags';
      const result = suggestedProducts(products, searchWord);
      const expected = [
        ['baggage', 'bags', 'banner'],
        ['baggage', 'bags', 'banner'],
        ['baggage', 'bags'],
        ['bags'],
      ];
      expect(result).toEqual(expected);
    });

    // SearchWord is a prefix of a product
    it('should handle case where searchWord is a prefix of a product', () => {
      const products = ['apple', 'app'];
      const searchWord = 'app';
      const result = suggestedProducts(products, searchWord);
      const expected = [
        ['app', 'apple'],
        ['app', 'apple'],
        ['app', 'apple'],
      ];
      expect(result).toEqual(expected);
    });

    // Empty product list
    it('should handle empty product list', () => {
      const products: string[] = [];
      const searchWord = 'test';
      const result = suggestedProducts(products, searchWord);
      const expected = [[], [], [], []];
      expect(result).toEqual(expected);
    });

    // Single product matching multiple prefixes
    it('should return the same product suggestion when only one product matches all prefixes', () => {
      const products = ['testproduct'];
      const searchWord = 'test';
      const result = suggestedProducts(products, searchWord);
      const expected = [['testproduct'], ['testproduct'], ['testproduct'], ['testproduct']];
      expect(result).toEqual(expected);
    });

    // All products match every prefix
    it('should return top 3 lex sorted products for each prefix when all products match', () => {
      const products = ['aaa', 'aab', 'aac', 'aad', 'aae'];
      const searchWord = 'aa';
      const result = suggestedProducts(products, searchWord);
      const expected = [
        ['aaa', 'aab', 'aac'], // 'a'
        ['aaa', 'aab', 'aac'], // 'aa'
      ];
      expect(result).toEqual(expected);
    });

    // Special characters in products
    it('should handle products with special characters', () => {
      const products = ['@home', '#1product', '$ale', 'sale'];
      const searchWord = 's';
      const result = suggestedProducts(products, searchWord);
      const expected = [['sale']];
      expect(result).toEqual(expected);
    });

    // Large input performance check
    it('should handle large number of products efficiently', () => {
      const products = Array.from({ length: 10_000 }, (_, i) => `product${i}`);
      const searchWord = 'product9';

      const sortedProducts = products.toSorted();
      const expected = [];

      for (let i = 1; i <= searchWord.length; i++) {
        const prefix = searchWord.slice(0, i);
        const suggestions = sortedProducts.filter((p) => p.startsWith(prefix)).slice(0, 3);
        expected.push(suggestions);
      }

      const result = suggestedProducts(products, searchWord);
      expect(result).toEqual(expected);
    });
  });
});
