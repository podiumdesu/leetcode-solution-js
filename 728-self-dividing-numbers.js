/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */


const divideNumber = (num) => {
  let flag
  let tempNum = num
  while (tempNum > 0) {
    flag = tempNum % 10
    if (num % flag !== 0) return 0
    tempNum = parseInt(tempNum / 10)
  }
  return 1
}
var selfDividingNumbers = function(left, right) {
  let result = Array.from({length: right - left + 1} , (v , i) => i + left)
  return result.filter( i => divideNumber(i)) 
};

console.log(selfDividingNumbers(1,22))