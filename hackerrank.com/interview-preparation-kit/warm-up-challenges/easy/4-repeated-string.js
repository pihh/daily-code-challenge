function repeatedString(s, n) {
  const len = s.length;
  const times = Math.floor(n / len);
  const remainder = n % len;
  const _s = s.substr(0, remainder);

  const entries = s.replace(/[^a]/gi, "").length;
  const remainderEntries = _s.replace(/[^a]/gi, "").length;

  return times * entries + remainderEntries;
}
