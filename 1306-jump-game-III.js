/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {

  let queue = [start];
  while (queue.length > 0) {
    console.log(`---- my queue at start of the while loop:`)
    console.log(queue);

    let current = queue.shift();
    console.log(`currently visiting index ${current}`)
    // check if visited 
    if (arr[current] >= 0) {
      console.log(`index was not visited before`)

      if (arr[current] === 0) {
        return true;
      } else {

        if ((current + arr[current]) < arr.length) {
          console.log(`adding index ${current + arr[current]} to the queue`)
          queue.push(current + arr[current]);
        }

        if ((current - arr[current]) >= 0) {
          console.log(`adding index ${current - arr[current]} to the queue`)
          queue.push(current - arr[current]);
        }

      }
      // mark as visited
      arr[current] = -1;

    }

  }

  return false;

};


const arr = [4, 2, 3, 0, 3, 1, 2];
const start = 5;


console.log(canReach(arr, start));