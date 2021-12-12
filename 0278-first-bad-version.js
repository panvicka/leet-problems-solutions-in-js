/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

let isBadVersion = function(version) {
  if (version < bad) {
    return false;
  } else {
    return true;
  }
};

let n = 5;
let bad = 4;

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  let low = 0;
  let hi = n;
  let mid = 0;
  while (low <= hi) {
    mid = Math.floor((low + hi) / 2)
    console.log(`new midpoint ${mid}`);
    if (!isBadVersion(mid)) {
      console.log(`isBadVersion for ${mid} says false`)
      low = mid + 1;
      console.log(`new low is ${low}`);
    } else {
      console.log(`isBadVersion for ${mid} says true`)
      hi = mid - 1;
      console.log(`new high is ${hi}`);
    }
  }
  return low;
};

console.log(solution(isBadVersion));



