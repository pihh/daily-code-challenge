/**
  Starting a matrix other way than this can result in unwanted behavior
  */

const matrix = new Array(s1.length)
  .fill(0)
  .map(el => new Array(s1.length).fill(0));
