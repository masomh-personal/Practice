import { countNucleotides } from '../NucleotideCount.js';

describe('countNucleotides', () => {
  describe('Valid DNA Sequences', () => {
    it("returns '0 0 0 0' for an empty DNA strand", () => {
      // An empty strand should yield zero counts for all nucleotides.
      const result = countNucleotides('');
      expect(result).toEqual('0 0 0 0');
    });

    it('correctly counts a single nucleotide', () => {
      // For a strand consisting of only "G", the counts should be:
      // A: 0, C: 0, G: 1, T: 0 → "0 0 1 0"
      const result = countNucleotides('G');
      expect(result).toEqual('0 0 1 0');
    });

    it('correctly counts a strand with repeated nucleotides', () => {
      // A strand like "AAAAAA" should return "6 0 0 0"
      const result = countNucleotides('AAAAAA');
      expect(result).toEqual('6 0 0 0');
    });

    it('correctly counts a mixed strand with one of each nucleotide', () => {
      // A strand "ACGT" should have one of each nucleotide:
      // → "1 1 1 1"
      const result = countNucleotides('ACGT');
      expect(result).toEqual('1 1 1 1');
    });

    it("correctly counts the nucleotides in 'GATTACA'", () => {
      // For the strand "GATTACA":
      // A: 3, C: 1, G: 1, T: 2 → "3 1 1 2"
      const result = countNucleotides('GATTACA');
      expect(result).toEqual('3 1 1 2');
    });
  });

  describe('Invalid DNA Sequences', () => {
    it('throws an error when the DNA strand contains invalid characters', () => {
      // The string "AGTX" contains an invalid character 'X'
      expect(() => countNucleotides('AGTX')).toThrow();
    });

    it('throws an error when the DNA strand contains lowercase letters', () => {
      // If the implementation expects uppercase only,
      // a strand like "acgt" should be considered invalid.
      expect(() => countNucleotides('acgt')).toThrow();
    });

    it('throws an error when the DNA strand contains numeric characters', () => {
      // A strand like "A1C2G3T4" is invalid due to the numeric characters.
      expect(() => countNucleotides('A1C2G3T4')).toThrow();
    });
  });
});
