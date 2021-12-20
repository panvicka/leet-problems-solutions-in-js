/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {

  const sum = nums.reduce(function(a, b) { return a + b; }, 0);
  console.log(`sum of the array ${sum}`)

  if (sum % 2) return false;
  console.log(`sum is even, can be split, continue`);

  let target = sum / 2;

  let dp = new Set();
  dp.add(0);

  console.log(dp)

  for (let i = nums.length - 1; i > 0; i--) {
    console.log(`for index ${i}`);

    let nextDp = new Set();

    for (let item of dp) {
      if ((item + nums[i]) == target) return true;
      nextDp.add(item);
      nextDp.add(item + nums[i]);
    }

    dp = nextDp;
    console.log(`current set`)
    console.log(dp);
  }


  if (dp.has(target)) return true;

  return false;


};


const nums = [1, 5, 11, 5];

console.log(canPartition(nums));