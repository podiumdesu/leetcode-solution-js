/**
 * @param {string[]} A
 * @return {string[]}
 */

Map.prototype.AddFromPre = function (val) {
  if (this.get(val)) {
    this.set(val, this.get(val) + 1)
  } else {
    this.set(val, 1)
  }
}
var commonChars = function (A) {
  let a = new Map()
  let dup = new Map()

  const N = A.length

  for (let i = 0; i < A[0].length; i++) {
    if (a.get(A[0][i])) { // resolve the duplicate characters
      dup.AddFromPre(A[0][i])
      a.set(A[0][i] + dup.get(A[0][i]), 1)
    } else {
      a.set(A[0][i], 1)
      dup.set(A[0][i], 1)
    }
  }
  let tempDup = new Map()
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < A[i].length; j++) {
      tempDup.AddFromPre(A[i][j])
      if (a.get(A[i][j])) { // can find in already found character
        if (tempDup.get(A[i][j]) <= dup.get(A[i][j])) {
          if (tempDup.get(A[i][j]) == 1) {
            a.AddFromPre(A[i][j])
          } else {
            a.AddFromPre(A[i][j] + tempDup.get(A[i][j]))
          }
        }
      }
    }
    tempDup.clear()
  }
  let res = []
  a.forEach((v, k) => {
    if (v === N) {
      res.push(k.split("")[0])
    }
  })
  return res
};

console.log(commonChars(["beella", "labell", "roller"]))