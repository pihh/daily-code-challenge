function main(q = []) {
  let count = 0;

  for (let i = 0; i < q.length; i++) {
    let dist = q[i] - i - 1;
    //let absDist = Math.abs(dist);
    if (dist > 2) return "Too chaotic";
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) count++;
    }
  }

  return count;
}

main([2, 1, 5, 3, 4]);

function main(q = []) {
  let count = 0;
  let dists = [];
  for (let i = 0; i < q.length; i++) {
    let dist = q[i] - i - 1;
    let absDist = Math.abs(dist);
    dists.push(absDist);
    //if(dist > 2) return {res:'Too chaotic',dists,absDist,dist, a:q[i], i};
    if (dist > 2) return "Too chaotic";
    if (dist < -2) count += absDist / 4;
    count += absDist;
  }
  return Math.ceil(count / 2);
}

main([2, 1, 5, 3, 4]);
