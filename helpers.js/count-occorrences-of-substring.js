function countOccorencesOfSubString(lookFor = "", lookIn = "") {
  let len = lookIn.length;
  let index = 0;
  let matches = 0;

  while (index != -1 || lookIn.length === 0) {
    if (index == -1) break;
    if (lookIn == "") break;
    lookIn = lookIn.slice(index, len);
    index = lookIn.indexOf(lookFor);

    if (index > -1) {
      index++;
      matches++;
    }
  }
  return matches;
}
