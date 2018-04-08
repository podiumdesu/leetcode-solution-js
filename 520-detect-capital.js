/**
 * @param {string} word
 * @return {boolean}
 */

const isCapital = (char) => {
  let codeIndex = char.charCodeAt(0)
  if (codeIndex < 91 && codeIndex > 64) {
    return true
  } else {
    return false
  }
}
var detectCapitalUse = function(word) {
  let flag = isCapital(word[0])  // capital for 1
  for (v of word) {
    if (flag) {
      if (isCapital(v) === 0) {
        flag = 0
      }
    } else {
      if (isCapital(v) !== flag) {  // SOLVE all not capital
        return false
      }
    }
  }
  return true

};

console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('flAg'))
console.log(detectCapitalUse('Flag'))