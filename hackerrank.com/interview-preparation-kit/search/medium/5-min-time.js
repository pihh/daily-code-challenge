// Complete the minTime function below.
// Not 100%, fails 4 tests by timeout
function minTime(machines, goal) {
  const map = {};
  let produced = 0;
  let days = 0;
  let keys = [];
  for (let i = 0; i < machines.length; i++) {
    const key = machines[i];
    if (!map[key]) map[key] = 0;
    map[key]++;
  }

  keys = Object.keys(map).sort((a, b) => a - b);

  while (true) {
    if (produced >= goal) break;
    days++;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key > days) break;
      if (days % key === 0) {
        produced += map[key];
      }
    }
  }

  return days;
}

//100% working standard solution
function minTime(machines, goal) {
  machines.sort((a, b) => a - b);
  const lowRate = machines[0];
  const highRate = machines[machines.length - 1];

  let lowerBound = Math.floor(goal / (machines.length / lowRate));
  let upperBound = Math.floor(goal / (machines.length / highRate)) + 1;

  while (lowerBound < upperBound) {
    const days = Math.floor((lowerBound + upperBound) / 2);
    const total = getNumItems(machines, days);
    if (total >= goal) {
      upperBound = days;
    } else {
      lowerBound = days + 1;
    }
  }

  return lowerBound;
}

function getNumItems(machines, days) {
  let total = 0;
  for (const machine of machines) {
    total += Math.floor(days / machine);
  }
  return total;
}
