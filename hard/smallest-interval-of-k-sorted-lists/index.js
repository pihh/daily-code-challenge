// https://www.dailycodingproblem.com/blog/smallest-interval-of-k-sorted-lists/

// MY FIRST IDEA WAS TO BUILD A matrix with arr.lenght * arrMax elements
// Map them ex: [0,1,4,10]  -> [0,1,1,1,4,4,4,4,4,10]
// And compare the matrix index by index ex : dist from Min (matrix[0][0], matrix[0][1] .. matrix[0][1000])

// SECOND IDEA WAS TO CHECK THE LOCAL MINS AND MAXS , Everytime a min is hit, it's pointers are updated
// Whenever we try to target a array that arrived to its end we end the calculation
// If the local min - local max is smaller than current minimum distance, update its values

// This was a easy problem, the solution lied in the visualization of the problem

/*
  VISUAL REPRESENTATION:
   0 -----> 1        1 -----> 4
   5        5        5        5
   0        0 -----> 3        3

   [0,5]    [0,5]   [1,5]
*/

function smallestK(arr) {
  let dist = Number.MAX_SAFE_INTEGER;
  let pointers = new Array(arr.length).fill(0);
  let res = [0, 0];
  let loops = 0;

  while (loops < 100) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    console.log(`Loop #${loops}`, res);
    for (let i = 0; i < pointers.length; i++) {
      const check = arr[i][pointers[i]];
      if (check === undefined) return res;
      if (check < min) min = check;
      if (check > max) max = check;
    }

    if (max - min < dist) {
      dist = max - min;
      res = [min, max];
    }

    for (let i = 0; i < pointers.length; i++) {
      if (arr[i].indexOf(min) > -1) {
        pointers[i]++;
        break;
      }
    }

    loops++;
  }

  return res;
}

smallestK([[0, 1, 4, 17, 20, 25, 31], [5, 6, 10], [0, 3, 7, 8, 12]]);
smallestK([[-1], [-1], [-1], [1000]]);
smallestK([[1]]);
smallestK([[1], [1], [1]]);
