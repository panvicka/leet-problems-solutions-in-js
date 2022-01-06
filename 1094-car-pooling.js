/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {


  let stops = new Array(1001).fill(0);

  let curr = 0;

  for ([people, start, stop] of trips) {
    stops[start] = stops[start] + people;
    stops[stop] = stops[stop] - people;
  }
  console.log(stops)

  for (let i = 0; i < 1001; i++) {
    capacity = capacity - stops[i];
    console.log(`for stop ${i} my capa is ${capacity}`)
    if (capacity < 0) {
      console.log(`problem on ${i}, capacity is ${capacity}`)
      return false;
    }
  }
  return true;


};


let trips = [[2, 1, 5], [3, 3, 7]];
let capacity = 4;


console.log(carPooling(trips, capacity));