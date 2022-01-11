/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFillMyOwn = function(image, sr, sc, newColor) {

  let rows = image.length;
  let cols = image[0].length;
  console.log(`image rows ${rows}, cols ${cols}`)

  let queue = [[sr, sc]];
  let startingColor = image[sr][sc];

   if (currColor === newColor) return image;


  let isInBounds = (row, col) => {
    if (row < rows && col < cols && row >= 0 && col >= 0) {
      return true;
    } else {
      return false;
    }
  }

  while (queue.length > 0) {

    let curr = queue.pop();

    let currR = curr[0];
    let currC = curr[1];

 

      if (image[currR][currC] == startingColor) {

        console.log(`curr element ${currR} ${currC} has startingColor ${startingColor}`);
        image[currR][currC] = newColor;
        console.log(image)

        if (isInBounds(currR + 1, currC)) {
          queue.push([currR + 1, currC]);
        }

        if (isInBounds(currR - 1, currC)) {
          queue.push([currR - 1, currC]);
        }

        if (isInBounds(currR, currC + 1)) {
          queue.push([currR, currC + 1]);
        }

        if (isInBounds(currR, currC - 1)) {
          queue.push([currR, currC - 1]);
        }
      } else {
        console.log(`curr element ${currR} ${currC} doesnt not have startingColor ${startingColor}, has ${image[currR][currC]} `);
      }


 
  }

  return image;

};



var floodFillDFS = function(image, sr, sc, newColor) {
  const currColor = image[sr][sc];
  if (newColor === currColor) return image;

  function callDFS(img, row, col) {
    if (row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] !== currColor) return;
    img[row][col] = newColor;
    callDFS(img, row - 1, col);  //up
    callDFS(img, row + 1, col);  //down
    callDFS(img, row, col + 1);  //right 
    callDFS(img, row, col - 1);  //left
    return img;
  }
  return callDFS(image, sr, sc);
};


var floodFillBFS = function(image, sr, sc, newColor) {
  const currColor = image[sr][sc];
  if (currColor === newColor) return image;
  const queue = [[sr, sc]];

  while (queue.length) {
    const [row, col] = queue.shift();
    if (image[row][col] === currColor) {
      image[row][col] = newColor
      if (row - 1 >= 0) queue.push([row - 1, col]);  //up
      if (row + 1 < image.length) queue.push([row + 1, col]);  //down
      if (col + 1 < image[0].length) queue.push([row, col + 1]);  //right
      if (col - 1 >= 0) queue.push([row, col - 1]);  //left
    }
  }
  return image;
};



let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
let sr = 1;
let sc = 1;
let newColor = 2;



// image = [[0, 0, 0], [0, 1, 1]];
// sr = 1;
// sc = 1;
// newColor = 1;

console.log(floodFillDFS(image, sr, sc, newColor));
