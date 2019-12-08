Util.getPermuts = function(array, start, output) {
  if (start >= array.length) {
    var arr = array.slice(0); //clone the array
    output.push(arr);
  } else {
    var i;

    for (i = start; i < array.length; ++i) {
      Util.swap(array, start, i);
      Util.getPermuts(array, start + 1, output);
      Util.swap(array, start, i);
    }
  }
};

Util.getAllPossiblePermuts = function(array, output) {
  Util.getPermuts(array, 0, output);
};

Util.swap = function(array, from, to) {
  var tmp = array[from];
  array[from] = array[to];
  array[to] = tmp;
};
