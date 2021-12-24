var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b); // sort the array
  let result = [];
  let min = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(Math.abs(arr[i] - arr[i - 1]), Math.abs(min));
  }
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) == min) result.push([arr[i - 1], arr[i]]);
  }
  return result;
};