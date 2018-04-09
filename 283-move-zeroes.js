/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length
  //nums = nums.filter( i=> i !== 0)  // no use filter, it news a new array
  let j = 0
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
  }
  let index = j 
  length = length - index
  for (let i = 0; i < length; i++) {
    nums[index + i] = 0
  }
};

let nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)

