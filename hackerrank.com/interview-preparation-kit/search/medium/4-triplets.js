// Complete the triplets function below.
function triplets(a, b, c) {
  let result = 0;
  a = [...new Set(a.sort((x, y) => x - y))];
  b = [...new Set(b.sort((x, y) => x - y))];
  c = [...new Set(c.sort((x, y) => x - y))];

  let loops = 0,
    i = 0,
    _i = 0,
    _j = 0,
    j = 0,
    k = 0;
  while (true) {
    const q = b[j];
    let temp = 0;
    if (!q) break;
    if (!a[_i]) break;
    if (!c[_j]) break;

    while (true) {
      const p = a[i];
      if (!p) break;
      if (q >= p) {
        i++;
      } else {
        break;
      }
    }

    while (true) {
      const r = c[k];
      if (!r) break;
      if (q >= r && r) {
        k++;
      } else {
        break;
      }
    }
    result += k * i;
    j++;
  }

  return result;
}
