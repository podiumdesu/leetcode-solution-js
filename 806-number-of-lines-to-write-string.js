/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */

const getIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0) 
var numberOfLines = function(widths, S) {
  let a = Array.from(S).map( i => widths[getIndex(i)])
  let lineNum = 1
  let flag = 0
  let length = a.length
  for (let i = 0; i < length; i++) {
    flag += a[i]
    if (flag > 100) {
      lineNum ++
      flag = 0
      flag += a[i]
    }
  }
  return [lineNum++, flag]
};

widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
console.log(numberOfLines(widths, S))