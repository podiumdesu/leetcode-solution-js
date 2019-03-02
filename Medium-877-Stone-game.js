/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  let N = piles.length
  let dp = []
  for (let i = 0; i < N; i++) {
    dp[i] = new Array(N).fill(0)
    dp[i][i] = piles[i]
  }
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < N - i; j++) {
      console.log(`i = ${i} j = ${j}`)
      console.log(piles[j] - dp[j + 1][j + i])
      dp[j][j + i] = Math.max(piles[j] - dp[j + 1][j + i], piles[j + i] - dp[j][j + i - 1])
      console.log(`dp[${j}][${j+1}] = ${dp[j][j+i]}`)
    }
  }
  console.log(dp)
  if (dp[0][N - 1] > 0) return true
  return false
};

console.log(stoneGame([5, 3, 4, 5]))