/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

  if (s1.length > s2.length) return false;


  let matches = 0;

  let arrS1 = new Array(26).fill(0);
  let arrS2 = new Array(26).fill(0);
  let slid = new Array(s1.length);

  for (let i = 0; i < s1.length; i++) {
    // init first hashmap
    let asci = s1[i].charCodeAt(0);
    arrS1[asci - 97]++;

    // init second hashmap
    asci = s2[i].charCodeAt(0);
    arrS2[asci - 97]++;
  }

  console.log(arrS1);

  // init matches
  for (let i = 0; i < 26; i++) {
    if (arrS1[i] == arrS2[i]) {
      matches++;
    }
  }

  console.log(`starting matches ${matches}`)

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    console.log(`-----------------`)
    console.log(`right pointer at ${right}, ${s2[right]}, matches ${matches}`)
    if (matches == 26) return true;


    // adding a new character to the right of the window 
    // asci of the newly added characted
    let index = s2[right].charCodeAt(0) - 97;
    arrS2[index]++;
    console.log(`adding a new char ${s2[right]} with index ${index}... arrS2[index]=${arrS2[index]}, arrS1[index]=${arrS1[index]}`)

    // we have just made them equal, increase match 
    if (arrS2[index] == arrS1[index]) {
      matches++;
      console.log(`adding char ${s2[right]} increases matches to ${matches}`)
    } else if (arrS2[index] == (arrS1[index] + 1)) {  // they were equal before, now there are not
      matches--;
      console.log(`adding char ${s2[right]} decreases matches to ${matches}`)
    }

    // removing one character from left side of the window
    index = s2[left].charCodeAt(0) - 97;
    arrS2[index]--;
    console.log(`removing a new char ${s2[left]} with index ${index}... arrS2[index]=${arrS2[index]}, arrS1[index]=${arrS1[index]}`)

    // we have just made them equal, increase match 
    if (arrS2[index] == arrS1[index]) {
      matches++;
      console.log(`removing char ${s2[left]} increases matches to ${matches}`)
    } else if (arrS2[index] == (arrS1[index] - 1)) {  // they were equal before, now there are not
      matches--;
      console.log(`removing char ${s2[left]} decreases matches to ${matches}`)
    }
    left++;
  }

  if (matches == 26) return true;

  return false;

};

let s1 = "abc";
let s2 = "baxyzabc";

console.log(checkInclusion(s1, s2));