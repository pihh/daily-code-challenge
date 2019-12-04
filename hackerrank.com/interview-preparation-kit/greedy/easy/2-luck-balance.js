function luckBalance(k, contests) {
  let max = 0;
  const important = contests
    .filter(el => el[1] === 1)
    .map(el => el[0])
    .sort((a, b) => b - a);
  const notimportant = contests
    .filter(el => el[1] === 0)
    .map(el => el[0])
    .sort((a, b) => b - a);

  for (let i = 0; i < notimportant.length; i++) {
    const value = notimportant[i];
    if (value > 0) max += value;
  }

  for (let i = 0; i < important.length; i++) {
    const value = important[i];
    if (i < k) {
      if (value > 0) max += value;
    } else {
      max -= value;
    }
  }

  return max;
}
