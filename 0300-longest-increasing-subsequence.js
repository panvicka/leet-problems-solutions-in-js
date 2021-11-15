/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  console.log(`solving LIS for ${nums}`)
  const dp = Array(nums.length).fill(1);
  console.log(`create starting array filled with 1's - trivial answer to the each subproblem ${dp}`);

  for (let i = 1; i < nums.length; i++) {
    console.log(`for i=${i} [${nums[i]}]`)
    console.log(`starting with ${dp}`)
    for (let n = i - 1; n >= 0; n--) {
      console.log(`\t \t for j=${n} [${nums[n]}]`)

      const currentNum = nums[i];
      console.log(`\t \t current number is ${currentNum}`);
      if (nums[n] < currentNum) {
        console.log(`\t \t ${currentNum} is > ${nums[n]} can increase the sequence`)
        dp[i] = Math.max(dp[n] + 1, dp[i])
        console.log(`\t \t \t the new sequence ${dp}`)
      } else {
        console.log(`\t \t \t can not increase the sequence with ${nums[n]}`)
      }

    }

  }
  return Math.max(...dp)
};



const nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums));