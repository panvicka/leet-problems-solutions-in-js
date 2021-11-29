/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let len = nums.length;

  let leftProduct = [];
  let rightProduct = [];
  let result = [];

  leftProduct[0] = 1;
  for (let i = 1; i < len; i++) {
    leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
  }
  console.log(`left products: ${leftProduct}`);

  rightProduct[len - 1] = 1;
  for (let i = len - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
  }
  console.log(`right products: ${rightProduct}`);

  for (let i = 0; i < len; i++) {
    result[i] = leftProduct[i] * rightProduct[i];
  }

  return result;
};

var productExceptSelfSpaceOptimized = function(nums) {
  let len = nums.length;

  let result = [];
  result[0] = 1;

  for (let i = 1; i < len; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }
  console.log(result);

  let holdVar = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * holdVar;
    holdVar = holdVar * nums[i]
  }
  return result;
};






const nums = [4, 5, 1, 8, 2];
console.log(productExceptSelfSpaceOptimized(nums));