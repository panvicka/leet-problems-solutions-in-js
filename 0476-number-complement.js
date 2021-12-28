/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let bin = num.toString(2);
  let res = '';
  console.log(bin);
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] == "0") res = res + "1";
    if (bin[i] == "1") res = res + "0";
  }
  console.log(res);
  res = parseInt(res, 2);
  return res;
};


console.log(findComplement(2));