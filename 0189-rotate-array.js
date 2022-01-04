/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  for (let i = 0; i < k; i++) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
  }
  return nums;

};
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
// console.log(rotate(nums, k))


var rotate2 = function(nums, k) {

  nums.unshift(...nums.splice(nums.length - k % nums.length));
  return nums;


};

// console.log(rotate2(nums, k))


var rotate3 = function(nums, k) {

  k = k % nums.length;

  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l = l + 1;
    r = r - 1;
  }
  console.log(nums);

  l = 0;
  r = k - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l = l + 1;
    r = r - 1;
  }
  console.log(nums);

  l = k;
  r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l = l + 1;
    r = r - 1;
  }

  return nums;

};
console.log(rotate3(nums, k))