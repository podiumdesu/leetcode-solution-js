/**
 * @param {number[][]} triangle
 * @return {number}
 */

// [
//   [2],
//  [3,4],
// [6,5,7],
// [4,1,8,3]
// ]
var minimumTotal = function (triangle) {
  const row = triangle.length // 4
  console.log(row)
  const res = Array.from(triangle)
  for (let i = row - 2; i >= 0; i--) { // i = 2
    for (let j = 0; j < i + 1; j++) {
      res[i][j] = Math.min(res[i + 1][j], res[i + 1][j + 1]) + res[i][j]
      console.log(`res[${i}][${j}] = ${res[i][j]}`)
    }
  }
  return res[0][0]
};

a = minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
])