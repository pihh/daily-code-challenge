f;

function sherlockAndAnagrams(s) {
  let anagrams = 0;
  let map = {};

  // DEFINE ANAGRAM
  // abc -> bca -> cab -> acb -bac are all anagrams of it
  // meaning that any one of those sorted will be equal to abc
  // i matches length;

  // CUTTING THE STRINGS
  // Console was cleared
  // VM3951:35 a
  // VM3951:35 ab
  // VM3951:35 abb
  // VM3951:35 abba

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const sorted = s
        .slice(i, j)
        .split("")
        .sort()
        .join("");

      if (!map[sorted]) {
        map[sorted] = 1;
      } else {
        anagrams += map[sorted];
        map[sorted]++;
      }
    }
  }

  return anagrams;
}
