/**
 * Counts the occurrences of nucleotides (A, C, G, T) in a given DNA strand.
 * Returns a space-separated string of counts in the order: A, C, G, T.
 *
 * Time Complexity: O(n) - Single pass through the strand.
 * Space Complexity: O(1) - Fixed size frequency object.
 *
 * @param {string} strand - A string representing a DNA sequence.
 * @returns {string} A space-separated string representing the count of A, C, G, and T.
 * @throws {Error} If the strand contains invalid characters.
 */
export function countNucleotides(strand) {
  // Return default count for an empty strand
  if (!strand) return '0 0 0 0';

  // Frequency counter doubles as a validity check
  const freqCount = { A: 0, C: 0, G: 0, T: 0 };

  // Iterate through the strand, updating counts and validating characters
  for (const char of strand) {
    if (Reflect.get(freqCount, char) === undefined) {
      throw new Error('Invalid character in DNA strand!');
    }
    freqCount[char]++;
  }

  // Convert counts to a space-separated string in the order A, C, G, T
  const { A, C, G, T } = freqCount;
  return `${A} ${C} ${G} ${T}`;
}
