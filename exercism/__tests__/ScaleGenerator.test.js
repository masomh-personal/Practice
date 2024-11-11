import { Scale } from '../ScaleGenerator.js';

describe('ScaleGenerator', () => {
  describe('Chromatic scales', () => {
    test('Chromatic scale with sharps', () => {
      const expected = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
      const result = new Scale('C').chromatic();
      expect(result).toEqual(expected);
    });

    test('Chromatic scale with flats', () => {
      const expected = ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E'];
      const result = new Scale('F').chromatic();
      expect(result).toEqual(expected);
    });

    test('Chromatic scale with sharps from D', () => {
      const expected = ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];
      const result = new Scale('D').chromatic();
      expect(result).toEqual(expected);
    });

    test('Chromatic scale with flats from D', () => {
      const expected = ['D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db'];
      const result = new Scale('d').chromatic();
      expect(result).toEqual(expected);
    });
  });

  describe('Scales with specified intervals', () => {
    test('Simple major scale', () => {
      const expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
      const result = new Scale('C').interval('MMmMMMm');
      expect(result).toEqual(expected);
    });

    test('Major scale with sharps', () => {
      const expected = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
      const result = new Scale('G').interval('MMmMMMm');
      expect(result).toEqual(expected);
    });

    test('Major scale with flats', () => {
      const expected = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'];
      const result = new Scale('F').interval('MMmMMMm');
      expect(result).toEqual(expected);
    });

    test('Minor scale with sharps', () => {
      const expected = ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E', 'F#'];
      const result = new Scale('f#').interval('MmMMmMM');
      expect(result).toEqual(expected);
    });

    test('Minor scale with flats', () => {
      const expected = ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'];
      const result = new Scale('bb').interval('MmMMmMM');
      expect(result).toEqual(expected);
    });

    test('Dorian mode', () => {
      const expected = ['D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
      const result = new Scale('d').interval('MmMMMmM');
      expect(result).toEqual(expected);
    });

    test('Phrygian mode', () => {
      const expected = ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E'];
      const result = new Scale('e').interval('mMMMmMM');
      expect(result).toEqual(expected);
    });

    test('Lydian mode', () => {
      const expected = ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#', 'A'];
      const result = new Scale('a').interval('MMMmMMm');
      expect(result).toEqual(expected);
    });

    test('Mixolydian mode', () => {
      const expected = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
      const result = new Scale('Eb').interval('MMmMMmM');
      expect(result).toEqual(expected);
    });

    test('Locrian mode', () => {
      const expected = ['G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'];
      const result = new Scale('g').interval('mMMmMMM');
      expect(result).toEqual(expected);
    });

    test('Harmonic minor', () => {
      const expected = ['D', 'E', 'F', 'G', 'A', 'Bb', 'Db', 'D'];
      const result = new Scale('d').interval('MmMMmAm');
      expect(result).toEqual(expected);
    });

    test('Octatonic', () => {
      const expected = ['C', 'D', 'D#', 'F', 'F#', 'G#', 'A', 'B', 'C'];
      const result = new Scale('C').interval('MmMmMmMm');
      expect(result).toEqual(expected);
    });

    test('Hexatonic', () => {
      const expected = ['Db', 'Eb', 'F', 'G', 'A', 'B', 'Db'];
      const result = new Scale('Db').interval('MMMMMM');
      expect(result).toEqual(expected);
    });

    test('Pentatonic', () => {
      const expected = ['A', 'B', 'C#', 'E', 'F#', 'A'];
      const result = new Scale('A').interval('MMAMA');
      expect(result).toEqual(expected);
    });

    test('Enigmatic', () => {
      const expected = ['G', 'G#', 'B', 'C#', 'D#', 'F', 'F#', 'G'];
      const result = new Scale('G').interval('mAMMMmm');
      expect(result).toEqual(expected);
    });
  });
});
