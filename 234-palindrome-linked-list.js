// Given a singly linked list, determine if it is a palindrome.
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

function initList(head) {
  let i = head.length
  let list = new ListNode(0)
  let result = list
  for (let j = 0 ; j < i; j++) {
    list.next = new ListNode(head[j])
    list = list.next
  }
  return result.next
}

var isPalindrome = function(head) {
  let temp = []
  let reverse = []
  while (head) {
    temp.push(head.val)
    head = head.next
  }
  reverse = temp
  temp.reverse()
  for (let i = 0; i < temp.length; i++) {
    if (reverse[i] === temp[i]) {
      console.log('1')
      return true
    } else {
      console.log('0')
      return false
    }
  }
};

isPalindrome(initList([1,2,3,4,5,6]))
isPalindrome(initList([1,2,3,3,2,1]))
isPalindrome(initList([1,2,3,2,1]))
isPalindrome(initList([1,2]))