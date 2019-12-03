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
function commonChild(s2, s1) {
  // Convert strings to arrays
  s1 = s1.split("");
  s2 = s2.split("");

  // Track the greatest length;
  let max = 0;
  const strings = [];
  const length = s1.length;
  for (let i = 0; i < length; i++) {
    console.log(s1[i]);
    const index = s2.indexOf(s1[i]);
    if (index > -1)
      strings.push({ character: s1[i], rest: s2.slice(index + 1, length) });

    console.log(strings);
  }
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX");
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

commonChild("ABCDEF", "FBDAMN");
commonChild("SHINCHAN", "NOHARAAA");
commonChild(
  "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS",
  "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"
);
