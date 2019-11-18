/*
 // PROBLEM
 Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

 For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

 Follow-up: Can you do this in O(N) time and constant space?

 // DEFINITIONS
 NON ADJACENT -> two numebers of an array separated by one space
 O(n) time -> means that it should be in o * k time
 Contant space -> means that it can't be hashmapped
 Numbers can be 0 and negative.

 Think a bit:
 This kind of problems tend to be solved in a dynamic way, and look at the constraints:
 If solving this manually , let's think a bit. The first step we can do is to solve it starting at 0 and at 1 ( since 0 and 1 can't be together)
 On dynamic programming, we usually have this kind of problems where we tend to have a limit of possibilities but we need to solve them all as a smal problem .

 So, imagine an array with 6 elements - the possibilities are
  [0,2], [0,3], [0,4], [0,5], [0,6], [0,2,4,6], [0,3,5], [0,3,6], [0,4,6]
  [1,3], [1,4], [1,5], [1,6], [1,3,5]

 So we get the picture.

 // EDGE CASES
 If no numbers, I think we should return 0 right ?
 Else if only one number we should return arr[0];
 In case of all numbers are negative we should return the biggest of them right ?

*/

function main(arr = []) {
  const len = arr.length;
  let loops = 0;
  // EDGE -
  let max = arr[0] || 0;

  function test(sum, index, path = []) {
    loops++;
    path.push(index);
    if (index > len) return;

    sum = sum + arr[index];
    if (sum > max) max = sum;
    console.log({ max, sum, index, path, arr });

    for (let i = index + 2; i < len; i++) {
      test(sum, i, path);
      console.log(i);
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    test(0, i);
  }
  return { max, loops };
}

/*
  So this first solution starts at zero and will try to find a the maximum in the next possible jumps -> for instance:
  test(0,0) -> max = new max  -> than it will test for test(3,newMax), test(4,newMax), test(5,newMax) and so on.
  test(1,0) -> max = new max  -> test(4,newMax), test(5,newMax), and so on.

  So at this point we get a pattern right ? test 0 and 1 are looping the same test again and again. BUT , if(test(0,0))'s sum until test(4) and test(5) is greater than test(1)'s sum, do we neeed to do it ?
*/

// SECOND SOLUTION
// Mapping only two paths .

/////////////// SECOND
function main(arr = []) {
  const len = arr.length;
  let loops = 0;
  // EDGE -
  let max = arr[0] || 0;

  function test(currentMax, index, path = []) {
    loops++;
    path.push(index);
    if (index > len) return;

    let nextSum = currentMax + arr[index];
    if (nextSum > currentMax) currentMax = nextSum;
    if (nextSum > max) max = nextSum;

    if (index + 2 < len) test(currentMax, index + 2, path);
    if (index + 3 < len) test(currentMax, index + 3, path);

    return;
  }

  test(0, 0);
  test(0, 1);
  return { max, loops };
}

/*
 In this case we will update the current max in sum
 So, if the next step is greater than previous step we set current Step = next step, else, we set it equal to previous
 Then we check if the is a absolute maximum, if is, update it;
 Then we test it against index +2 and index +3 ;

 We start it by testing
  test(0)
  test(1)

*/

// CLEANED UP SOLUTION WITHOUT INTERNAL LOOPS
function main() {
  const len = arr.length;
  let max = arr[0] || 0;

  function test(currentMax, index) {
    if (index > len) return;
    let nextSum = currentMax + arr[index];

    if (nextSum > currentMax) currentMax = nextSum;
    if (nextSum > max) max = nextSum;

    if (index + 2 < len) test(currentMax, index + 2);
    if (index + 3 < len) test(currentMax, index + 3);

    return;
  }
  return max;
}

main([-1]);
main([]);
main([-1, -1]);
main([-1, -1, -1, -1, 1]);
main([2, 4, 6, 2, 5]);
main([5, 1, 1, 5]);
