function allIndexes(lookIn, lookFor) {
  var indices = new Array();
  var index = 0;
  var i = 0;
  while ((index = lookIn.indexOf(lookFor, index) > 0)) {
    indices[i] = index;
    i++;
  }
  return indices;
}
