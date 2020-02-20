// Reverse a singly linked list.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// Accepted 64ms 95.51%
// Easy

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

function printList(head) {
  let result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  console.log(result)
}
var result = new ListNode(0)

function reverseList(head) {

  // 1. use reverse array

  let i = 0
  let list = new ListNode(0)
  let result = new ListNode(0)
  result = list
  let temp = []
  while(head) {
    temp.push(head)
    head = head.next
  }
  temp.reverse()
  let length = temp.length
  for (let j = 0; j < length; j++) {
    list.next = new ListNode(temp[j].val)
    list = list.next
  }
  return result.next

  // 2. not use recursion
  // let pre = new ListNode(0)
  // pre = pre.next
  // let next = new ListNode(0)
  // while (head !== null) {
  //   next = head.next
  //   head.next = pre
  //   pre = head 
  //   head = next
  // }
  // return pre

  // 3 use recursion
  // todo something wrong
// var reverseList = function(head) {
//   let temp = new ListNode(0)
//   let result = new ListNode(0)
//   if (head === null || head.next === null) {
//     result = head
//     return result
//   } else {
//     temp = reverseList(head.next) // 返回该节点的后一位
//     temp.next = head
//     head.next = null
//   }
//   return head

  // 4 use unshift, similar with method 1
// };
}
printList(reverseList(initList([1,2,3,4])))