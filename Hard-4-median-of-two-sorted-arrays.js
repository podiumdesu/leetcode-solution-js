/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 其实就是寻找第k位的数
// 进行了修改但是好像没有太大的改进。。。。。

var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let res = []
  let i, j, k
  const even = ((len1 + len2) % 2 === 0)
  let mid = Math.floor((len1 + len2) / 2)

  for (i = 0, j = 0, k = 0;
    (i < len1) & (j < len2);) {
    if (nums1[i] < nums2[j]) {
      res[k] = nums1[i]
      i++
    } else {
      res[k] = nums2[j]
      j++
    }
    if (k === mid) {
      if (even) return (res[k - 1] + res[k]) / 2
      return res[k]
    }
    k++
  }

  // 1,1
  // k = 2, mid = 2
  let temp = (i === len1) ? j : i
  let leftArr = (i === len1) ? nums2 : nums1

  while (k !== (mid + 1)) {
    res[k] = leftArr[temp]

    k++, temp++
  }
  if (even) return (res[mid] + res[mid - 1]) / 2
  return res[mid]
};

// 做法2
/*
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let res = []
  let i, j, k
  for (i = 0, j = 0, k = 0;
    (i < len1) & (j < len2);) {
    if (nums1[i] < nums2[j]) {
      res[k] = nums1[i]
      i++
    } else {
      res[k] = nums2[j]
      j++
    }
    k++
  }
  if (i === len1) {
    for (j; j < len2; j++, k++) {
      res[k] = nums2[j]
    }
  } else {
    for (i; i < len1; i++, k++) {
      res[k] = nums1[i]
    }
  }
  if ((len1 + len2) % 2 === 0) {
    return parseFloat((res[(len1 + len2) / 2] + res[(len1 + len2) / 2 - 1]) / 2)
  } else {
    return parseFloat((res[(len1 + len2 - 1) / 2]))
  }
};
*/