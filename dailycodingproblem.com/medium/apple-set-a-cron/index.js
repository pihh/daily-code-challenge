/*
  // DESCRIPTION
  Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

  // THINK
  Isn't this a set timeout function?

*/

const log = console.log;

function cron(f, n) {
  function cb() {
    //clearTimeout(timeout);
    timeout();
    f();
  }
  let timeout = () => setTimeout(cb, n);

  timeout();
}

cron(10000, () => log("cron job"));
