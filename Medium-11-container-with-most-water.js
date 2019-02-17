/**
 * @param {number[]} height
 * @return {number}
 */

// 思路：从数组的最后往前找，找到数组从前往后的第一个比最后一个数字小的数，再计算长度即可
// 再从数组的最前往后找，同样的思路。取最大值
// [1, 2]的情况就需要从前往后找
var maxArea = function (height) {
  let max = 0
  for (let j = height.length - 1; j >= 0; j--) {
    for (let i = 0, len = height.length; i < len; i++) {
      if (height[i] >= height[j]) { // 直接结束
        max = (height[j] * (j - i) > max) ? height[j] * (j - i) : max
        break
      }
    }
  }
  for (let i = 0, len = height.length; i < len; i++) {
    for (let j = height.length - 1; j >= 0; j--) {
      if (height[i] <= height[j]) { // 直接结束
        max = (height[i] * (j - i) > max) ? height[i] * (j - i) : max
        break
      }
    }
  }

  return max
};

a = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
a = maxArea([1, 2])
console.log(a)