/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let logRes = Math.log2(n);
    if (logRes % 1 == 0) return true;
    return false;  
};