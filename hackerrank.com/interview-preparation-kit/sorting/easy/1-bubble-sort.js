// 30 out of 30
function countSwaps(arr = []) {
  let count = 0;
  const n = arr.length;

  const swap = function(a, b) {
    const _a = arr[a];
    const _b = arr[b];
    arr[a] = _b;
    arr[b] = _a;
    count++;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[n - 1]}`);
}
