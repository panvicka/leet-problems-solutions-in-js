/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let evenchips = 0;
  let oddChips = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 == 0) {
      evenchips++;
    } else {
      oddChips++;
    }
  }

  return Math.min(evenchips, oddChips);
};

let position = [1, 2, 3];
console.log(minCostToMoveChips(position));

position = [2, 2, 2, 3, 3];
console.log(minCostToMoveChips(position));


position = [1, 1000000000]
console.log(minCostToMoveChips(position));