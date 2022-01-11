/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let charSet = new Set();
  let left = 0;
  let count = 0;
  for (let right = 0; right < s.length; right++) {
    console.log(`right pointer ${right} at ${s[right]}`)


    while (charSet.has(s[right])) {
      console.log(`set still has dupes of ${s[right]}`)
      console.log(charSet);
      charSet.delete(s[left]);
      left++;
      console.log(`new left ${left}`)
    }

    charSet.add(s[right]);
    count = Math.max(count, right - left + 1);
    console.log(`no more dupes, new count ${count}, set:`)
    console.log(charSet);

  }

  return count;

};

let s = "pwwkew";
console.log(lengthOfLongestSubstring(s));