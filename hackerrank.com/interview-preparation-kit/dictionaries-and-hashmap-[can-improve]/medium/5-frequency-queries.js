// BRUTE FORCE :
// FAILS 4 out of 14 by timeout
// 26 out of 40 points
function freqQuery(queries) {
  const lens = new Array(queries.length + 1).fill(0);
  const stack = {};
  const checks = [];

  const createStack = function(x) {
    if (!stack[x]) stack[x] = [];
  };

  const actions = {
    1: function(x) {
      createStack();
      stack[x].push(true);
    },
    2: function(x) {
      createStack();
      stack[x].pop();
    },
    3: function(len) {
      const keys = Object.keys(stack);
      let check = 0;
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (stack[key].length === len) {
          check = 1;
          break;
        }
      }

      checks.push(check);
    }
  };

  return checks;
}

// IMPROVED
// REMOVED FOR EACH AND ADDED A MAP FOR LENGTS
// FAILS 0
// 40 out of 40
function freqQuery(queries) {
  const length = queries.length;
  const lens = new Array(length + 1).fill(0);
  const stack = {};
  const checks = [];

  const createStack = function(x) {
    if (!stack[x]) stack[x] = [];
  };

  const updateLens = function(before, after) {
    if (before > 0) lens[before]--;
    if (after > 0) lens[after]++;
  };

  const actions = {
    1: function(x) {
      let lenBefore;
      let lenAfter;

      createStack(x);

      lenBefore = stack[x].length;

      stack[x].push(true);

      lenAfter = stack[x].length;

      updateLens(lenBefore, lenAfter);
    },
    2: function(x) {
      let lenBefore;
      let lenAfter;
      createStack(x);
      lenBefore = stack[x].length;
      stack[x].pop();
      lenAfter = stack[x].length;
      updateLens(lenBefore, lenAfter);
    },
    3: function(len) {
      let check = lens[len] > 0 ? 1 : 0;
      checks.push(check);
    }
  };

  for (let i = 0; i < length; i++) {
    const q = queries[i];
    actions[q[0]](q[1]);
  }

  return checks;
}
