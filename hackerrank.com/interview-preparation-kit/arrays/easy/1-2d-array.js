// In order to complete this we need to brute force it a bit
// So, think on the edge cases, like the matrix not having a minumum o f 3x3 -> return 0
// Start defining the absolute minimum = 7 = 7 places * -9
// Check if all the hourglasses's sum and check if they are greater than the max
//
function hourglassSum(matrix) {
  if (undefined === matrix[0]) return 0;

  const lenX = matrix[0].length - 2;
  const lenY = matrix.length - 2;

  if (lenX < 1 || lenX < 2) return 0;

  let max = -9 * 7;
  let absMax = 9 * 7;

  for (let y = 0; y < lenY; y++) {
    for (let x = 0; x < lenX; x++) {
      let sum = 0;
      sum += matrix[y][x] + matrix[y][x + 1] + matrix[y][x + 2];
      sum += matrix[y + 1][x + 1];
      sum += matrix[y + 2][x] + matrix[y + 2][x + 1] + matrix[y + 2][x + 2];
      if (sum > max) max = sum;
      if (max === absMax) return max;
    }
  }
  return max;
}
