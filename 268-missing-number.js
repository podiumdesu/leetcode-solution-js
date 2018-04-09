/**
 * @param {number[]} nums
 * @return {number}
 */

// 60ms 100%

var missingNumber = function(nums) {
  let length = nums.length
  let arr = []
  let result = 0
  let i = 0
  for (; i < length; i++) {
    result ^= nums[i]
    result ^= i
  }
  result ^= i

  return result


};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([3,0,1]))