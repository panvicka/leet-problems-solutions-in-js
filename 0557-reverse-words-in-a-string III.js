/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  let res = "";

  let reverseWord = (string) => {
    return string.split('').reverse().join('');
  }

  let word = "";
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " " || i == s.length) {
      console.log(`found a word ${word}`);
      res = res + reverseWord(word) + " ";
      word = "";
    } else {
      word = word + s[i];
    }
  }
  return res.trim();
};


var reverseWordsJS = function(s) {
  return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
};


let s = "Let's take LeetCode contest";

// console.log(reverseWords(s));
console.log(reverseWordsJS(s));