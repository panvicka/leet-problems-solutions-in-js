/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {

  let total = 60;
  let result = 0;
  let map = new Map();
  for (let i = 0; i < time.length; i++) {

    let reminder = time[i] % 60;
    let lookingFor = 0;
    if (reminder != 0) {
      lookingFor = total - reminder;;
    }
    console.log(`reminder ${reminder}, looking for ${lookingFor}`);

    if (map.has(lookingFor)) {
      let occurances = map.get(lookingFor);
      result = result + occurances;
      console.log(`already in the map ${occurances} times, result ${result}`)
    }

    if (map.has(reminder)) {
      let occurances = map.get(reminder)
      map.set(reminder, occurances + 1);
    } else {
      map.set(reminder, 1);
    }
    console.log(`new map`);
    console.log(map)
  }

  return result;
}


var numPairsDivisibleBy60array = function(time) {

  let result = 0;
  let arr = new Array(60).fill(0);
  for (let i = 0; i < time.length; i++) {

    let reminder = time[i] % 60;
    let lookingFor = 0;
    if (reminder != 0) {
      lookingFor = 60 - reminder;
    }

    result = result + arr[lookingFor];
    arr[reminder] = arr[reminder] + 1;

  }

  return result;
}


let time = [30, 20, 150, 100, 40];
time = [60, 60, 60];
console.log(numPairsDivisibleBy60array(time));