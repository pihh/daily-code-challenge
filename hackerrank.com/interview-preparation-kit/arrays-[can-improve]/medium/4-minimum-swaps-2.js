// WORKS BUT NOT ON BEST SPACE TIME
function minimumSwaps(arr = []) {
  let out = [];
  let min = Number.MAX_SAFE_INTEGER;

  const minOfArray = Math.min(...arr);
  arr = arr.map(el => el - minOfArray);

  // TRACK HOW MANY WE HAVE TO TRACE
  for (let i = 0; i < Math.max(Math.max(...arr), arr.length); i++) {
    if (i != arr[i]) out.push(i);
  }
  function test(_arr, still = [], index, count = 0) {
    const index0 = still[index];
    const index1 = arr.indexOf(still[index]);
    const value0 = arr[index0];
    const value1 = arr[index1];

    arr[index0] = value1;
    arr[index1] = value0;

    if (arr[index0] === index0) {
      const stillIndex = still.indexOf(index0);
      still.splice(stillIndex, 1);
    }
    if (arr[index1] === index1) {
      const stillIndex = still.indexOf(index1);
      still.splice(stillIndex, 1);
    }

    count++;

    if (still.length === 0) {
      if (count < min) min = count;
      return;
    }
    for (let i = 0; i < still.length; i++) {
      test(_arr, still, i, count);
    }
  }

  if (arr.length === 0 || out.length === 0) {
    return 0;
  }

  for (let i = 0; i < out.length; i++) {
    test(arr, out, i);
  }

  return min;
}

// WORKS 100% AND REQUIRES A EXPLANATION
// WE ARE CYCLING THIS ARRAY

/*
  mapeia-se os numeros que foram visitados e conta-se quantos ciclos até bater na trave
  ~ 4 3 1 2
    4 -> 2 -> 1 -> 3 -> 2  1 ciclo feito, 3 swaps  visitados todos os numeros.
*/
function minimumSwaps(arr = []) {
  let swap = 0;
  let visited = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let cycles = 0;
    while (!visited[j]) {
      visited[j] = true;
      j = arr[j] - 1;
      cycles++;
    }
    if (cycles > 0) swap += cycles - 1;
  }

  return swap;
}
