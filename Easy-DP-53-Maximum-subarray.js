/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
var maxSubArray = function (nums) {
  const b = []
  b[0] = nums[0]
  let targets = []
  // let sum = -Infinity  // 如果nums只有一个数据就凉了
  let sum = b[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    if (b[i - 1] + nums[i] > nums[i]) {
      targets.push(i)
      b[i] = b[i - 1] + nums[i]
      sum = (b[i] > sum) ? b[i] : sum
    } else {
      targets = [i]
      b[i] = nums[i]
      sum = (b[i] > sum) ? b[i] : sum
    }
    console.log(`b[${i}] = ${b[i]}`)
    console.log(sum)
  }
  return sum
};

let a = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])