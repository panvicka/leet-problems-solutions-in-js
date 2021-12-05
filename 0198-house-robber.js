let rob = function(nums) {
  let curr = 0;
  let prev = 0;
  let temp;
  for (let x of nums) {
    temp = curr;
    curr = Math.max(x + prev, curr);
    prev = temp;
  }
  return curr;
}

let robbing = function(nums) {
  let rh = 0;
  let drh = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(`---- decision for house number ${i} with money ${nums[i]}`)
    let tempRh = drh + nums[i];
    console.log(`\t if i rob it, tempRh is =  do-not-rob (${drh}) + money = ${tempRh}`);

    if (drh > rh) {
      drh = drh;
      console.log(`\t do-not-rob (${drh}) is greater then rob (${rh}), do not update do-not-rob `);
    } else {
      console.log(`\t do-not-rob (${drh}) is lower then rob (${rh}), updating do-not-rob to rob (${rh}) `)
      drh = rh;
    }



    console.log(`\t values for new iteration: `)
    rh = tempRh;
    console.log(`\t rob = tempRh = ${rh}`);
    console.log(`\t do-not-rob: ${drh}`);
  }

  return Math.max(rh, drh);
}


// const nums = [1, 2, 3, 1];
const nums = [100, 15, 2, 1];
const nums = [9, 1, 1, 9];

// console.log(rob(nums))
console.log(robbing(nums))