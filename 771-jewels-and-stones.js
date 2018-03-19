
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// Easy 89.15%
var numJewelsInStones = function(J, S) {
  let lengthJ = J.length
  let sum = 0
  for (let i = 0; i < J.length; i++) {
      sum += S.split(J[i]).length - 1
  }
  console.log(sum)
  return sum
};

numJewelsInStones('az','az')
numJewelsInStones('az','AZ')
numJewelsInStones('a','SSS')
numJewelsInStones('az','az')
numJewelsInStones('az','az')