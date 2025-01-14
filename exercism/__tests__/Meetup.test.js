import { meetup } from '../Meetup.js';
// NOTE: tests converted from Exercism.org => Vitest compatible

describe('Exercism: Meetup', () => {
  describe(`Descriptor: 'first'`, () => {
    it('should return the first Friday of December 2012', () => {
      const year = 2012,
        month = 12,
        descriptor = 'first',
        weekday = 'Friday';
      const expected = new Date(2012, 11, 7);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });

    it('should return the first Friday of December 2012', () => {
      const year = 2012,
        month = 12,
        descriptor = 'first',
        weekday = 'Friday';
      const expected = new Date(2012, 11, 7);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });
  });

  describe(`Descriptor: 'second'`, () => {
    it('should return the second Monday of March 2013', () => {
      const year = 2013,
        month = 3,
        descriptor = 'second',
        weekday = 'Monday';
      const expected = new Date(2013, 2, 11);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });

    it('should return the second Friday of November 2013', () => {
      const year = 2013,
        month = 11,
        descriptor = 'second',
        weekday = 'Friday';
      const expected = new Date(2013, 10, 8);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });
  });

  describe(`Descriptor: 'third'`, () => {
    it('should return the third Tuesday of May 2013', () => {
      const year = 2013,
        month = 5,
        descriptor = 'third',
        weekday = 'Tuesday';
      const expected = new Date(2013, 4, 21);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });

    it('should return the third Thursday of October 2013', () => {
      const year = 2013,
        month = 10,
        descriptor = 'third',
        weekday = 'Thursday';
      const expected = new Date(2013, 9, 17);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });
  });

  describe(`Descriptor: 'fourth'`, () => {
    it('should return the fourth Wednesday of July 2013', () => {
      const year = 2013,
        month = 7,
        descriptor = 'fourth',
        weekday = 'Wednesday';
      const expected = new Date(2013, 6, 24);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });

    it('should return the fourth Monday of April 2013', () => {
      const year = 2013,
        month = 4,
        descriptor = 'fourth',
        weekday = 'Monday';
      const expected = new Date(2013, 3, 22);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });
  });

  describe(`Descriptor: 'teenth'`, () => {
    it('should return the first Monday that falls between the 13th and 19th of May 2013', () => {
      const year = 2013,
        month = 5,
        descriptor = 'teenth',
        weekday = 'Monday';
      const expected = new Date(2013, 4, 13);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });

    it('should return the first Wednesday that falls between the 13th and 19th of June 2013', () => {
      const year = 2013,
        month = 6,
        descriptor = 'teenth',
        weekday = 'Wednesday';
      const expected = new Date(2013, 5, 19);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });
  });

  describe(`Descriptor: 'last'`, () => {
    it('should return the last Wednesday of December 2014', () => {
      const year = 2014,
        month = 12,
        descriptor = 'last',
        weekday = 'Wednesday';
      const expected = new Date(2014, 11, 31);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });

    it('should return the last Sunday of February 2015', () => {
      const year = 2015,
        month = 2,
        descriptor = 'last',
        weekday = 'Sunday';
      const expected = new Date(2015, 1, 22);
      const result = meetup(year, month, descriptor, weekday);
      expect(result).toEqual(expected);
    });
  });
});
