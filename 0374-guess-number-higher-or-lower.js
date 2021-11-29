/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */


var guessNumber = function(n) {

  let lo = 0;
  let hi = n;

  while (lo <= hi) {

    const mid = Math.floor((lo + hi) / 2);
    // -1, number is lower 
    if (guess(mid) == -1) {
      lo = mid + 1;
    } else if (guess(mid) == 1) {
      hi = mid - 1;
    } else if (guess(mid) == 0) {
      return mid;
    }
  }
};

let target = 6;
let numbers = 10;

const guess = (num) => {
  if (num > target) {
    return 1;
  } else if (num < target) {
    return -1;
  } else {
    return 0;
  }
}


console.log(guessNumber(numbers));

