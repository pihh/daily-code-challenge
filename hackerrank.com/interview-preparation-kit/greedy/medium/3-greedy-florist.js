// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
  let cost = -1;
  let profit = 0;

  c = c.sort((a, b) => b - a);

  for (let i = 0; i < c.length; i++) {
    // When i % k means that i has runned k times , so , the customer is going to buy the next
    if (i % k === 0) cost++;
    profit += (cost + 1) * c[i];
  }

  return profit;
}
