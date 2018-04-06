/**
 * @param {number[]} candies
 * @return {number}
 */
// 97.02% 160ms
var distributeCandies = function(candies) {
  let kind = candies.reduce( (num, cur) => num.add(cur), new Set()).size
  return (kind <= (candies.length / 2)) ? kind : (candies.length / 2)
};
console.log(distributeCandies([1,1,2,3])) // 2