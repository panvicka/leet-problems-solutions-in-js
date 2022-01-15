/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
    console.log(`one ${one}, two ${two}`)
  }

  return one;
};


console.log(climbStairs(5));