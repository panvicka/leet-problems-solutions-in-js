/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] != "]") {
      console.log(`not a ] bracket, new stack ${stack}`);
      stack.push(s[i])
    } else {
      console.log(`found a closing bracket, start going backwards`)
      let substring = "";
      while (stack[stack.length - 1] != "[") {
        substring = stack.pop() + substring;
        console.log(`not a closing bracket yet, new substring ${substring}`)
      }
      stack.pop();
      console.log(`one more pop to remove the openining bracket, stack now ${stack}`);

      let number = '';
      while (stack && isCharNumber(stack[stack.length - 1])) {
        console.log(`found a number ${stack[stack.length - 1]}`);
        number = stack.pop() + number;
      }
      number = parseInt(number);
      console.log(`number of repetitions ${number}, adding to stack`)
      stack.push(substring.repeat(number))
      console.log(stack);
    }
  }
  return stack.join('');
};

function isCharNumber(c) {
  return c >= '0' && c <= '9';
}


let s = "3[a2[c]]";
console.log(decodeString(s));