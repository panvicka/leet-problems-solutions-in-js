/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = Math.max(...nums);
  console.log(`starting result ${result}`);
  let curMin = 1;
  let curMax = 1;

  for (let i = 0; i < nums.length; i++) {


    if (nums[i] == 0) {
      curMin = 1;
      curMax = 1;
    } else {

      let tmp = curMax * nums[i];

      curMax = Math.max(nums[i] * curMin, nums[i] * curMax, nums[i]);
      console.log(`current max ${curMax}`);
      curMin = Math.min(nums[i] * curMin, tmp, nums[i]);
      console.log(`current min ${curMin}`);
      result = Math.max(result, curMax);
      console.log(`current max result ${result}`);
      
    }
  }

  return result;
};

const nums = [2, 3, -2, 4];
const nums2 = [-1, -2, -3, 0, 3, 5];
const nums3 = [-1, -2, -3];
const nums4 = [1, 2, 3, 4, 5, 6, 7, -1, -2];


// console.log(maxProduct(nums));
console.log(maxProduct(nums2));
// console.log(maxProduct(nums3));
// console.log(maxProduct(nums4));