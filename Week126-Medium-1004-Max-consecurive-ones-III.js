/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

// A = [0, 1, 1, 0]   K = 0
// A = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], K = 2
var longestOnes = function (A, K) {
  let res = 0
  const N = A.length
  for (let i = 0, j = 0; j < N; j++) {
    if (A[j] === 0) {
      K--
    }
    while (K < 0) {
      if (A[i++] == 0) K++
    }
    res = Math.max(res, j - i + 1)
  }
  return res
};
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))