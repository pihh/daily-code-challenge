// 10/10
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let result = 0;
  const map = new Map();
  for (let i = 0; i < ar.length; i++) {
    const key = ar[i];
    if (!map.has(key)) {
      map.set(key, true);
    } else {
      map.delete(key);
      result++;
    }
  }

  return result;
}
