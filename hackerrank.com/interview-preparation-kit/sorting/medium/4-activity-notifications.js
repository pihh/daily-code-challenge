// BRUTE FORCED
// We track the array of i-d to d , sort it , find the middle points and check
// A sort inside a for loop is allways slow
function activityNotifications(expenditure, d) {
  let [m1, m2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)]; // for 4 = 1,2 , for 3 = 1,1

  let count = 0;
  const length = expenditure.length;
  for (let i = d; i < length; i++) {
    const spent = expenditure[i];
    const trailing = expenditure.slice(i - d, i).sort((a, b) => a - b);
    const med = trailing[m1] + trailing[m2];
    if (spent >= med) count++;
  }

  return count;
}

// 100 % WORKING
// We map the first d parameters on a map to count sort
// the map will have: the count of times a number exists
// from there we just need run Object.keys(map) for each it and
// when the comumlative count of the keys entries is greater than the
// median indexes , you found the keys of the medians
// update the map at the end of each loop
function activityNotifications(expenditure, d) {
  var [m1, m2] = [Math.floor((d - 1) / 2), Math.floor(d / 2)];

  var len = expenditure.length;
  var map = {};
  var n = 0;

  function increment(key) {
    if (!map[key]) map[key] = 0;
    map[key]++;
  }
  function decrement(key) {
    const result = map[key]--;
    if (!map[key]) delete map[key];
  }

  function getMs() {
    let k1 = undefined;
    let k2 = undefined;
    let _counter = 0;
    const keys = Object.keys(map);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      _counter += map[key];

      if (undefined === k1 && _counter > m1) {
        k1 = key;
      }
      if (_counter > m2) {
        k2 = key;
        return [parseInt(k1), parseInt(k2)];
      }
    }
  }

  for (var i = 0; i < d; i++) {
    const key = expenditure[i];
    increment(key);
  }

  for (var i = d; i < len; i++) {
    const key = expenditure[i];
    // Compare key with m1 and m2
    const m = getMs();

    if (key >= m[0] + m[1]) n++;
    decrement(expenditure[i - d]);
    increment(expenditure[i]);
  }

  return n;
}
