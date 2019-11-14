function jumpingOnClouds(c) {
  let steps = -1;
  let index = 0;
  let end = c.length;

  while (index < end) {
    steps++;
    if (0 === c[index + 2]) {
      index = index + 2;
      continue;
    }
    index++;
  }
  return steps;
}
