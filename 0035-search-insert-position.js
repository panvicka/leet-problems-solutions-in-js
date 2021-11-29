/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  // keep looking until the pointer cross 
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    console.log(`new mid is ${mid} with value ${nums[mid]}`)
    if (target < nums[mid]) {
      hi = mid - 1;
      console.log(`target ${target} is lower then val on midpoint ${nums[mid]}, need to seatch left, new high point is ${hi}`)
    } else if (target > nums[mid]) {
      lo = mid + 1;
      console.log(`target ${target} is higher then val on midpoint ${nums[mid]}, need to seatch right, new lower point is ${lo}`)
    } else {
      console.log(`target found on ${mid}`);
      return mid;
    }
  }

  return lo;


};

//2 
let nums = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(nums, target));

//1
nums = [1, 3, 5, 6];
target = 2;
console.log(searchInsert(nums, target)); 

