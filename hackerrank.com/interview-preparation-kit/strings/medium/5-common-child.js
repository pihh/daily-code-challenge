// LOOKING AT THIS LIKE A MATRIX
/**
    A B C D E F
  F             f [] -> try with BDAMN
  B             b [cdef] -> try with DAMN
  D             d [ef]; -> try with  A M N
  A             a [bcdef]; -> try with M N
  M
  N
*/

// Complete the commonChild function below.
function commonChild(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");

  s1.unshift(" ");
  s2.unshift(" ");

  let max = 0;
  const matrix = new Array(s1.length)
    .fill(0)
    .map(el => new Array(s1.length).fill(0));

  for (let i = 1; i < matrix.length; i++) {
    const c1 = s2[i];
    for (let j = 1; j < matrix.length; j++) {
      const c2 = s1[j];
      //matrix[i][j] = [c1,c2];
      if (c1 === c2) {
        const update = matrix[i - 1][j - 1] + 1;
        matrix[i][j] = update;
        if (update > max) max = update;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  return max;
}

// FAILED 10 out of 15
function commonChild(s2, s1) {
  // Convert strings to arrays
  s1 = s1.split("");
  s2 = s2.split("");

  // Track the greatest length;
  let max = 0;
  let strings = []; // {value, hashMap, length}
  let length = s1.length;

  // Create a function to map how many keys still has.
  for (let i = 0; i < length; i++) {
    const character = s2[i];
    const index = s1.indexOf(character);

    for (let j = 0; j < strings.length; j++) {
      if (
        strings[j].index < index &&
        strings[j].hashMap.indexOf(character) > -1
      ) {
        const _index = strings[j].hashMap.indexOf(character);
        strings[j].index = index;
        strings[j].hashMap.splice(_index, 1);
        strings[j].value.push(character);
        if (strings[j].value.length > max) max = strings[j].value.length;
      }
    }

    if (-1 < index) {
      const hashMap = JSON.parse(JSON.stringify(s1));
      hashMap.splice(index, 1);
      const str = {
        value: [character],
        index: index,
        hashMap: hashMap
      };
      strings.push(str);
      if (1 > max) max = 1;
    }
  }
  console.log(strings);
  return max;
}
