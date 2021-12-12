/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumberBruteTEL = function(n, a, b) {

  const MOD = 1e9 + 7;
  let i = Math.min(a, b);

  while (n > 0) {
    if (i % a == 0 || i % b == 0) {
      n--;
      console.log(`found a number ${i}, decreasing n to ${n}`);
    }
    else {
      console.log(`not magic number ${i}`)
    }
    i++;
  }

  console.log(`returning this ${i}`);

  return (i - 1) % MOD;
};



var nthMagicalNumber = function(n, a, b) {
  const MOD = Math.pow(10, 9) + 7;

  let gcd = getGcd(a, b);
  let lcm = (a * b / gcd);
  console.log(`got gcd ${gcd} and lcm ${lcm}`);


  let lo = Math.min(a, b) - 1;
  let hi = Math.min(a, b) * n;
  console.log(`starting with low ${lo} and hi ${hi}`);
  while (lo + 1 < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    console.log(`new mid ${mid}`);

    let count = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm);
    console.log(`count ${count}`);

    if (count >= n) {
      hi = mid;
      console.log(`count higher then n, set new hi to ${mid}`);
    } else {
      lo = mid;
      console.log(`count lower then n, set new lo to ${mid}`);
    }
  }

  return hi % MOD;
};


function getGcd(a, b) {
  // console.log(`calling gcd with a ${a}, b ${b}`)
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
}

console.log(nthMagicalNumber(10, 2, 5));


getGcd(4, 6);
getGcd(6, 4);