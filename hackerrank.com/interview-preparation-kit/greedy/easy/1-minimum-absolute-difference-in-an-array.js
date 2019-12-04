function minimumAbsoluteDifference(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  arr = arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    let _min = Math.abs(arr[i - 1] - arr[i]);
    if (_min < min) min = _min;
  }

  return min;
}
