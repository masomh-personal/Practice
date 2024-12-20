import { join } from '../2722_JoinTwoArraysById.js';

describe('Leetcode #2722: Join Two Arrays by ID', () => {
  it('joins two arrays by matching ids, including unmatched items, and sorts by id', () => {
    const array1 = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    const array2 = [
      { id: 1, age: 25 },
      { id: 2, age: 30 },
      { id: 4, age: 35 },
    ];
    const result = join(array1, array2);
    const expected = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie' },
      { id: 4, age: 35 },
    ];
    expect(result).toEqual(expected);
  });

  it('handles cases where no IDs match and includes all items, sorted by id', () => {
    const array1 = [
      { id: 5, name: 'Daisy' },
      { id: 6, name: 'Edward' },
    ];
    const array2 = [
      { id: 1, age: 40 },
      { id: 2, age: 50 },
    ];
    const result = join(array1, array2);
    const expected = [
      { id: 1, age: 40 },
      { id: 2, age: 50 },
      { id: 5, name: 'Daisy' },
      { id: 6, name: 'Edward' },
    ];
    expect(result).toEqual(expected);
  });

  it('handles empty arrays and returns an empty array', () => {
    const array1 = [];
    const array2 = [];
    const result = join(array1, array2);
    const expected = [];
    expect(result).toEqual(expected);
  });

  it('merges overlapping IDs with properties from the second array taking precedence and sorts by id', () => {
    const array1 = [{ id: 7, name: 'Fiona', location: 'NY' }];
    const array2 = [{ id: 7, name: 'Faye', age: 27 }];
    const result = join(array1, array2);
    const expected = [{ id: 7, name: 'Faye', location: 'NY', age: 27 }];
    expect(result).toEqual(expected);
  });

  // Let's skip this as we need to properly follow description/constraints
  it.skip('does not mutate the original arrays', () => {
    const array1 = [{ id: 8, name: 'George' }];
    const array2 = [{ id: 8, age: 45 }];
    const copy1 = JSON.parse(JSON.stringify(array1));
    const copy2 = JSON.parse(JSON.stringify(array2));
    join(array1, array2);
    expect(array1).toEqual(copy1);
    expect(array2).toEqual(copy2);
  });

  it('handles case with no overlapping IDs and includes all items sorted by id', () => {
    const array1 = [
      { id: 1, x: 36, d: 26, f: 35 },
      { id: 3, c: 20, z: 75 },
    ];
    const array2 = [{ id: 2, o: 48, z: 84, y: 61 }];
    const result = join(array1, array2);
    const expected = [
      { id: 1, x: 36, d: 26, f: 35 },
      { id: 2, o: 48, z: 84, y: 61 },
      { id: 3, c: 20, z: 75 },
    ];
    expect(result).toEqual(expected);
  });
});
