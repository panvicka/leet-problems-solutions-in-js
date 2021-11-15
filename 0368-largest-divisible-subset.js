/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  console.log(`solving LIS subset for ${nums}, first sort array`)
  nums.sort((a, b) => a - b);
  console.log(`sorted ${nums}`);

  let dp = Array(nums.length).fill(1);
  let prev = new Array(nums.length).fill(null);
  console.log(`create starting array filled with 1's - trivial answer to the each subproblem ${dp}`);

  for (let i = 1; i < nums.length; i++) {
    prev[i] = -1;
    console.log(`for i=${i} [${nums[i]}]`)
    console.log(`\t \t starting with dp ${dp}`)
    console.log(`\t \t starting with prev ${prev}`)
    for (let n = i - 1; n >= 0; n--) {
      console.log(`\t \t for n=${n} [${nums[n]}]`)

      if (dp[n] + 1 > dp[i]) {
        console.log(`\t \t \t dp[n]+1 (${dp[n] + 1}) is larger then dp[i] (${dp[i]}), go for it`)
        if (nums[i] % nums[n] == 0) {
          console.log(`\t \t \t nums[i]%nums[n] = ${nums[i]}%${nums[n]} =  ${nums[i] % nums[n]} is zero, change dp`)
          dp[i] = dp[n] + 1;
          prev[i] = n;
          console.log(`\t \t \t new dp ${dp}`)
          console.log(`\t \t \t new prev ${prev}`)
        } else {
          console.log(`\t \t \t nums[i]%nums[n] = ${nums[i]}%${nums[n]} = ${nums[i] % nums[n]} is not zero, ignore`)

        }
      } else {
        console.log(`\t \t \t dp[n]+1 (${dp[n] + 1}) is not larger then dp[i] (${dp[i]}), ignore`)
      }

    }

  }



  let resultLength = Math.max(...dp);
  console.log(`result length will be ${resultLength}`)
  console.log(`\t \t \t   dp ${dp}`)
  console.log(`\t \t \t   prev ${prev}`)
  console.log(`\t \t \t   nums ${nums}`)

  let lastIndex = null;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === resultLength) {
      console.log(`found the index with the resulting length on ${i}`)
      lastIndex = i;
      break;
    }
  }
  let res = [];
  while (lastIndex !== null && lastIndex !== undefined) {
    if (nums[lastIndex] !== undefined) { 
    console.log(`pushing ${nums[lastIndex]} to the result, lastIndex: ${lastIndex}`);
    res.push(nums[lastIndex]);
    console.log(res);
    console.log(`lastIndex = prev[lastIndex] = prev[${lastIndex}] = ${prev[lastIndex]}`)
    }
    lastIndex = prev[lastIndex];
  }
  console.log(`reverse and return`);
  res.reverse();
  return res;



};



const nums = [8, 4, 2, 1]
const nums2 = [1, 16, 7, 8, 4]
const nums3 = [3,4,16,8]
console.log(largestDivisibleSubset(nums2));