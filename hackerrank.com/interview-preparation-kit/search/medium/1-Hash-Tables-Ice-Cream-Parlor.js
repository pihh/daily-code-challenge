// BRUTE FORCED
function whatFlavors(cost, money) {
  const map = {};
  cost.forEach(c => {
    if (!map[c]) map[c] = 0;
    map[c]++;
  });

  function generateResponse(a, b) {
    return `${a + 1} ${b + 1}`;
  }

  for (let i = 0; i < cost.length; i++) {
    const c = cost[i];
    const remainder = money - c;
    if (remainder > 0) {
      let index = cost.indexOf(remainder);
      if (index === -1) continue;
      if (index > i) return generateResponse(i, index);
      if (index === i && map[c] > 1) {
        index = index + 1 + cost.slice(index + 1).indexOf(c);
        return generateResponse(i, index);
      }
    }
  }

  return -1 + " " + -1;
}

// IMPROVED AND 100 % CORRECT
// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
  const map = {};

  for (let i = 0; i < cost.length; i++) {
    const c = cost[i];
    const remainder = money - c;
    if (map[remainder]) return map[remainder] + " " + (i + 1);
    if (!map[c]) map[c] = i + 1;
  }

  return -1 + " " + -1;
}
