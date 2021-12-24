/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {

  var sortedArray = intervals.sort(function(a, b) {
    return a[0] - b[0];
  });
  console.log(sortedArray);

  let output = [];
  output.push(sortedArray[0]);

  for ([start, end] of sortedArray) {
    lastStart = output[output.length-1][0];
    lastEnd = output[output.length-1][1];

    if (start <= lastEnd) {
      output[output.length-1][1] = Math.max(lastEnd, end)
    } else {
      output.push([start, end]);
    }
  }

  return output;

};


let intervals = [[16,25],[1,3],[2,6],[8,10],[15,18]];

console.log(merge(intervals));