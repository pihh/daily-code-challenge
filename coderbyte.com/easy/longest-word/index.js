// https://coderbyte.com/results/pihhTheOne:Longest%20Word:JavaScript

function LongestWord(sen) {
  // code goes here
  let max = 0;
  let result = "";
  sen = sen.replace(/[^a-z0-9 ]/gi, "").split(" ");

  for (let i = 0; i < sen.length; i++) {
    const word = sen[i];
    const wordLen = word.length;
    if (wordLen > max) {
      max = wordLen;
      result = word;
    }
  }

  return result;
}

// keep this function call here
console.log(LongestWord(readline()));
