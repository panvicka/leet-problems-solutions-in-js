/**
 * @param {string} s
 * @return {string[][]}
 */

var isPalidrome = (string, leftIndex, rightIndex) => {
  while (leftIndex < rightIndex) {
    if (string[leftIndex] != string[rightIndex]) {
      return false;
    } else {
      leftIndex++;
      rightIndex--;
    }
  }
  return true;
}



var partition = function(s) {

  let res = [];
  let partition = [];

  let dfs = (i) => {
    console.log(`dfs called with i ${i}`)
    if (i >= s.length) {
      console.log(`need to return, this is the partition to send to result`);
      console.log(partition);
      // res.push(Array.from(partition));
      res.push([...partition]);
      console.log(res)
      return
    }

    for (let j = i; j < s.length; j++) {
      if (isPalidrome(s, i, j)) {
        console.log(`s with indexes i ${i}, j ${j} is palidrome`);
        // as long as this is palidrome, add next char
        partition.push(s.slice(i, j + 1));
        console.log(`new partition ${partition}`)
        dfs(j + 1);
        partition.pop();
      }

    }

  }

  dfs(0);

  return res;

};

let s = "ededededededd";

console.log(partition(s));


