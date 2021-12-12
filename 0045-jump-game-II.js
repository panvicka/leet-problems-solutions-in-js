/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

  let res = 0;
  let l = 0;
  let r = 0;

  while (r < nums.length - 1) {
    let farthest = 0;
    for (let i = l; i <= r; i++) {
      farthest = Math.max(farthest, nums[i] + i);
    }
    console.log(`the farthest index can get from window l,r = ${l},${r} is ${farthest}`);
    l = r + 1;
    r = farthest;
    console.log(`new window l,r = ${l},${r}`);
    res++;
  }

  return res;


};

let nums = [2, 3, 1, 1, 4];

console.log(jump(nums));