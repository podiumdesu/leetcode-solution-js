// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

/**
 * @param {string[]} words
 * @return {string[]}
 */

const keys = {
  1: 'qwertyuiopQWERTYUIOP',
  2: 'asdfghjklASDFGHJKL',
  3: 'zxcvbnmZXCVBNM'
}

const whichRow = (char) => {
  for (let i = 1; i < 4; i++) {
    if (keys[i].indexOf(char) !== -1) return i
  }
}
const inOneRow = (word) => {
  let flag = whichRow(word[0])
  let length = word.length
  for (let i = 1; i < length; i++) {
    if (flag !== whichRow(word[i])) {
      return 0
    }
  }
  return 1
 }
var findWords = function(words) {
  return words.filter( (word) => inOneRow(word))
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
