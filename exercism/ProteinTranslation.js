// Constants for codon mappings and stop codons
const CODON_MAP = new Map([
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'],
  ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'],
  ['UUG', 'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'],
  ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
]);

const STOP_CODONS = ['UAA', 'UAG', 'UGA'];

/**
 * Translates RNA sequences into proteins
 *
 * @param {string} rnaStr - RNA string to translate
 * @returns {string[]} - List of proteins translated from RNA
 */
export const translate = (rnaStr = '') => {
  // If the input RNA string is empty, return an empty array
  if (!rnaStr.length) return [];

  /**
   * Checks if a codon is a stop codon
   *
   * @param {string} codon - A 3-character RNA codon
   * @returns {boolean} - True if the codon is a stop codon, false otherwise
   */
  const isStopCodon = (codon) => STOP_CODONS.includes(codon);

  /**
   * Generator function to process RNA sequences triplet by triplet
   * This approach avoids creating an unnecessary array of codons in memory
   * and ensures that codons are exactly 3 characters long.
   *
   * @param {string} sequence - The RNA sequence to process
   * @yields {string} - The next valid 3-character codon
   */
  function* tripletGenerator(sequence) {
    for (let i = 0; i < sequence.length; i += 3) {
      const codon = sequence.slice(i, i + 3);
      // Ensure each codon is exactly 3 characters long
      if (codon.length !== 3) {
        throw new Error('Invalid codon');
      }
      yield codon; // Return the valid codon
    }
  }

  const result = []; // Array to hold translated proteins

  // Process each codon using the generator
  for (const triplet of tripletGenerator(rnaStr)) {
    // Stop translation if a stop codon is encountered
    if (isStopCodon(triplet)) {
      break;
    }

    // Check if the codon exists in the mapping
    if (!CODON_MAP.has(triplet)) {
      throw new Error('Invalid codon');
    }

    // Add the corresponding protein to the result
    result.push(CODON_MAP.get(triplet));
  }

  return result; // Return the list of translated proteins
};
