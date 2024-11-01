/**
 * Cipher class implementing a substitution cipher with a custom key.
 * The key specifies the shift distances for encoding and decoding characters.
 */
export class Cipher {
  #MAX_CHAR_CODE = 122; // ASCII code for 'z'
  #MIN_CHAR_CODE = 97; // ASCII code for 'a'
  #key;

  /**
   * Constructs a Cipher instance with a given or generated key.
   * @param {string} [key] - A custom key for the cipher. If not provided, generates a random 100-character key.
   */
  constructor(key) {
    this.#key = key || this.#generateKey(100); // Generate a random key if none is provided
    this.#validateLowercaseAlpha(this.#key);
  }

  /**
   * Gets the key used by the cipher.
   * @return {string} The key used for encoding and decoding.
   */
  get key() {
    return this.#key;
  }

  /**
   * Encodes a given string using the cipher's key for character shifts.
   * @param {string} codeString - The input string to encode, consisting only of lowercase letters.
   * @return {string} The encoded string.
   */
  encode(codeString) {
    this.#validateLowercaseAlpha(codeString);

    return [...codeString]
      .map((char, index) => {
        const currCharCode = char.charCodeAt(0);
        const keyChar = this.key[index % this.key.length];
        const shift = keyChar.charCodeAt(0) - this.#MIN_CHAR_CODE; // Calculate shift based on key character ('a' = 0, 'b' = 1, ...)

        let shiftedCharCode = currCharCode + shift;

        if (shiftedCharCode > this.#MAX_CHAR_CODE) {
          shiftedCharCode = this.#MIN_CHAR_CODE + (shiftedCharCode - this.#MAX_CHAR_CODE - 1);
        }

        return String.fromCharCode(shiftedCharCode);
      })
      .join('');
  }

  /**
   * Decodes an encoded string using the cipher's key by reversing the character shifts.
   * @param {string} codeString - The encoded string to decode, consisting only of lowercase letters.
   * @return {string} The decoded original string.
   */
  decode(codeString) {
    this.#validateLowercaseAlpha(codeString);

    return [...codeString]
      .map((char, index) => {
        const currCharCode = char.charCodeAt(0);
        const keyChar = this.key[index % this.key.length];
        const shift = keyChar.charCodeAt(0) - this.#MIN_CHAR_CODE; // Calculate shift based on key character

        let shiftedCharCode = currCharCode - shift;

        if (shiftedCharCode < this.#MIN_CHAR_CODE) {
          shiftedCharCode = this.#MAX_CHAR_CODE - (this.#MIN_CHAR_CODE - shiftedCharCode - 1);
        }

        return String.fromCharCode(shiftedCharCode);
      })
      .join('');
  }

  /**
   * Validates that a string contains only lowercase alphabetic characters.
   * @param {string} str - The string to validate.
   * @throws Will throw an error if the string contains non-lowercase letters.
   * @private
   */
  #validateLowercaseAlpha(str) {
    if (!/^[a-z]+$/.test(str)) {
      throw new Error('Only lowercase alpha characters are allowed');
    }
  }

  /**
   * Generates a random lowercase alphabet key of the specified length.
   * @param {number} length - The desired length of the generated key.
   * @return {string} A randomly generated string of lowercase letters.
   * @private
   */
  #generateKey(length) {
    return Array.from({ length }, () =>
      String.fromCharCode(this.#MIN_CHAR_CODE + Math.floor(Math.random() * 26))
    ).join('');
  }
}
