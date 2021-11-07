/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberNaive = function(nums) {
  const aux = [];
  for (let i = 0; i < nums.length; i++) {
    const index = aux.indexOf(nums[i]);
    if (index != -1) {
      console.log(`element ${nums[i]} found once in the array, remove it`)
      aux.splice(index, 1);
      console.log(aux);
    } else {
      console.log(`element ${nums[i]} not found in the array, add it`)
      aux.push(nums[i]);
      console.log(aux);
    }
  }
  console.log(aux);
  return aux[0];
};

// console.log(singleNumberNaive([2, 2, 1]))
// console.log(singleNumberNaive([1]))

function singleNumberBetter(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == null) {
      map[nums[i]] = 0;
      console.log(`the number ${nums[i]} found first time, add to object`);
      console.log(map);
    } else {
      console.log(`the number ${nums[i]} found seconds time, remove from object`);
      delete map[nums[i]];
      console.log(map);
    }

  }

  return Object.keys(map)[0];

}


// console.log(singleNumberBetter([3,3, 2, 2, 1]))
// console.log(singleNumberBetter([1]))
// console.log(singleNumberBetter([-1,0,0]))
// console.log(singleNumberBetter([-1,-2,-3,-4,-3,-2,-1,]))


var singleNumberExtraFast = function(nums) {
  return nums.reduce((curr, acc) => {
    console.log(`acc ${acc}`)
    console.log(`curr ${curr}`)
    console.log(`returning bitwise XOR ${dec2bin(acc)}^${dec2bin(curr)} ${acc ^ curr}`)
    return acc ^ curr
  }, 0)
};

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

console.log(singleNumberExtraFast([1, 2, 3, 2, 1]))
// console.log(singleNumberExtraFast([1]))
// console.log(singleNumberExtraFast([-1, 0, 0]))
// console.log(singleNumberExtraFast([-1, -2, -3, -4, -3, -2, -1,]))
