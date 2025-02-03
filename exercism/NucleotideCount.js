/**
 * Counts the occurrences of nucleotides (A, C, G, T) in a given DNA strand.
 * Returns a space-separated string of counts in the order: A, C, G, T.
 *
 * Time Complexity: O(n) - We iterate through the strand once to populate the frequency counter.
 * Space Complexity: O(1) - The frequency counter always holds four fixed keys, regardless of input size.
 *
 * @param {string} strand - A string representing a DNA sequence.
 * @returns {string} A space-separated string representing the count of A, C, G, and T.
 * @throws {Error} If the strand contains invalid characters.
 */
export function countNucleotides(strand) {
  // Return default count for an empty strand
  if (!strand) return '0 0 0 0';

  // Set for quick O(1) validation of valid nucleotides
  const VALID_CHARS = new Set(['A', 'C', 'G', 'T']);

  // Frequency counter for nucleotide counts
  const freqCount = { A: 0, C: 0, G: 0, T: 0 };

  // Iterate through the strand, updating counts and checking for invalid characters
  for (const char of strand) {
    if (!VALID_CHARS.has(char)) {
      throw new Error('Invalid nucleotide in strand');
    }
    freqCount[char]++;
  }

  // Convert counts to a space-separated string in the order A, C, G, T
  const { A, C, G, T } = freqCount;
  return `${A} ${C} ${G} ${T}`;
}
