function makeAnagram(a, b) {
  let count = 0;
  const len = Math.max(a.length, b.length);
  const alphabet = {};
  "abcdefghijklmnopqrstuvwxyz".split("").forEach(key => {
    alphabet[key] = [1, 1];
  });

  a = a.split("");
  b = b.split("");

  for (let i = 0; i < len; i++) {
    if (a[i]) alphabet[a[i]][0]++;
    if (b[i]) alphabet[b[i]][1]++;
  }

  const keys = Object.keys(alphabet);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const max = Math.max(...alphabet[key]);
    const min = Math.min(...alphabet[key]);
    count += max - min;
  }

  return count;
}
