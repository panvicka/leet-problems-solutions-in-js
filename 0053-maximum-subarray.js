const cubicSolution = (array) => {
  // o(n^3)! 
  let sum = 0;
  let maxSum = 0;
  for (i = 0; i < array.length - 1; i++) {
    for (j = i; j < array.length - 1; j++) {
      for (k = i; k < j; k++) {
        sum = sum + array[k];
      }
      if (sum > maxSum) {
        maxSum = sum;
      }
      sum = 0;
    }
  }
  return maxSum;
}


const quadraticSolution = (array) => {
  // o(n^2)! 
  let currSum = 0;
  let maxSum = 0;
  for (i = 0; i < array.length - 1; i++) {
    currSum = 0;
    for (j = i; j < array.length - 1; j++) {
      currSum = currSum + array[j];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }
  return maxSum;
}


const kadaneSolution = (nums) => {
  let maxSub = nums[0];
  let currSum = 0;

  for (n = 0; n < nums.length; n++) {
    console.log(`\n`);
    console.log(`running for ${nums[n]}`);
    if (currSum < 0) {
      console.log(`currSum ${currSum} is negative, reseting to 0`)
      currSum = 0;
    }
    console.log(`currSum before: ${currSum}`);
    currSum = currSum + nums[n];
    console.log(`currSum after: ${currSum}`);
    maxSub = Math.max(maxSub, currSum);
    console.log(`max ${maxSub}`);
  }
  return maxSub;
}


const divideAndConqSolution = (nums) => {

  return findMax(nums, 0, nums.length - 1)
}

var findMax = function(nums, l, r) {
  if (l == r) {
    console.log(`hitting base case with ${nums[l]}`)
    return nums[l]
  }

  let mid = Math.floor((l + r) / 2)
  console.log(`new mid is ${mid}`);
  let leftSum = findMax(nums, l, mid) 
  console.log(`returning leftSum ${leftSum}`);
  let rightSum = findMax(nums, mid + 1, r) 
  console.log(`returning rightSum ${rightSum}`);
  const crossingSum = findCrossingSum(nums, l, mid, r) 
  console.log(`returning crossing ${crossingSum}`);
  console.log(`the largest one is ${Math.max(crossingSum, leftSum, rightSum)}`);
  return Math.max(crossingSum, leftSum, rightSum) 
}

var findCrossingSum = function(nums, l, mid, r) {
  console.log(`calling findCrossingSum with l: ${l}, mid: ${mid}, r: ${r}`)
  let sum = 0
  let maxLSum = -Infinity
  for (let i = mid; i >= l; i--) {
    sum += nums[i]
    maxLSum = Math.max(maxLSum, sum)
  }
  sum = 0
  let maxRSum = -Infinity
  for (let i = mid + 1; i <= r; i++) {
    sum += nums[i]
    maxRSum = Math.max(maxRSum, sum)
  }
  console.log(`max left: ${maxLSum}, max rigth ${maxRSum}, returning crossing ${maxLSum + maxRSum}`)

  return maxRSum + maxLSum
}





nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
nums2 = [-1]
nums3 = [-1, -2, -3]

// console.log(cubicSolution(nums));
// console.log(quadraticSolution(nums));
// console.log(kadaneSolution(nums));
console.log(divideAndConqSolution(nums));