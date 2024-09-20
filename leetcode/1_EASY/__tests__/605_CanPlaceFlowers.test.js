import { canPlaceFlowers } from '../605_CanPlaceFlowers.js';

describe('canPlaceFlowers', () => {
  it('should return true when 1 flower can be planted', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return false when 2 flowers cannot be planted', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;
    expect(canPlaceFlowers(flowerbed, n)).toBe(false);
  });

  it('should return true when the flowerbed is empty and enough space for n flowers', () => {
    const flowerbed = [0, 0, 0, 0, 0];
    const n = 2;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return true when no flowers need to be planted', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 0;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return false when there is not enough space for n flowers', () => {
    const flowerbed = [1, 0, 1, 0, 1];
    const n = 1;
    expect(canPlaceFlowers(flowerbed, n)).toBe(false);
  });

  it('should return true when all plots are empty and can plant all flowers', () => {
    const flowerbed = [0, 0, 0, 0, 0, 0];
    const n = 3;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return false when flowerbed is almost full and cannot fit additional flowers', () => {
    const flowerbed = [1, 1, 1, 0, 0, 1, 0];
    const n = 2;
    expect(canPlaceFlowers(flowerbed, n)).toBe(false);
  });

  it('should return true when there is just enough space for 1 flower at the end', () => {
    const flowerbed = [0, 0, 1, 0, 0];
    const n = 1;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return true when there is just enough space for 1 flower at the beginning', () => {
    const flowerbed = [0, 0, 1, 0, 1];
    const n = 1;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });
});
