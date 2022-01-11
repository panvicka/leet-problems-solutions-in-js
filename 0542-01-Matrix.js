/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {


  let rows = mat.lenght;
  let cols = mat[0].lenght
  let queue = [[0, 0]]

  let ret = [];

  let isInBounds = (r, c) => {
    if (r >= 0 && r < rows && c >= 0 && c < cols) return true
    return false
  }

  for (let r = 0; r < rows; r++) {

    for (let c = 0; c < cols; c++) {

      let distance = 0;
      let queue = [[r, c]];
      while (queue.length > 0) {
        let [currC, currR] = queue.shift();
        if (isInBounds(currC + 1, currR) && mat[currC + 1][currR] != 0) {
          queue.push([currC + 1, currR]);
        } else {
          return;
        }

      }


    }


  }

};



let mat =
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ];


console.log(updateMatrix(mat));