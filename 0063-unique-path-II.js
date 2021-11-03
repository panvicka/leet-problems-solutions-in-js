const formatArray = (array) => {
  let string = "\t";
  array.forEach(item => {
    string = string + `${item} \t`
  })
 return string

}

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length; //rows
    const n = obstacleGrid[0].length; //cols
  console.log(obstacleGrid);
  console.log(`number of rows: ${m}`)
  console.log(`number of colums: ${n}`)
if (obstacleGrid[m-1][n-1] == 1) {
  return 0
}

  // init bottom row
  let row = [];
  for (var i = 0; i < n; i++) {
    if (obstacleGrid[m-1][i]==0) {
      row[i] = 1;
    } else {
       row[i] = 0;
       for (j = 0; j < i; j++) {
           row[j] = 0;
       }
    } 
  }
  let newRow = [];
  for (var i = 0; i < n; i++) newRow[i] = 1; 


  for (let i = m-1; i > 0; i--) {
    console.log(`row (from bottom) m: ${i}, old row ${formatArray(row)}`)   
    // start at second to last position
    // going from right to left 
    for (let j = n-1; j > -1; j--) {      
      if (obstacleGrid[i-1][j] == 0) {
        if (j+1 > n-1) {
          newRow[j] = 0 + row[j]
        } else {
          newRow[j] = newRow[j+1] + row[j]
        }
      } else {
        console.log(`found no-go on ${i-1},${j}`)
        newRow[j] = 0;
      }
     
       console.log(`column (from right): ${j}, new row ${formatArray(newRow)}`);
    }
    row = newRow;
  }
    return row[0];
};

obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
obstacleGrid2 = [[0,1],[0,0]]

obstacleGrid3 = [[0,0,1],[0,1,0],[0,0,0]]
obstacleGrid4 = [[0,0,1],[0,1,0],[1,0,0]]
obstacleGrid5 = [[0,0,0],[1,0,0],[0,0,0]]
obstacleGrid6 = [[0,0],[0,1]]
// expected 0
obstacleGrid7 = [[0,0,0,0,0],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0]]

// console.log(uniquePathsWithObstacles(obstacleGrid));
// console.log(uniquePathsWithObstacles(obstacleGrid2));
// console.log(uniquePathsWithObstacles(obstacleGrid3));
// console.log(uniquePathsWithObstacles(obstacleGrid4));
// console.log(uniquePathsWithObstacles(obstacleGrid5));
console.log(uniquePathsWithObstacles(obstacleGrid7));




