function main(lookFor, lookIn) {
  const regex = new RegExp(lookFor, "g");
  const matches = lookIn.match(regex) || [];
  return matches.length;
}
