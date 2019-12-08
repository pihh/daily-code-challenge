// Complete the pairs function below.
function pairs(k, arr) {
  arr = arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  let count = 0;

  while (j < arr.length) {
    const a = arr[i];
    const b = arr[j];
    const diff = Math.abs(b - a);
    if (diff === k) {
      i++;
      if (i === j) {
        j++;
      }
      count++;
      continue;
    } else if (diff < k) {
      j++;
      continue;
    } else {
      i++;
      if (i === k) {
        k++;
      }
      continue;
    }
  }
  return count;
}
