/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  let mod = 1000000007;
  let dp = makeArray(4, n + 1);

  console.log(dp);



  var helpFce = function(i, t1, t2) {

    if (i == n) {
      console.log(`found end, return 1`);
      return 1;
    }
    let state = makeState(t1, t2);
    console.log(`at col ${i} with t1 ${t1}, t2 ${t2} is state ${state}`);
    console.log(dp[i])
    if (dp[i][state] != null) {
      console.log(`already cached, return ${dp[i][state]}`);
      return dp[i][state];
    }

    let t3 = false;
    let t4 = false;
    if (i + 1 < n) {
      t3 = true;
      t4 = true;
    }

    let count = 0;

    if (t1 && t2 && t3) {
      count += helpFce(i + 1, false, true);
    }

    if (t1 && t2 && t4) {
      count += helpFce(i + 1, true, false);
    }

    if (t1 && !t2 && t3 && t4) {
      count += helpFce(i + 1, false, false);
    }

    if (!t1 && t2 && t3 && t4) {
      count += helpFce(i + 1, false, false);
    }

    if (t1 && t2) {
      count += helpFce(i + 1, true, true);
    }

    if (t1 && t2 && t3 && t4) {
      count += helpFce(i + 1, false, false);
    }

    if (t1 && !t2 && t3) {
      count += helpFce(i + 1, false, true);
    }

    if (!t1 && t2 && t4) {
      count += helpFce(i + 1, true, false);
    }

    if (!t1 && !t2) {
      count += helpFce(i + 1, true, true);
    }


    return dp[i][state] = count % mod;
  }

  return helpFce(0, true, true);

};


var makeState = function(t1, t2) {

  if (t1 && t2) {
    return 3;
  } else if (!t1 && t2) {
    return 2;
  } else if (t1 && !t2) {
    return 1
  } else {
    return 0;
  }

}

function makeArray(d1, d2) {
  var arr = [];
  for (let i = 0; i < d2; i++) {
    arr.push(new Array(d1));
  }
  return arr;
}


console.log(numTilings(3));