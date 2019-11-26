var array = [10, 20, 30, 40];

function bisectLeft(array, x) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= x) return i;
  }
  return array.length;
}

console.log(bisectLeft(array, 5));
console.log(bisectLeft(array, 15));
console.log(bisectLeft(array, 25));
console.log(bisectLeft(array, 35));
console.log(bisectLeft(array, 45));

function bisectRight(array, x) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > x) return i;
  }
  return array.length;
}

/**
 BEST SORTING ALGORITHM EVER
 */
