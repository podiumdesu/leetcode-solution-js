/**
 * @param {string} word
 * @return {boolean}
 */

// todo: very slow solution
const isCapital = (char) => {
  let codeIndex = char.charCodeAt(0)
  if (codeIndex < 91 && codeIndex > 64) {
    return 1
  } else {
    return 0
  }
}
var detectCapitalUse = function(word) {
  if (word.length === 1) return true
  let flag = isCapital(word[0])  // capital for 1
  let capitalNums = 0
  let change = 0
  for (v of word) {
    if (flag) {
      capitalNums++
      if (isCapital(v) === 0) {   // 出现一个小写字母
        flag = 0
      }
    } else {  //flag = 0
      if (isCapital(v) !== flag) {  // SOLVE all not capital
        return false
      }
    }
  }
  //console.log(capitalNums)
  if (capitalNums === 2) return true
  if (flag === 0 && capitalNums > 1 ) return false
  return true

};

console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('flAg'))
console.log(detectCapitalUse('Leetcode'))
console.log(detectCapitalUse('FFFFFFFf'))
console.log(detectCapitalUse('ggg'))
console.log(detectCapitalUse('ggG'))
console.log(detectCapitalUse('ggg'))