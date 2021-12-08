/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

  let l = 0;
  let r = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {

    let trySum = numbers[l] + numbers[r];
    console.log(`try sum numbers[l] + numbers[r] = ${numbers[l]} + ${numbers[r]} = ${trySum}`);
    if (trySum < target) {
      l++;
      console.log(`too low, increase left pointer to ${l}`);
    } else if (trySum > target) {
      r--;
      console.log(`too high, decrease right pointer to ${r}`);
    } else {
      return [l + 1, r + 1]
    }

  }


};

let numbers = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(numbers, target));