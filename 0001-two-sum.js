/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {

    const lookingFor = target - nums[i];
    console.log(`on ${i} iteration with number ${nums[i]}, i need to find ${lookingFor} in the hash table`);
    if (map.has(lookingFor)) {
      console.log(`found it!`)
      return [map.get(lookingFor), i];
    }
    console.log(`not here, add to the map`)
    map.set(nums[i], i);

  }


};

let nums = [2, 7, 11, 15];
let target = 9;


nums = [0, 4, 3, 0]
target = 0


console.log(twoSum(nums, target));