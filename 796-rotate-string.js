/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

 // 52ms
var rotateString = function(A, B) {
  if (A.length !== B.length) return false
  let length = A.length
  if (A === B) return true
  let temp
  for (let i = 0; i < length; i++) {
    if (B === A.slice(i).concat(A.substr(0,i))) {
      return true
    }
  }
  return false
};
console.log(rotateString('abcde','cdeab'))
console.log(rotateString('', ''))