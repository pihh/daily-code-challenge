var maximumSubArray = function(array) {
  var ans = 0;
  var sum = 0;

  console.log(ans, sum);
  for (var i = 0; i < array.length; i++) {
    ans = Math.max(0, ans + array[i]);
    sum = Math.max(sum, ans);
    console.log(ans, sum, array[i]);
  }
  console.log(ans, sum);
  return sum;
};
