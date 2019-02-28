/**
 * @param {string[]} grid
 * @return {number}
 */

function dfs(g, i, j) {
  let len = g.length
  // console.log(len)
  // console.log("现在是" + i + j)
  if ((i >= 0) && (j >= 0) && (i < len) && (j < len) && (g[i][j] === 0)) {
    g[i][j] = 1
    // console.log(`接下来遍历 ${i - 1} ${j}`)
    // console.log(`接下来遍历 ${i + 1} ${j}`)
    // console.log(`接下来遍历 ${i} ${j-1}`)
    // console.log(`接下来遍历 ${i} ${j+1}`)

    dfs(g, i - 1, j)
    dfs(g, i + 1, j)
    dfs(g, i, j + 1)
    dfs(g, i, j - 1)
  }
}
var regionsBySlashes = function (grid) {
  let arrLen = grid.length * 3
  let res = new Array(arrLen)
  for (let i = 0, len = grid.length; i < len; i++) {
    for (let k = 0; k < 3; k++) {
      res[i * 3 + k] = new Array(arrLen)
      res[i * 3 + k].fill(0)
    }
    for (let j = 0; j < len; j++) {
      // console.log(`${i} ${j}`)
      if (grid[i][j] === "\\") { // grid[0][1]
        res[i * 3][j * 3] = 1, res[i * 3 + 1][j * 3 + 1] = 1, res[i * 3 + 2][j * 3 + 2] = 1
      }
      if (grid[i][j] === "/") {
        res[i * 3][j * 3 + 2] = 1, res[i * 3 + 1][j * 3 + 1] = 1, res[i * 3 + 2][j * 3] = 1
      }
    }
  }
  // console.log(res[0])
  // console.log(res[1])
  // console.log(res[2])
  // console.log(res[3])
  // console.log(res[4])
  // console.log(res[5])
  let num = 0
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      if (!res[i][j]) {
        dfs(res, i, j)
        num++
        // console.log(num)
      }
    }
  }
  return num
}

console.log(regionsBySlashes(["/\\", "/ "]))