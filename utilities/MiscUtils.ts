export default class MiscUtils {
  /**
   * measurePerformance - A utility function to measure the execution time of a function.
   *
   * This function takes a function (fn) and any number of arguments (...args),
   * measures how long it takes for the function to execute with the provided arguments,
   * and returns the duration in milliseconds.
   *
   * @param fn - The function whose performance is being measured.
   * @param args - The arguments to be passed to the function.
   * @returns The time taken for the function to execute in milliseconds.
   */
  static measurePerformance = <T extends (...args: any[]) => any>(
    fn: T,
    ...args: Parameters<T>
  ): number => {
    const start: number = performance.now();

    try {
      fn(...args);
    } catch (error) {
      console.error('Error while executing the function:', error);
      throw error;
    }

    const end: number = performance.now();

    return end - start;
  };
}
