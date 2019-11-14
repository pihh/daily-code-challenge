"use strict";

// WITHOUT INDEXOF
function main(data) {
  const map = {};
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const number = data[i];
    if (!map[number]) map[number] = 0;
    map[number]++;
  }

  Object.keys(map).forEach(key => {
    if (map[key] < 2) delete map[key];
  });

  for (let i = 0; i < data.length; i++) {
    const number = data[i];
    if (map[number]) result.push(number);
  }

  return result;
}

// WITH INDEXOF AND LASTINDEXOF
function main(data) {
  return data.filter(el => data.indexOf(el) !== data.lastIndexOf(el));
}
