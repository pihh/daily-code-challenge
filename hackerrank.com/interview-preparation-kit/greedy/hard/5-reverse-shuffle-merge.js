// Complete the reverseShuffleMerge function below.
function reverseShuffleMerge(s) {
  //s = s.split('');
  const skip = new Array(26).fill(0);
  const add = new Array(26).fill(0);
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    skip[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    skip[i] /= 2;
    add[i] = skip[i];
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s.charCodeAt(i) - 97;

    while (
      stack.length > 0 &&
      add[ch] > 0 &&
      stack[stack.length - 1] > ch &&
      skip[stack[stack.length - 1]] > 0
    ) {
      const chTop = stack.pop();
      add[chTop]++;
      skip[chTop]--;
    }

    if (add[ch] > 0) {
      stack.push(ch);
      add[ch]--;
    } else {
      skip[ch]--;
    }
  }

  let output = "";
  while (stack.length > 0) {
    output = String.fromCharCode(stack.pop() + 97) + output;
  }

  return output;
}
