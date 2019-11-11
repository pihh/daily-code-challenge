/**There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you
 can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could
climb any number from a set of positive integers X? For example,
if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a
time. Generalize your function to take in X.
*/

/**
  Solution lies in the idea that each combination is a subset of the smaller
  combination. Like in a fibonacci sequence
*/
function main(N = 0, X = []) {
  let res = 0;
  if (N < 0) return 0;
  if (N === 0) return 1;

  for (let x of X) {
    res += main(N - x, X);
  }

  return res;
}
