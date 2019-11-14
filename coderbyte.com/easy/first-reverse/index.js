//https://coderbyte.com/results/pihhTheOne:First%20Reverse:JavaScript
//EASYER com
function FirstReverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// FASTEST
function FirstReverse(str) {
  const len = str.length;
  const middle = Math.floor(len / 2);
  let result = len % 2 > 0 ? str.charAt(middle) : "";

  for (let i = middle; i > 0; i--) {
    const a = str.charAt(i - 1) || "";
    const b = str.charAt(len - i) || "";

    result = b + result + a;
  }
  return result;
}
