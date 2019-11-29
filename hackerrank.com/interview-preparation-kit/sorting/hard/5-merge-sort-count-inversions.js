// Brute force solution
// IF arr[1] < arr[0] -> arr[1] = arr[0] , arr[0] = arr[1] , go back and increment count, else go forward
function countInversions(arr) {
  const len = arr.length;
  let i = 1;
  let count = 0;
  while (i <= len + 1) {
    const a = arr[i - 1];
    const b = arr[i];
    if (undefined === b) break;
    if (b >= a) {
      i++;
    } else {
      count++;
      arr[i - 1] = b;
      arr[i] = a;
      if (i > 1) {
        i--;
      }
    }
  }

  return count;
}

// MERGE SORTING
function countInversions(_arr) {
  var count = 0;
  // helper fn used by merge_sort; merges two arrays into sorted order
  var merge = function(left, right) {
    parseLR(left, right);
    let merged = [],
      i = 0, // left array index counter
      j = 0; // right array index counter

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    // append any remaining elements
    if (i < left.length) {
      merged = merged.concat(left.slice(i - left.length));
    } else if (j < right.length) {
      merged = merged.concat(right.slice(j - right.length));
    }

    return merged;
  };

  // O(nlogn) Merge Sort algorithm
  var merge_sort = function(arr) {
    if (arr.length > 1) {
      let left_size = Math.floor(arr.length / 2),
        right_size = arr.length - left_size;

      let left = arr.slice(0, left_size);
      let right = arr.slice(right_size * -1);

      return merge(merge_sort(left), merge_sort(right));
    } else {
      return arr;
    }
  };

  function parseLR(l, r) {
    let i = 0;
    let j = 0;
    const lenL = l.length;
    const lenR = r.length;

    // console.log('ParseLR');
    // console.log({lenL,lenR,l,r})
    while (i <= lenL) {
      if (i === lenL || j === lenR) {
        // console.log('found');
        return;
      }
      console.log("testing", l[i], r[j]);
      if (l[i] <= r[j]) {
        i++;
      } else {
        //console.log('iteration');
        console.log({ i, j, l, r, k: lenR - j, count });
        console.log("before", l[i], r[i], {
          lenL,
          i,
          lenR,
          j,
          a: lenL - i,
          b: lenR - j
        });

        count += lenL - i;
        j++;
        console.log("after", count);
      }
    }
    return count;
  }

  merge_sort(_arr);
  return count;
}
//const array = [2,1,3,1,2]; // 4
//const array = [1,1,1,2,2];
//const array = [2,4,1]; // 2
const array = [7, 5, 3, 1]; // 6
console.log(countInversions(array));
