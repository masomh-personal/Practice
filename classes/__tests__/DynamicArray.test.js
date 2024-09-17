import DynamicArray from '../DynamicArray.js'; // Assuming DynamicArray is in the same folder

describe('DynamicArray', () => {
  let dynamicArray;

  beforeEach(() => {
    dynamicArray = new DynamicArray(2); // Initialize with a capacity of 2 for testing
  });

  describe('constructor', () => {
    it('should initialize with the given capacity', () => {
      expect(dynamicArray.getCapacity()).toBe(2);
      expect(dynamicArray.getSize()).toBe(0); // Empty initially
    });

    it('should throw an error if initialized with a capacity <= 0', () => {
      expect(() => new DynamicArray(0)).toThrow('Capacity must be greater than 0!');
    });
  });

  describe('get', () => {
    it('should return the element at a valid index', () => {
      dynamicArray.pushback(10);
      dynamicArray.pushback(20);
      expect(dynamicArray.get(0)).toBe(10);
      expect(dynamicArray.get(1)).toBe(20);
    });

    it('should throw an error for invalid index access', () => {
      expect(() => dynamicArray.get(5)).toThrow();
    });
  });

  describe('set', () => {
    it('should set the element at a valid index', () => {
      dynamicArray.pushback(10);
      dynamicArray.pushback(20);
      dynamicArray.set(0, 30);
      expect(dynamicArray.get(0)).toBe(30);
      expect(dynamicArray.get(1)).toBe(20);
    });

    it('should throw an error for invalid index setting', () => {
      expect(() => dynamicArray.set(5, 30)).toThrow('Index i out of bounds');
    });
  });

  describe('pushback', () => {
    it('should add an element to the array', () => {
      dynamicArray.pushback(5);
      expect(dynamicArray.getSize()).toBe(1);
      expect(dynamicArray.get(0)).toBe(5);
    });

    it('should resize the array when capacity is exceeded', () => {
      dynamicArray.pushback(5);
      dynamicArray.pushback(10);
      dynamicArray.pushback(15); // This should trigger a resize
      expect(dynamicArray.getCapacity()).toBe(4);
      expect(dynamicArray.get(2)).toBe(15);
    });
  });

  describe('popback', () => {
    it('should remove and return the last element', () => {
      dynamicArray.pushback(10);
      dynamicArray.pushback(20);
      const popped = dynamicArray.popback();
      expect(popped).toBe(20);
      expect(dynamicArray.getSize()).toBe(1);
      expect(dynamicArray.get(0)).toBe(10);
    });

    it('should throw an error if trying to pop from an empty array', () => {
      expect(() => dynamicArray.popback()).toThrow();
    });
  });

  describe('resize', () => {
    it('should double the capacity when called', () => {
      expect(dynamicArray.getCapacity()).toBe(2);
      dynamicArray.resize();
      expect(dynamicArray.getCapacity()).toBe(4); // Capacity should now be doubled to 4
    });
  });

  describe('getSize', () => {
    it('should return the correct number of elements', () => {
      expect(dynamicArray.getSize()).toBe(0);
      dynamicArray.pushback(5);
      dynamicArray.pushback(10);
      expect(dynamicArray.getSize()).toBe(2);
    });
  });

  describe('getCapacity', () => {
    it('should return the current capacity', () => {
      expect(dynamicArray.getCapacity()).toBe(2);
      dynamicArray.pushback(5);
      dynamicArray.pushback(10);
      dynamicArray.pushback(15); // This should trigger a resize
      expect(dynamicArray.getCapacity()).toBe(4);
    });
  });
});
