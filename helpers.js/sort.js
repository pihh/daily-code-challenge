/*
CHOOSE SORT
bellow 64 elements: insertion sort
range of elements is small ? : counting sort
*/
function bubbleSort(items) {
  var length = items.length;
  for (var i = 0; i < length; i++) {
    //Number of passes
    for (var j = 0; j < length - i - 1; j++) {
      //Notice that j < (length - i)
      //Compare the adjacent positions
      if (items[j] > items[j + 1]) {
        //Swap the numbers
        var tmp = items[j]; //Temporary variable to hold the current number
        items[j] = items[j + 1]; //Replace current number with adjacent number
        items[j + 1] = tmp; //Replace adjacent number with current number
      }
    }
  }
}

function countingSort(items = [], range) {
  // create a counting map
  const count = new Array(range).fill(0);
  const sorted = new Array(items.length).fill(0);
  const length = items.length;
  // count ocorrences
  for (let i = 0; i < length; i++) {
    count[items[i]]++;
  }

  // accumulate
  for (let i = 1; i < length; i++) {
    count[i] = count[i] + count[i - 1];
  }
  // shift right
  count.pop();
  count.unshift(0);

  for (let i = 0; i < length; i++) {
    const current = items[i];
    const index = count[current];
    sorted[index] = current;
    count[current]++;
  }
  return sorted;
}

function merge_sort(left_part, right_part) {
  var i = 0;
  var j = 0;
  var results = [];

  while (i < left_part.length || j < right_part.length) {
    if (i === left_part.length) {
      // j is the only index left_part
      results.push(right_part[j]);
      j++;
    } else if (j === right_part.length || left_part[i] <= right_part[j]) {
      results.push(left_part[i]);
      i++;
    } else {
      results.push(right_part[j]);
      j++;
    }
  }
  return results;
}
