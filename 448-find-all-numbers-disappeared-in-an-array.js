/**
 * @param {number[]} nums
 * @return {number[]}
 */


// 5756ms
var findDisappearedNumbers = function(nums) {
  let arr = Array.from({length:nums.length}, (v, i) => i+1)
  let newNum = Array.from(nums.reduce((set, cur) => set.add(cur), new Set()))
  return arr.filter( i=> !newNum.includes(i))
};

// 5984ms
var findDisappearedNumbers = function(nums) {
  let arr = Array.from({length:nums.length}, (v, i) => i+1)
  let newNum = Array.from(nums.reduce((set, cur) => set.add(cur), new Set()))
  return arr.filter( i=> (newNum.indexOf(i) === -1))
};

// 5760ms
var findDisappearedNumbers = function(nums) {
  let arr = Array.from({length:nums.length}, (v, i) => i+1)
  let numsSet = new Set()
  let length = nums.length
  for (let i = 0; i < length; i++) {
    numsSet.add(nums[i])
  }
  let newNum = Array.from(numsSet)
  return arr.filter( i=> (newNum.indexOf(i) === -1))
};
 
// 200ms

var findDisappearedNumbers = function (nums) {
  let arr = Array.from({length:nums.length}, (v, i) => i+1)   // [1,2,3,...n]
  let newNum = Array.from(nums.reduce((set, cur) => set.add(cur), new Set()))
  for (v of newNum) {
    arr[v-1] = -1
  }
  return arr.filter( i => (i > 0) )
}

// 164ms
var findDisappearedNumbers = function(nums) {
  let length = nums.length
    let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = i+1
  }
  let numsSet = new Set()
   for (let i = 0; i < length; i++) {
    numsSet.add(nums[i])
  }
  let newNum = Array.from(numsSet)
  for (v of newNum) {
    arr[v-1] = -1
  }
  return arr.filter( i => (i > 0) )
};

// 148ms
var findDisappearedNumbers = function (nums) {
  let arr = Array.from({length:nums.length}, (v, i) => i+1)
  for (v of nums) {
    arr[v-1] = -1
  }
  return arr.filter( i => (i > 0) )
}

// 116ms
var findDisappearedNumbers = function (nums) {
  let length = nums.length
  let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = i+1
  }
  for (v of nums) {
    arr[v-1] = -1
  }
  return arr.filter( i => (i > 0) )
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(['0','1'].indexOf('1'))

