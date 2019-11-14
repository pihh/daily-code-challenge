function main(data) {
  const len = data.length;
  const middle =
    len % 2 > 0
      ? /*impair*/ [Math.floor(len / 2)]
      : /*pair*/ [len / 2 - 1, Math.floor(len / 2)];
  const sort = data.sort((a, b) => a - b);

  return middle.length > 1
    ? (sort[middle[0]] + sort[middle[1]]) / 2
    : sort[middle[0]];
}
