/*
It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

Function Description

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

minimumBribes has the following parameter(s):

q: an array of integers

// IMPORTANT SUBJECTS
q is from 1 to q.length ALLWAYS - no negatives, no duplicates
1st breakpoint each number can only jump twice -> meaning that the distance from q[i] to i should be smaller than 2 and since starting at 0,  q[i] -1


*/

function minimumBribes(q = []) {
  let count = 0;
  let i = 0;
  // let loops = 0;
  let map = new Array(q.length).fill(0).map((el, index) => index + 1);
  while (i < q.length /* && loops < 10 */) {
    //loops++;
    const current = map[i];
    const target = q[i];
    if (current === target) {
      i++;
    } else {
      const b = map[i + 1];
      const c = map[i + 2];
      const index = [b, c].indexOf(target);

      if (-1 === index) {
        return "Too chaotic";
      }
      if (index === 0) {
        map[i] = b;
        map[i + 1] = current;
        count++;
        i++;
      } else {
        map[i] = c;
        map[i + 1] = current;
        map[i + 2] = b;
        count += 2;
        i++;
      }
    }
  }
  return count;
}

minimumBribes([1, 2, 3, 4, 5]);
minimumBribes([2, 5, 1, 3, 4]); // LIT
minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]); // LIT
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
