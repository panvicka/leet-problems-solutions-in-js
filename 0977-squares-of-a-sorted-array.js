/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }

  nums.sort((a, b) => a - b);

  return nums;

};

nums = [-4, -1, 0, 3, 10];
// console.log(sortedSquares(nums));

var sortedSquaresTwoPointers = function(nums) {

  res = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      res.unshift(nums[left] * nums[left]);
      left = left + 1;

    } else {
      res.unshift(nums[right] * nums[right]);
      right = right - 1;
    }
  }
  return res;
};

console.log(sortedSquaresTwoPointers(nums));
