/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];


  let backtrack = (start, combination) => {
    console.log(`calling backtrack with start ${start} and combination ${combination}`)
    if (combination.length == k) {
      console.log(`length of combination ${combination} reached`)
      res.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i);
      console.log(`looping i ${i}, combination ${combination}, calling backtrack`)
      backtrack(i + 1, combination)
      combination.pop();
      console.log(`combination poped ${combination}`)
    }
  }

  backtrack(1, []);
  return res;


};

let n = 4;
let k = 2;

console.log(combine(n, k))