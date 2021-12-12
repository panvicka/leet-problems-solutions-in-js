/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

  let goal = nums.length - 1;
  console.log(`starting with goal on index ${goal}`);
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      console.log(`i + nums[i] = ${i} + ${nums[i]} = ${i + nums[i]}, is greater then current goal ${goal}`);
      goal = i;
      console.log(`new goal is ${goal}`);
    } else {
      console.log(`can not reach the goal, do not update`);
    }
  }

  if (goal != 0) return false;
  return true;
};


let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));

nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));

