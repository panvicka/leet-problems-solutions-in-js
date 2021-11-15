/**
 * @param {number[]} digits
 * @return {number[]}
 */
// THIS DOESNT WORK FOR LARGE INTEGERS! 
var plusOneNaive = function(digits) {
  let number = parseInt(digits.join(''));
  console.log(`converted number ${number}`);
  number = number + 1;
  console.log(`number+1 ${number}`);
  const string = number.toString();
  console.log(`back to string ${string}`);
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array[i] = string[i];
  }
  console.log(array);
  return array;
};

// plusOneNaive([1,2,3])
// plusOneNaive([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8])


var plusOne = function(digits) {
  console.log(`------> solving for ${digits}`)
  let checkIndexPlusOne = (index) => {
    if (digits[index] != null) {
      if (digits[index] + 1 > 9) {
        console.log(`${digits[index]} too high, carry to next one`);
        digits[index] = 0;
        checkIndexPlusOne(index - 1)
      } else {
        console.log(`${digits[index]} can be increased`);
        digits[index] = digits[index] + 1;
      }
    } else {
      console.log(`found the end, and carrying, add 1 to the beggining`);
      digits.unshift(1);
    }

  }
  checkIndexPlusOne(digits.length - 1);
  console.log(`------> returning ${digits}`)
  return digits;
};

console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(plusOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 9]));
console.log(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));
