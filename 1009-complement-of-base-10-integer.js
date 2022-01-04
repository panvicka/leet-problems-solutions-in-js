/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {

  let string = n.toString(2);
  string = [...string].map(char => {
    if (char == 1) return 0;
    return 1
  }).join('');
  return parseInt(string, 2);

};


console.log(bitwiseComplement(5));