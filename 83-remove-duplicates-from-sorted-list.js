// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

// Easy

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

// suppose initial singly-list exist
// f**k!!! runtime error

// var deleteDuplicates = function(head) {
//   let list = new ListNode(0)
//   let result = list
//   do {
//     if (head.val !== list.val) {
//       list.next = new ListNode(head.val)
//       list = list.next
//     }
//     head = head.next
//   } while (head)
//   return result.next 
// }

function ListNode(val) {
  this.val = val
  this.next = null
}
var deleteDuplicates = function(head) {
  let list = new ListNode(0)
  let result = list
  let flag = 1
  while (head) {
    console.log('gg')
    if (head.val !== undefined) {
      if (flag) {
        console.log('gg2')
        list.next = new ListNode(head.val)
        flag = 0
        list = list.next
      } else {
        if (list.val !== head.val) {
          list.next = new ListNode(head.val)
          list = list.next 
        }
      }
    }
    head = head.next
  }
  console.log(result.next.val)
  return result.next 
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

deleteDuplicates(initList([0,0,0,0,0]))