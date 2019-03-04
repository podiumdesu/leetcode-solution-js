/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let dp = []
  dp[0] = 0 // initial state
  let offset = 1
  for (let i = 1; i <= num; i++) {
    if (offset * 2 === i) {
      offset *= 2 // update offset
    }
    console.log("now offset = " + offset)
    dp[i] = dp[i - offset] + 1
  }
  return dp
};

console.log(countBits(20))