import StringBuilder from '../StringBuilder.js'; // Adjust the import path as necessary

describe('StringBuilder Class', () => {
  let sb;

  // Before each test, initialize a new StringBuilder instance
  beforeEach(() => {
    sb = new StringBuilder();
  });

  // Test constructor with initial value
  it('should initialize with an empty string by default', () => {
    expect(sb.printString()).toBe(''); // Empty by default
  });

  it('should initialize with the provided initial value', () => {
    const sbWithInitial = new StringBuilder('Initial');
    expect(sbWithInitial.printString()).toBe('Initial');
  });

  // Test append functionality
  it('should append values to the string', () => {
    sb.append('Hello').append(' World');
    expect(sb.printString()).toBe('Hello World');
  });

  // Test prepend functionality
  it('should prepend values to the string', () => {
    sb.append('World').prepend('Hello ');
    expect(sb.printString()).toBe('Hello World');
  });

  // Test both append and prepend
  it('should prepend and append values correctly', () => {
    sb.append('World').prepend('Hello ').append('!');
    expect(sb.printString()).toBe('Hello World!');
  });

  // Test clearing the string
  it('should clear the string correctly', () => {
    sb.append('Hello').append(' World');
    sb.clear(); // Clear the string
    expect(sb.printString()).toBe('');
  });

  // Test length method
  it('should return the correct length of the string', () => {
    sb.append('Hello').append(' World');
    expect(sb.length()).toBe(11); // Length of "Hello World"
  });

  // Test chaining functionality
  it('should support method chaining for append and prepend', () => {
    sb.append('Hello').prepend('Say: ').append(', world!');
    expect(sb.printString()).toBe('Say: Hello, world!');
  });
});
