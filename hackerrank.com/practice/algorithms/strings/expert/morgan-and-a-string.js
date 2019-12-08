// Complete the morganAndString function below.
// BRUTE FORCED
function morganAndString(a, b) {
  a = a.split("");
  b = b.split("");

  const aLen = a.length;
  const bLen = b.length;

  function tie(_i, _j) {
    console.log("TIE");
    let result = "a";
    while (true) {
      _i++;
      _j++;

      if (_i > aLen) {
        result = "b";
        break;
      }
      if (_j > bLen) {
        result = "a";
        break;
      }
      const _a = a[_i];
      const _b = b[_j];
      if (_a < _b) {
        result = "a";
        break;
      }
      if (_a > _b) {
        result = "b";
        break;
      }
    }

    return result;
  }

  let i = 0;
  let j = 0;

  let output = "";

  while (true) {
    if (i >= aLen && j >= bLen) return output;
    const _a = a[i];
    const _b = b[j];
    console.log(a.slice(i), b.slice(j), output);
    console.log(_a, "against", _b);
    if (_a === _b) {
      //console.log('TIE',_a,_b);
      const res = tie(i, j);
      if (res === "a") {
        output += _a;
        i++;
      } else {
        output += _b;
        j++;
      }
      //console.log({res});
    } else if (_a < _b || !_b) {
      if (_a) {
        output += _a;
      }
      i++;
    } else if (_a > _b || !_a) {
      if (_b) {
        output += _b;
      }
      j++;
    }

    //console.log(a.slice(i),b.slice(j),output)
  }

  return output;
}

// IMPROVED
// Complete the morganAndString function below.
/**

*/
function morganAndString(a, b) {
  a = a.split("");
  b = b.split("");

  const aLen = a.length;
  const bLen = b.length;

  let i = 0;
  let j = 0;
  let output = "";

  // Checks the next steps and returns how much should be cut from the winner array
  // Also stops counting if there are matches but they arn't equal to the initial character .
  function tie(_i, _j, char) {
    let result = "a";
    let loops = 0;
    let allEqual = true;
    while (true) {
      _i++;
      _j++;
      if (allEqual) loops++;

      if (_i > aLen) {
        result = "b";
        break;
      }
      if (_j > bLen) {
        result = "a";
        break;
      }
      const _a = a[_i];
      const _b = b[_j];
      if (_a < _b) {
        result = "a";
        break;
      }
      if (_a > _b) {
        result = "b";
        break;
      }
      if (_a !== char) allEqual = false;
    }

    return { win: result, length: loops };
  }

  //
  while (true) {
    if (i >= aLen && j >= bLen) break;

    const _a = a[i];
    const _b = b[j];

    if (_a === _b) {
      const res = tie(i, j, _a);

      if (res.win === "a") {
        output += a.slice(i, i + res.length).join("");
        i += res.length;
      } else {
        output += b.slice(j, j + res.length).join("");
        j += res.length;
      }
    } else if (_a < _b || !_b) {
      if (_a) {
        output += _a;
      }
      i++;
    } else if (_a > _b || !_a) {
      if (_b) {
        output += _b;
      }
      j++;
    }
  }

  return output;
}
