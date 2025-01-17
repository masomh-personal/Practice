import { Allergies } from '../Allergies.js';

describe('Leetcode #Custom: Allergies', () => {
  describe('allergicTo', () => {
    const allergens = [
      { name: 'eggs', score: 1 },
      { name: 'peanuts', score: 2 },
      { name: 'shellfish', score: 4 },
      { name: 'strawberries', score: 8 },
      { name: 'tomatoes', score: 16 },
      { name: 'chocolate', score: 32 },
      { name: 'pollen', score: 64 },
      { name: 'cats', score: 128 },
    ];

    allergens.forEach(({ name, score }) => {
      describe(`testing for ${name} allergy`, () => {
        const testCases = [
          { input: 0, expected: false },
          { input: score, expected: true },
          { input: score * 3, expected: true },
          { input: score / 2, expected: false },
          { input: 255, expected: true },
        ];

        testCases.forEach(({ input, expected }) => {
          it(`should return ${expected} for score ${input}`, () => {
            const allergies = new Allergies(input);
            const result = allergies.allergicTo(name);
            expect(result).toEqual(expected);
          });
        });
      });
    });
  });

  describe('list', () => {
    const testCases = [
      { input: 0, expected: [] },
      { input: 1, expected: ['eggs'] },
      { input: 2, expected: ['peanuts'] },
      { input: 8, expected: ['strawberries'] },
      { input: 3, expected: ['eggs', 'peanuts'] },
      { input: 5, expected: ['eggs', 'shellfish'] },
      { input: 248, expected: ['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'] },
      {
        input: 255,
        expected: [
          'eggs',
          'peanuts',
          'shellfish',
          'strawberries',
          'tomatoes',
          'chocolate',
          'pollen',
          'cats',
        ],
      },
      {
        input: 509,
        expected: ['eggs', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'],
      },
      { input: 257, expected: ['eggs'] },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${JSON.stringify(expected)} for score ${input}`, () => {
        const allergies = new Allergies(input);
        const result = allergies.list();
        expect(result).toEqual(expected);
      });
    });
  });
});
