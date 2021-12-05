/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  
  let houseRobberI = function(nums) {

    let rh = 0;
    let drh = 0;
    for (let i = 0; i < nums.length; i++) {
      let tempRh = drh + nums[i];

      if (drh > rh) {
        drh = drh;
      } else {
        drh = rh;
      }

      rh = tempRh;
    }
    return Math.max(rh, drh);
  }

  const numsLeft = nums.slice(0, -1);
  console.log(`left part of the array ${numsLeft}`)
  const numsRight = nums.slice(1);
  console.log(`left part of the array ${numsRight}`)

  const resLeftPart = houseRobberI(numsLeft);
  const resRightPart = houseRobberI(numsRight);
  console.log(`result of leftPart ${resLeftPart}`);
  console.log(`result of rightPart ${resRightPart}`);

  return Math.max(resLeftPart, resRightPart);


};

// const nums = [2, 3, 2];
const nums = [1];
// const nums2 = [1, 2, 3, 1];
console.log(rob(nums));
// console.log(rob(nums2));