/**
 * @param {number} n
 * @return {string[]}
 */

const isThree = (i) => !(i % 3)
const isFive = (i) => !(i % 5)
var fizzBuzz = function(n) {
  let result = []
  for (let i = 0; i < n; i++) {
    result[i] = i+1
  } 
  result = result.map( (i) => {
    if (isFive(i) && isThree(i)) return 'FizzBuzz'
    if (isThree(i)) return 'Fizz'
    if (isFive(i)) return 'Buzz'
    return i
  })
  return result
};

console.log(fizzBuzz(5))