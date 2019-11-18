/**
  Define valleys: We entered a valley whenever we are bellow surface level
  Define objective: We need how many valleys we have walked through,
  so, how many of them have we successfully entered and exited?
*/
// Complete the sockMerchant function below.
// First solution 2 loops
function countingValleys(n, s) {
  let level = 0;
  let valleys = 0;
  let inValley = false;

  // Map level
  s = s.split("").map((el, i) => {
    let add = el === "D" ? -1 : 1;
    level += add;
    return level;
  });

  // Add 0 to the levels as the starting point
  s.unshift(0);

  // Check if entered in a level or not.
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === 0 && s[i] === -1) inValley = true;
    if (inValley && s[i] === 0) {
      inValley = false;
      valleys++;
    }
  }

  return valleys;
}

// SECOND SOLUTION, 1 loop
function countingValleys(n, s) {
  let level = 0;
  let valleys = 0;
  let inValley = false;

  // Map level
  s.split("").map((el, i) => {
    let prevLevel = level;
    let add = el === "D" ? -1 : 1;
    level += add;

    if (prevLevel === 0 && level === -1) inValley = true;
    if (prevLevel === -1 && level === 0) {
      inValley = false;
      valleys++;
    }
  });

  return valleys;
}
