// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let count = 0;
  const len = s.length;
  s = s.split("");

  for (let i = 1; i < len; i++) {
    if (s[i - 1] == s[i]) count++;
  }

  return count;
}
