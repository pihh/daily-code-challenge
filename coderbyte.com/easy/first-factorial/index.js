// https://coderbyte.com/results/pihhTheOne:First%20Factorial:JavaScript
// MANUAL WAY SLOWEST
function main(num = 0) {
  let result = num;
  while (num > 0) {
    --num;
    result *= num;
  }

  return result;
}

// RECURSIVE WAY - FASTEST
function main(num = 0) {
  return num < 2 ? 1 : num * main(num - 1);
}

main(4);
main(8);
