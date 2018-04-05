


/**
 * @param {string[]} words
 * @return {number}
 */
// var uniqueMorseRepresentations = function(words) {
//   const keys = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
//   const string = 'abcdefghijklmnopqrstuvwxyz'
//   const mapKeys = new Map()
//   let i = 0
//   keys.map(()=> {
//     mapKeys.set(string[i], keys[i])
//     i++
//   })
//   const num = words.length
//   let result = []
//   let resultSet = new Set
//   words.map((word)=> {
//     word = word.split('')
//     word.map( (i) => {
//       result += mapKeys.get(i)
//     })
//     resultSet.add(result)
//     console.log(result)
//     result = []
//   })
//   return resultSet.size
// };


// use ES6
// Quite amazing
const keys = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const getIndex = char => char.charCodeAt(0) - 'a'.charCodeAt(0)
var uniqueMorseRepresentations = function(words) {
  return words.map( word => 
    word.split('').map( char => keys[getIndex(char)])
                  .join(''))
                  .reduce( (set, cur) => set.add(cur) , new Set())
                  .size
}
uniqueMorseRepresentations(words = ["gin", "zen", "gig", "msg"])