/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let resString = "";
  let carry = 0;
  let n1index = num1.length - 1;
  let n2index = num2.length - 1;

  while (num1[n1index] || num2[n2index]) {
    let aux = carry;
    if (num1[n1index]) {
      aux = aux + +num1[n1index];
      console.log(`adding ${num1[n1index]} from the first number`);
    }
    if (num2[n2index]) {
      aux = aux + +num2[n2index];
      console.log(`adding ${num2[n2index]} from the first number`);
    }

    console.log(`should be added ${aux}`);
    if (aux > 9) {
      carry = 1;
      console.log(`carry bit to next one`);
      resString = aux - 10 + resString;
    } else {
      carry = 0;
      resString = aux + resString;
    }
    console.log(resString);
    n1index = n1index - 1;
    n2index = n2index - 1;
  }

if (carry) {
  resString = 1 + resString;
}

  return resString;
};

console.log(addStrings('456', '77'));
