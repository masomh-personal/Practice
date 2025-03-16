import { Trie } from '../Trie';

describe('Trie Class Basic Functionality', () => {
  it('should insert products and retrieve correct suggestions', () => {
    const trie = new Trie();
    const products = ['apple', 'app', 'apricot', 'banana', 'application'];

    for (const product of products) {
      trie.insert(product);
    }

    const searchWord = 'app';
    const result = trie.getSuggestions(searchWord);
    const expected = [
      ['app', 'apple', 'application'], // 'a'
      ['app', 'apple', 'application'], // 'ap'
      ['app', 'apple', 'application'], // 'app'
    ];

    expect(result).toEqual(expected);
  });

  it('should return empty suggestions when prefix does not exist', () => {
    const trie = new Trie();
    trie.insert('hike');
    trie.insert('hill');
    trie.insert('hint');

    const result = trie.getSuggestions('zoo');
    const expected = [[], [], []];

    expect(result).toEqual(expected);
  });

  it('should return partial suggestions when prefix partially exists', () => {
    const trie = new Trie();
    trie.insert('home');
    trie.insert('host');
    trie.insert('hotdog');

    const result = trie.getSuggestions('hop');
    const expected = [['home', 'host', 'hotdog'], ['home', 'host', 'hotdog'], []];

    expect(result).toEqual(expected);
  });
});
