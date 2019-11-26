// BRUTE FORCED
function activityNotifications(expenditure, d) {
  let [m1, m2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)]; // for 4 = 1,2 , for 3 = 1,1

  let count = 0;
  const length = expenditure.length;
  for (let i = d; i < length; i++) {
    const spent = expenditure[i];
    const trailing = expenditure.slice(i - d, i).sort((a, b) => a - b);
    const med = trailing[m1] + trailing[m2];
    if (spent >= med) count++;
  }

  return count;
}

function activityNotifications(expenditure, d) {
  // Number of notifications
  let n = 0;

  // Set midpoints for median calculation
  // Since median = (a+b)/2 and we want (a+b)/2*2 it's allways a sum,
  // instead of dividing , use d[m1] + d[m2] and avoid bad calculations
  let [m1, m2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)]; // for 4 = 1,2 , for 3 = 1,1
  /*
    let m1, m2, m

    // Initialize count sorted subarray
    // Max expenditure = 201;
    let cs = new Array(201).fill(0)
    for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++

    // Iterate through expenditures
    for (let i = d, l = expenditure.length; i < l; i++) {
      	for (let j = 0, k = 0; k <= i1; k += cs[j], j++){
          console.log({j,k,i1,csj:cs[j]})
          m1 = j
        }
      	console.log('done');

        // Find median
        for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
        for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
        let m = (m1 + m2) / 2

        // Check if notification is given
        if (expenditure[i] >= m * 2) n++

        // Replace subarray elements
        cs[expenditure[i-d]]--
        cs[expenditure[i]]++
      console.log({i,d,expenditure})
      console.log('loop done')
    }
		*/
  return n;
}

activityNotifications([1, 2, 3, 3, 4, 4], 4);
//activityNotifications([2,3,4,2,3,6,8,4,5],5)
