/**
* @param {number} n
* @return {number}
*/
var arrangeCoinsBinarySearch = function(n) {
  let left = 0;  
  let right = n;
  while (left <= right) {
    let pivot = Math.floor(left + (right - left) / 2);
    console.log(`left: ${left}, right: ${right}, pivot: ${pivot}`);    
    let coinsUsed = pivot * (pivot + 1) / 2;
   
    if (coinsUsed == n) {
       console.log(`coin used: ${coinsUsed}, coins available: ${n}, yes! returns ${pivot}`);
      return pivot;
    }
    if (n < coinsUsed) {
      console.log(`coin used: ${coinsUsed}, coins available: ${n}, decrease right`);
      right = pivot - 1;
    } else {
            console.log(`coin used: ${coinsUsed}, coins available: ${n}, increase left`);

      left = pivot + 1;
    }
  } 
    console.log(`left ${left} higher then right ${right}, returning ${right}`);
  
  return right; 
};



console.log(arrangeCoinsBinarySearch(5));
console.log(arrangeCoinsBinarySearch(8));
console.log(arrangeCoinsBinarySearch(8));
console.log(arrangeCoinsBinarySearch(10));
console.log(arrangeCoinsBinarySearch(20));

