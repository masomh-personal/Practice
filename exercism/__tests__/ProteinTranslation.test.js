import { translate } from '../ProteinTranslation.js';

describe('Protein Translation', () => {
  describe('Empty RNA strand', () => {
    it('translates into an empty protein list', () => {
      const input = undefined;
      const expected = [];
      const result = translate(input);
      expect(result).toEqual(expected);
    });
  });

  describe('Single codons', () => {
    const proteinMappings = [
      { protein: 'Methionine', codons: ['AUG'] },
      { protein: 'Phenylalanine', codons: ['UUU', 'UUC'] },
      { protein: 'Leucine', codons: ['UUA', 'UUG'] },
      { protein: 'Serine', codons: ['UCU', 'UCC', 'UCA', 'UCG'] },
      { protein: 'Tyrosine', codons: ['UAU', 'UAC'] },
      { protein: 'Cysteine', codons: ['UGU', 'UGC'] },
      { protein: 'Tryptophan', codons: ['UGG'] },
    ];

    proteinMappings.forEach(({ protein, codons }) => {
      codons.forEach((codon, index) => {
        it(`translates ${protein} codon sequence ${index + 1} into ${protein}`, () => {
          const input = codon;
          const expected = [protein];
          const result = translate(input);
          expect(result).toEqual(expected);
        });
      });
    });

    const stopCodons = ['UAA', 'UAG', 'UGA'];
    stopCodons.forEach((codon, index) => {
      it(`STOP codon RNA sequence ${index + 1} translates into an empty list`, () => {
        const input = codon;
        const expected = [];
        const result = translate(input);
        expect(result).toEqual(expected);
      });
    });
  });

  describe('Multiple codons', () => {
    it('translates a sequence of two identical protein codons into proteins', () => {
      const input = 'UUUUUU';
      const expected = ['Phenylalanine', 'Phenylalanine'];
      const result = translate(input);
      expect(result).toEqual(expected);
    });

    it('translates a sequence of two different protein codons into proteins', () => {
      const input = 'UUAUUG';
      const expected = ['Leucine', 'Leucine'];
      const result = translate(input);
      expect(result).toEqual(expected);
    });

    it('translates an RNA strand into the correct protein list', () => {
      const input = 'AUGUUUUGG';
      const expected = ['Methionine', 'Phenylalanine', 'Tryptophan'];
      const result = translate(input);
      expect(result).toEqual(expected);
    });

    it('stops translation if a STOP codon is at the beginning', () => {
      const input = 'UAGUGG';
      const expected = [];
      const result = translate(input);
      expect(result).toEqual(expected);
    });

    it('stops translation if a STOP codon is at the end of a three-codon sequence', () => {
      const input = 'AUGUUUUAA';
      const expected = ['Methionine', 'Phenylalanine'];
      const result = translate(input);
      expect(result).toEqual(expected);
    });

    it('stops translation if a STOP codon is in the middle of a three-codon sequence', () => {
      const input = 'UGGUAGUGG';
      const expected = ['Tryptophan'];
      const result = translate(input);
      expect(result).toEqual(expected);
    });

    it('stops translation if a STOP codon is in the middle of a six-codon sequence', () => {
      const input = 'UGGUGUUAUUAAUGGUUU';
      const expected = ['Tryptophan', 'Cysteine', 'Tyrosine'];
      const result = translate(input);
      expect(result).toEqual(expected);
    });
  });

  describe('Unexpected strands', () => {
    it('throws an error for a non-existing codon', () => {
      const input = 'AAA';
      expect(() => translate(input)).toThrow(new Error('Invalid codon'));
    });

    it('throws an error for unknown amino acids not part of a codon', () => {
      const input = 'XYZ';
      expect(() => translate(input)).toThrow(new Error('Invalid codon'));
    });

    it('throws an error for an incomplete RNA sequence', () => {
      const input = 'AUGU';
      expect(() => translate(input)).toThrow(new Error('Invalid codon'));
    });

    it('translates correctly for incomplete RNA sequences valid until a STOP codon', () => {
      const input = 'UUCUUCUAAUGGU';
      const expected = ['Phenylalanine', 'Phenylalanine'];
      const result = translate(input);
      expect(result).toEqual(expected);
    });
  });
});
