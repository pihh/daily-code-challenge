function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let value = 0; // Storing XOR

  for (let i = 0; i < a.length; i++) {
    value = value ^ a.charCodeAt(i); // Character to ascii code - integer
    value = value ^ b.charCodeAt(i);
  }

  return value ? false : true;
}
