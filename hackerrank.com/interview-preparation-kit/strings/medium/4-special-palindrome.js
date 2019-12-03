/**
NOtice:
AABAA counts:
ABA
AABA

1+1

AAAA counts:
A
 A
AA
  A
 AA
AAA
   A
  AA
 AAA
AAAA

4+3+2+1
*/
function substrCount(n, s) {
  let count = 0;
  let stack = [];

  s = s.split("");
  // FIND ABA's
  for (let i = 2; i < n; i++) {
    let li = i - 2;
    let ri = i;

    let l = s[li];
    let c = s[i - 1];
    let r = s[ri];
    if (l == r && l !== c) {
      //console.log({l,c,r})
      li--;
      ri++;
      count++;

      while (li >= 0 && ri <= n + 1) {
        //console.log(l === s[li], r === s[li])
        if (l === s[li] && r === s[ri]) {
          count++;
          li--;
          ri++;
        } else {
          break;
        }
      }
    }
  }

  // FIND AA's
  let prev = null;
  let prevCount = 1;
  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (char === prev) {
      prevCount++;
    } else {
      prevCount = 1;
      prev = char;
    }
    count += prevCount;
  }

  return count;
}
