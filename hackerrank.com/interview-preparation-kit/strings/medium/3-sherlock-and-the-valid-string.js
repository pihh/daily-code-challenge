// Should have attention to edges
// Logic the string should have all characters with the same number of occorences
// can remove just 1 character to make it have the same number of occorrences
//    - imagine that all characters have 2 occorrences and x has only 1,
//      removing x will get this right, else, if x has 3 ocorrences
//      removing 1 x will make it right.
function isValid(s) {
  s = s.split("");
  const keys = [...new Set(s)];
  const map = {};

  let attempts = {};
  for (let i = 0; i < keys.length; i++) map[keys[i]] = 0;
  for (let i = 0; i < s.length; i++) map[s[i]]++;
  for (let i = 0; i < keys.length; i++) {
    const key = map[keys[i]];
    if (!attempts[key]) attempts[key] = 0;
    attempts[key]++;
  }

  //return attempts;

  const attemptKeys = Object.keys(attempts);
  if (attemptKeys.length > 2) return "NO";
  if (attemptKeys.length === 1) return "YES";
  if (attemptKeys.length === 2) {
    const a = attemptKeys[0];
    const b = attemptKeys[1];
    const isAtOneDist = Math.abs(a - b) === 1;
    const isOnlyOneOccorrency =
      attempts[a] > 1 && attempts[b] > 1 ? false : true;
    if (!isOnlyOneOccorrency) return "NO";
    if (!isAtOneDist) {
      return attempts[1] == 1 ? "YES" : "NO";
    }
    return "YES";
  }
}

//isValid('aabbcd');
//isValid('abcdefghhgfedecba');
isValid("aaaaabc");
//('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd')
