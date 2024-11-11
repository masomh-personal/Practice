export class Scale {
  // Constants representing the 12 chromatic notes and scales based on sharps and flats
  #CHROMATIC_NOTES = 12;
  #sharpChromaticScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  #flatChromaticScale = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

  // Sets of keys that traditionally use sharps or flats, for major and minor keys
  #sharpKeys = new Set(['C', 'a', 'G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#']);
  #flatKeys = new Set(['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb']);

  #tonic; // Stores the normalized tonic for consistent use in generating scales
  #scaleBase; // Stores the selected chromatic scale (sharp or flat) based on the tonic

  constructor(tonic) {
    // Validate that a tonic is provided, otherwise throw an error
    if (!tonic) {
      throw new Error('Tonic must be provided and valid');
    }

    // Determine if the tonic belongs to a sharp or flat key signature:
    // - sharpKeys: keys that traditionally use sharps (e.g., C major, G major)
    // - flatKeys: keys that traditionally use flats (e.g., F major, Bb major)
    const isSharpScale = this.#sharpKeys.has(tonic);
    const isFlatScale = this.#flatKeys.has(tonic);
    if (!isSharpScale && !isFlatScale) {
      throw new Error('Invalid tonic'); // Throw error if the tonic does not match any known key signatures
    }

    // Set the scale base to either sharpChromaticScale or flatChromaticScale
    // based on whether the tonic is part of sharpKeys or flatKeys.
    this.#scaleBase = isSharpScale ? this.#sharpChromaticScale : this.#flatChromaticScale;

    // Normalize tonic to a consistent uppercase format with lowercase suffix if needed (e.g., "F#", "Bb")
    // This ensures that the tonic is consistently formatted across methods
    this.#tonic = tonic[0].toUpperCase() + tonic.slice(1).toLowerCase();
  }

  chromatic() {
    // Generates a chromatic scale of 12 notes, starting from the given tonic.
    // The generated scale will loop from the tonic through 12 chromatic steps,
    // using the previously selected scaleBase (sharp or flat) as a reference.

    const generatedScale = []; // Initialize an array to store the generated scale
    let scaleBaseIdx = this.#scaleBase.indexOf(this.#tonic); // Find the index of the tonic in the selected chromatic scale

    // Loop to generate all 12 notes of the chromatic scale starting from the tonic
    for (let i = 0; i < this.#CHROMATIC_NOTES; i++) {
      generatedScale.push(this.#scaleBase[scaleBaseIdx]); // Add the current note to the scale

      // Increment index by 1, wrapping back to start if it exceeds the array length
      scaleBaseIdx = (scaleBaseIdx + 1) % this.#scaleBase.length;
    }

    return generatedScale; // Return the full chromatic scale starting from the tonic
  }

  interval(intervals) {
    // Generates a diatonic scale based on a given pattern of intervals.
    // Intervals can be M (major step, 2 half steps), m (minor step, 1 half step), or A (augmented step, 3 half steps).
    // Starting from the tonic, it adds notes to the scale according to the specified intervals.
    const intervalStepMap = { M: 2, A: 3, m: 1 }; // Map of interval types to their corresponding number of steps
    const diatonicScale = [this.#tonic]; // Initialize scale with tonic as the first note

    // Generate the full chromatic scale to reference each interval step from the tonic
    const chromaticBaseScales = this.chromatic();
    let scaleBaseIdx = chromaticBaseScales.indexOf(this.#tonic); // Find index of tonic to start the interval calculation

    // Loop over each interval in the input pattern
    for (const intervalStep of intervals) {
      // Increment the index by the specified interval step (M, m, A) and wrap around if needed
      scaleBaseIdx = (scaleBaseIdx + intervalStepMap[intervalStep]) % chromaticBaseScales.length;

      // Add the selected note at the new index to the diatonic scale
      diatonicScale.push(chromaticBaseScales[scaleBaseIdx]);
    }

    return diatonicScale; // Return the diatonic scale generated based on the interval pattern
  }
}
