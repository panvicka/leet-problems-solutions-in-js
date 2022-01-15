/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  let res = [];

  if (nums.length == 1) {
    return [[...nums]]
  }

  for (let i = 0; i < nums.length; i++) {

    let remove = nums.shift();
    let perms = permute(nums);

    perms = perms.map((perm) => {
      return [...perm, remove];
    })

    console.log(perms)

    res = res.concat(perms);

    nums.push(remove);
  }

  return res;

};


let nums = [1, 2, 3];


console.log(permute(nums));
