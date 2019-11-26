function activityNotifications(expenditure, d) {
  // MEDIAN DEFINITION
  let median;
  if (d % 2 === 0) {
    median = function(arr = []) {
      const b = d / 2;
      const a = b - 1;
      return (arr[a] + arr[b]) / 2;
    };
  } else {
    const middle = [Math.floor(d / 2)];
    median = function(arr = []) {
      return arr[middle];
    };
  }

  // BRUTE FORCED
  let count = 0;
  const length = expenditure.length;
  for (let i = d; i < length; i++) {
    const spent = expenditure[i];
    const trailing = expenditure.slice(i - d, i).sort((a, b) => a - b);
    const med = median(trailing);
    if (spent >= med * 2) count++;
  }

  return count;
}

activityNotifications("1 2 3 4 4".split(" "), 4);


/**
  Using bisection
*/
function bisectLeft(array, x) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= x) return i;
  }
  return array.length;
}

function activityNotifications(expenditure, d) {
  let count = 0;
  let check;
  // Get sorted array from 0 to d
	let left = expenditure.slice(0,d).sort((a,b)=> a-b);
  let right =  expenditure.slice(d);

  // function that checks condition
  if(d%2 === 0){
    const m0 = d/2;
    const m1 = m0-1;
    check = function(current){
      if(current >= (left[m0] + left[m1]) count++;
    }
  }else{
    const m0 = Math.floor(d/2)
    check = function(current){
      if(current >= (left[m0]*2)) count++;
    }
  }



  for(let i = 0 ; i < right.length; i++){
    const spent = right[i];
    check(spent);
    left.shift();
    bisectLeft(left,current);
  }
  return count;
}

activityNotifications([1,2,3,4,4],4)
