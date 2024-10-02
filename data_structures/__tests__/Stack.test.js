import { Stack } from '../Stack.js';

describe('Stack Class', () => {
  let stack;

  // This will run before each test to create a new instance of Stack
  beforeEach(() => {
    stack = new Stack();
  });

  it('should start with an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  it('should push a single element onto the stack', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  it('should push multiple elements onto the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.getSize()).toBe(3);
    expect(stack.peek()).toBe(3); // Last element pushed should be at the top
  });

  it('should pop elements from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3); // Popping the top element
    expect(stack.getSize()).toBe(2); // Size should reduce
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should throw an error when popping from an empty stack', () => {
    expect(() => stack.pop()).toThrow('Stack is empty, nothing to pop!');
  });

  it('should throw an error when peeking into an empty stack', () => {
    expect(() => stack.peek()).toThrow('Stack is empty, nothing to peek!');
  });

  it('should return the correct size after multiple operations', () => {
    expect(stack.getSize()).toBe(0);
    stack.push(10);
    stack.push(20);
    expect(stack.getSize()).toBe(2);
    stack.pop();
    expect(stack.getSize()).toBe(1);
  });

  it('should check if the stack contains a specific value', () => {
    stack.push(5);
    stack.push(10);
    stack.push(15);
    expect(stack.contains(10)).toBe(true);
    expect(stack.contains(20)).toBe(false); // Value not present
  });

  it('should return true for isEmpty after all elements are popped', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should clear all elements from the stack', () => {
    stack.push(100);
    stack.push(200);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  it('should maintain stack behavior (LIFO)', () => {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.pop()).toBe('c');
    expect(stack.pop()).toBe('b');
    expect(stack.pop()).toBe('a');
  });

  it('should handle different data types correctly', () => {
    stack.push(42); // Number
    stack.push('hello'); // String
    stack.push({ key: 'value' }); // Object
    stack.push([1, 2, 3]); // Array

    expect(stack.pop()).toEqual([1, 2, 3]);
    expect(stack.pop()).toEqual({ key: 'value' });
    expect(stack.pop()).toBe('hello');
    expect(stack.pop()).toBe(42);
  });
});
