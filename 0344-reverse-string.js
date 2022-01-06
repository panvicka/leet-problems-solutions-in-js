/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  return s.reverse();
};


var reverseStringTwoPointers = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"]

console.log(reverseStringTwoPointers(s));