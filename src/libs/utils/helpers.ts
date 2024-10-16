import { PhotoType } from "./types";

export { splitToSmallChunks };

/**
 * Splits an array into N chunks.
 *
 * @param array - The array to be split.
 * @param n - The number of chunks to split the array into.
 * @returns - An array containing the split chunks.
 */
function splitToSmallChunks(array: Array<PhotoType>, n: number) {
  // Handle edge cases
  if (n <= 0) return [];
  if (n >= array.length) return [array];

  const result: Array<Array<PhotoType>> = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}
