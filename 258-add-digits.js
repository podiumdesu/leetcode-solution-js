/**
 * @param {number} num
 * @return {number}
 */


const getAddNum = (num) => {
  let res = 0
  while (num > 0) {
    res += num % 10
    num = parseInt(num / 10)
  }
  return res
}
var addDigits = function(num) {
  let res = num
  do {
    res = getAddNum(res)
  } while (res >= 10)
  return res
};

// amazing solution
// res % 9  
console.log(addDigits(45))