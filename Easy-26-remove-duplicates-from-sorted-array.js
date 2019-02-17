/**
 * @param {number[]} nums
 * @return {number}
 */
// [0,0,1,1,1,2,2,3,3,4],
var removeDuplicates = function (nums) {
  let a = Array.from(new Map(nums))
  for (let i = 0, len = a.length; i < len; i++) {
    nums[i] = a[i]
  }
  return a.length
};