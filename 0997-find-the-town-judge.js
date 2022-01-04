/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

  let trusts = new Array(n).fill(false);
  let trusted = new Array(n).fill(0);

  for ([a, b] of trust) {
    console.log(a, b);
    trusts[a - 1] = true;
    trusted[b - 1]++;
  }
  console.log(trusted);
  console.log(trusts)

  let index = trusted.indexOf(n - 1);
  console.log(index);

  if (trusts[index] === false) {
    return index + 1;
  } else {
    return -1;
  }

};


let n = 3;
let trust = [[1, 3], [2, 3]]


n = 3;
trust = [[1, 3], [2, 3], [3, 1]];

// console.log(findJudge(n, trust));



/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudgeOneArray = function(n, trust) {
  const trusted = new Array(n + 1).fill(0);
  for (let [i, j] of trust) {
    trusted[i] -= 1
    trusted[j] += 1
    console.log(trusted);
  }
  for (let i = 1; i < trusted.length; i++) {
    if ((n - 1) === trusted[i]) {
      return i;
    }
  }
  return -1
};


console.log(findJudgeOneArray(n, trust));