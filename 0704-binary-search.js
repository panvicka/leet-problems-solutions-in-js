/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let left = 0;
  let right = nums.length - 1;
  let pivot;

  while (left < right) {
    // this could overflow if using large numbers 
    // pivot = Math.floor((left + right) / 2);

    // this is better, still could overflow
    // https://stackoverflow.com/questions/27167943/why-leftright-left-2-will-not-overflow
    // pivot = left + Math.floor((right - left) / 2) 

    // this will not overflow but hard to understand
    // pivot = (left + right) >>> 1

    pivot = left + Math.floor((right - left + 1) / 2);

    console.log(`new iteration, pivot ${pivot}`);
    if (nums[pivot] > target) {
      console.log(`number at pivot too large ${nums[pivot]}`);
      right = pivot - 1;
    } else {
      console.log(`number at pivot too small ${nums[pivot]}`);
      left = pivot;
    }
    console.log(`new left ${left} and right ${right}`);
  }
  if (nums[left] === target) return left;
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 2;
// nums = [5];
// target = 5;

console.log(search(nums, target));

// PRACTICE


var searchPractice = function(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);

    if (nums[pivot] < target) {
      left = pivot + 1;
    } else if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      return pivot;
    }
  }

  return -1;
}

console.log(searchPractice(nums, target));