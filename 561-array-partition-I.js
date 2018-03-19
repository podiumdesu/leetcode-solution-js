/**
 * @param {number[]} nums
 * @return {number}
 */

// Easy 96.11%
// Please notice that the efficiency of  (%2) over (2*i-1)

var arrayPairSum = function(nums) {
  nums.sort((a,b) => (a-b))
  let n = nums.length
  let sum = 0
  for (let i = 0; i < n ; i++) {
    if (i % 2 === 0) {
      sum += nums[i]
    }
  }
  console.log(sum)
};

arrayPairSum([1,4,3,2])