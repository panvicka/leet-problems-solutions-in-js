/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

  let res = 0;
  let curSum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    console.log(`looping at index ${i} with element ${nums[i]}`)
    curSum = curSum + nums[i];
    console.log(`current sum ${curSum}`);
    let prefixNeeded = curSum - k;
    console.log(`prefix I need to remove to get to ${k} is ${prefixNeeded}`);
    if (map.has(prefixNeeded)) {
      res = res + map.get(prefixNeeded)
      console.log(`prefix found in the hash table, new result ${res}`);
    } else {
      console.log(`i dont have this prefix, sorry`)
    }

    if (map.has(curSum)) {
      map.set(curSum, map.get(curSum) + 1)
    } else {
      map.set(curSum, 1);
    }
    console.log(`added curSum ${curSum} to the hash table, the new table:`)
    console.log(map);
  }

  return res;

};


const nums = [1, 2, 3];
const nums2 = [1, -1, 1, 1, 1, 1];
console.log(subarraySum(nums2, 3));