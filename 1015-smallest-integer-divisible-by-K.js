/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {

  if ([2, 4, 6, 8].includes(k % 10)) return -1;

  let hash = new Set();
  let reminder = 0;

  for (i = 1; i <= k; i++) {
    reminder = (10 * reminder + 1) % k
    console.log(`reminder ${reminder}`);
    if (reminder == 0) return i;
    if (hash.has(reminder)) {
      console.log(`repetition at ${reminder} found`)
      return -1;
    }
    hash.add(reminder);
  }

};


console.log(smallestRepunitDivByK(500));