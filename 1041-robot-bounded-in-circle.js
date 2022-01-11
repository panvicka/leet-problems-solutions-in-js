/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {

  let dirX = 0;
  let dirY = 1; // facing north 

  let x = 0;
  let y = 0;

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] == "G") {
      x = x + dirX;
      y = y + dirY;
    } else if (instructions[i] == "L") {
      // turning 90° left  
      [dirX, dirY] = [-1 * dirY, dirX];
    } else {
      // turning 90° right  
      [dirX, dirY] = [dirY, -1 * dirX];
    }
  }

  console.log(`x ${x}, y ${y}`);
  console.log(`dirX ${dirX}, dirY ${dirY}`);
  if (x == 0 && y == 0) {
    return true;
  } else if (dirX !== 0 && dirY !== 1) {
    return true;
  }

  return false;

};

let instructions = "LLGRL";

console.log(isRobotBounded(instructions));