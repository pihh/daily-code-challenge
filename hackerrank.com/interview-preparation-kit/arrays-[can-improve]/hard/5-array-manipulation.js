// BRUTE FORCED SOLUTION 24 points
function arrayManipulation(n, queries) {
  let max = 0;
  const array = new Array(n).fill(0);
  // BRUTE FORCING
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const start = query[0] - 1;
    const end = query[1]; // INCLUDING
    const amount = query[2];

    for (let j = start; j < end; j++) {
      array[j] += amount;
      if (array[j] > max) max = array[j];
    }
  }
  return max;
}

/*
  IN A LINEAR WAY:
  Create a array with length enough that fits all the array
  We will comulate the sums ans break the sums by subtrating the value from it's ending point
  for loop the matrix
    map[matrix[0]] += matrix[2] // being matrix 2 the value will
    map[matrix[1]+1] -= matrix[2];

  Now we have a matrix with all the comulative at the points i , we just need to sum it comulativelly
  sum = 0;
  for loop map
    sum += map[i]
    sum > max? max = sum

  DONE"  
*/
function arrayManipulation(n, queries) {
  let max = 0;
  let output = new Array(n + 2).fill(0);
  for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0];
    let b = queries[i][1];
    let k = queries[i][2];

    output[a] += k;
    output[b + 1] -= k;
  }

  let sum = 0;
  for (let i = 0; i < output.length; i++) {
    sum += output[i];
    if (sum > max) max = sum;
  }
  return max;
}
