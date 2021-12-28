/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

  let stack = [];
  let currNumber = 0;
  // looking at previous operator, need to set to something 
  let operator = "+";


  s = s.replace(/\s/g, '');

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    console.log(`currently at ${char}`)
    if (isNumber(char)) {
      currNumber = currNumber + char;
      console.log(`is a number, adding to current ${currNumber}`);
    }
    if (isOperator(char) || i == s.length - 1) {
      console.log(`is a operator or last one, current operator ${operator}`);


      if (operator == "+") {
        stack.push(parseInt(currNumber));
      } else if (operator == "-") {
        stack.push(-parseInt(currNumber));
      } else if (operator == "*") {
        let lastOnStack = stack.pop();
        let result = parseInt(currNumber) * lastOnStack;
        console.log(`multiplication, result ${result}`)
        stack.push(result);
      } else if (operator == "/") {
        let lastOnStack = stack.pop();
        let rawResult =  lastOnStack / parseInt(currNumber);
        let result = Math.trunc(rawResult);
        console.log(`division, raw ${rawResult} result ${result}`);
        stack.push(result);
      }
      currNumber = "";
      operator = char;
      console.log(`new stack ${stack}`)

    }
  }

  console.log(stack);
  return Math.floor(stack.reduce((a, b) => a + b, 0));
};

let isNumber = function(s) {
  if (s >= "0" && s <= "9") return true;
  return false;
}

let isOperator = function(s) {
  if (s == "+" || s == "-" || s == "*" || s == "/") return true;
  return false;
}



let s = "3+2*2";
s = " 14/3*2";
s = "14-3/2";
console.log(calculate(s)) 