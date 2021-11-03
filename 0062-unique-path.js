const formatArray = (array) => {
  let string = "\t";
  array.forEach(item => {
    string = string + `${item} \t`
  })
 return string

}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  console.log(`number of rows: ${m}`)
  console.log(`number of colums: ${n}`)
  // init row holder with 1 (bottom row always 1 path to goal)
  let row = [];
  for (var i = 0; i < n; i++) row[i] = 1; 
  let newRow = [];
  for (var i = 0; i < n; i++) newRow[i] = 1; 


  for (let i = 0; i < m-1; i++) {
    console.log(`row m: ${i}, old row ${formatArray(row)}`)   
    // start at second to last position
    // going from right to left 
    for (let j = n-2; j > -1; j--) {      
      newRow[j] = newRow[j+1] + row[j]
       console.log(`column: ${j}, new row ${formatArray(newRow)}`);
    }
    row = newRow;
  }
    return row[0];

};

console.log(uniquePaths(3,7));
console.log(uniquePaths(3,3));




