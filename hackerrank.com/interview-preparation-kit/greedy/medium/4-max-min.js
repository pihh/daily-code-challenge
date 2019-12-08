// Complete the maxMin function below.
// Discover the dif between all values between first and last index - you can sort the array
function maxMin(k, arr) {
  let min = Number.MAX_SAFE_INTEGER;

  arr = arr.sort((a, b) => a - b);

  for (let i = k - 1; i < arr.length; i++) {
    const l = arr[i - k + 1];
    const r = arr[i];
    const result = r - l;
    if (result < min) min = result;
  }

  return min;
}
