/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

  let dp = new Array(triangle.length + 1).fill(0);

  for (let i = triangle.length - 1; i >= 0; i--) {

    console.log(`doing row ${i} with length ${triangle.length}`)
    for (let j = 0; j < triangle[i].length; j++) {
      console.log(dp)
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);

    }


  }

  return dp[0];

};


let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle))