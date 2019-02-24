/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
  return arr
}

function Partition(arr, start, end) {
  // console.log(arr)
  // console.log(start)
  // console.log(end)
  let x = arr[end]
  let i = start - 1
  for (let j = start; j < end; j++) {
    if (arr[j] <= x) {
      i++
      arr = swap(arr, i, j)
    }
  }
  swap(arr, i + 1, end)
  return i + 1
}

function sort(arr, start, end) {
  if (start < end) {
    q = Partition(arr, start, end)
    sort(arr, start, q - 1)
    sort(arr, q + 1, end)
  }
}

function QuickSort(arr) {
  const len = arr.length
  sort(arr, 0, len - 1)
  return arr
}


var threeSum = function (arr) {
  let nums = QuickSort(arr)
  let l, r, sum
  let res = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if ((nums[i] == nums[i - 1]) || (nums[i] > 0)) {} else {
      l = i + 1, r = nums.length - 1, sum = 0 - nums[i]
      while (l < r) {
        if (nums[l] + nums[r] == sum) { // 成功
          res.push([nums[l], nums[r], -sum])
          l++, r--
          while (nums[l] == nums[l - 1]) {
            l++
          }
          while (nums[r] == nums[r + 1]) {
            r--
          } // 跳过重复的
        } else if (nums[l] + nums[r] < sum) { //
          l++

        } else { // 加起来太大
          r--
        }
      }
    }

  }
  return res
};

// threeSum([-1, -1, 0, -4, 2, 1])
gg = threeSum(
  [0, -4, -1, -4, -2, -3, 2])
console.log(gg)