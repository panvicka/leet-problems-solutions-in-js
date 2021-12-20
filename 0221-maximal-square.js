/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

  const rows = matrix.length;
  const cols = matrix[0].length;
  let cache = new Map();


  let helperFce = (r, c) => {
    if (r >= rows || c >= cols) return 0;

    const keyString = `${r},${c}`;

    if (!cache.has(keyString)) {
      let right = helperFce(r + 1, c);
      let down = helperFce(r, c + 1);
      let diag = helperFce(r + 1, c + 1);

      let maxPossible = 0
      if (matrix[r][c].toString() === "1") {
        maxPossible = +1 + +Math.min(right, down, diag);
      }

      cache.set(keyString, maxPossible)
      return maxPossible;
    } else {
      return cache.get(keyString);
    }


  }

  helperFce(0, 0);
  return Math.pow(Math.max(...cache.values()), 2);

};

let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];

console.log(maximalSquare(matrix));