/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let queue = [];
  let time = 0;
  let freshOranges = 0;

  let rows = grid.length;
  let cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] == 1) freshOranges++;
      if (grid[r][c] == 2) queue.push([r, c]);
    }
  }

  while (queue.length > 0 && freshOranges > 0) {

    for (let i = 0; i < queue.lenght; i++) {
      // pop rotten orange 


    }


  }

};