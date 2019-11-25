function* cartesian(head, ...tail) {
  let remainder = tail.length ? cartesian(...tail) : [[]];
  for (let r of remainder) for (let h of head) yield [h, ...r];
}

// Example:
// Returns a 3* smaller  by greater matrix

const first = ["a", "b", "c", "d"];
const second = ["e"];
const third = ["f", "g", "h", "i", "j"];

function main() {
  return [...cartesian(first, second, third)];
}

main();
