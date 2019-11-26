// 35 out of 35
function maximumToys(prices, k) {
  prices = prices.sort((a, b) => a - b);

  let count = 0;
  const length = prices.length;

  for (let i = 0; i < length; i++) {
    const price = prices[i];
    if (price < k) {
      k -= price;
      count++;
    } else {
      break;
    }
  }

  return count;
}
