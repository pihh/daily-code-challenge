// Good morning! Here's your coding interview problem for today.
//
// This problem was asked by Stripe.
//
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
//
// You can modify the input array in-place.

// SOLUTION 1 , not sure if indexOf is valid
function main(arr = []) {
  let min = 1;
  let max = Number.MAX_SAFE_INTEGER;
  const len = arr.length + 2; // For the edge case [1]
  for (let i = 1; i < len; i++) {
    // Find first integer that arr.indexOf(it) equals -1
    if (-1 === arr.indexOf(i)) {
      return i;
    }
  }
  return min;
}

// SOLUTION 2 - last possible min pointer.
// It seemed too simple just using indexOf
function main(arr = []) {
  let a = arr[0];
  let b = arr[0];
  let i = 1;
  let dist = b - a;
  let min = Number.MAX_SAFE_INTEGER;
  let loops = 0;

  while (loops < 100 && i < arr.length) {
    a = arr[i - 1];
    b = arr[i];

    if (a < 1) {
      arr.splice(i - 1, 1);
      continue;
    }
    if (b < 1) {
      arr.splice(i, 1);
      continue;
    }
    if (a === b) {
      arr.splice(i, 1);
      continue;
    }

    if (a > b) {
      arr[i] = a;
      arr[i - 1] = b;
      i--;
      continue;
    }
    dist = b - a;
    if (dist > 1 && a + 1 < min) {
      min = a + 1;
    }
    i++;
    loops++;
  }

  // EDGE

  if (arr.length < 2) {
    min = arr[0] === 1 ? 2 : 1;
  }
  if (arr.length > 1 && min > arr.length) {
    min = arr.length + 1;
  }

  return { arr, min, loops };
}

//
main([0]);
main([1]);
main([3, 4, -1, 1, 5, 9]);
main([1, 2]);
main([1, 2, 0, 3]);
main([-1, -1, -1]);
main([0, 0, 0, 0]);
main([31]);
