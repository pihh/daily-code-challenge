function twoStrings(s1, s2) {
  let can = false;
  // Made it a set to remove duplicates
  s1 = [...new Set(s1.split(""))];
  s2 = [...new Set(s2.split(""))].join("");
  console.log({ s1, s2 });
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) > -1) {
      can = true;
      break;
    }
  }

  return can ? "YES" : "NO";
}
