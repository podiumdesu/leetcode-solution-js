// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
  this.val = val
  this.next = null
}
var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(2)
  let result = list
  let flag = 0, sum
  while (l1 || l2 || flag > 0) {
    sum = 0
    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }
    
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }
    sum += flag
    list.next = new ListNode(sum % 10)
    flag = parseInt(sum / 10)
    list = list.next
  }
  return result.next
}

a = [2,4,3]
b = [5,6,4]
addTwoNumbers(a,b)