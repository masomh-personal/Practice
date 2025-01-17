export class Allergies {
  // Map of allergens to their corresponding scores
  #allergyMap = new Map([
    ['eggs', 1],
    ['peanuts', 2],
    ['shellfish', 4],
    ['strawberries', 8],
    ['tomatoes', 16],
    ['chocolate', 32],
    ['pollen', 64],
    ['cats', 128],
  ]);

  // Precomputed list of allergen keys for quick iteration
  #allergenKeys = Array.from(this.#allergyMap.keys());

  // Private score to represent the allergy bitmask
  #score;

  constructor(score = 0) {
    if (score < 0) {
      throw new Error('Score cannot be negative');
    }
    this.#score = score;
  }

  // Getter for the score (bitmask)
  get score() {
    return this.#score;
  }

  // Returns a list of allergens the person is allergic to
  list() {
    return this.#allergenKeys.filter((allergen) => this.allergicTo(allergen));
  }

  // Checks if the person is allergic to a specific allergen
  allergicTo(allergen) {
    if (!this.#allergyMap.has(allergen)) {
      throw new Error(`Invalid allergen: ${allergen}. Please check the allergen name.`);
    }

    // Use bitwise AND to check if the allergen's score contributes to the total score
    // If (score & allergen value) is non-zero, it means the allergen is present in the score
    return (this.#score & this.#allergyMap.get(allergen)) !== 0;
  }
}
