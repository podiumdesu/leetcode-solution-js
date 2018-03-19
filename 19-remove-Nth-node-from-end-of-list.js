// Given a linked list, remove the nth node from the end of list and return its head.

// For example,

//    Given linked list: 1->2->3->4->5, and n = 2.

//    After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Try to do this in one pass.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
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

function printList(head) {
  let result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  console.log(result)
}


var removeNthFromEnd = function(head, n) {
  let i = 0
  //console.log(head.val)
  let list = new ListNode(0)
  var j = 0
  list = head
  while (head) {
    i++
    head = head.next
  }
  head = list
  for (j = 0; j < (i - n - 1); j++) {
    head = head.next
  }
  //console.log(head.val)
  if (head.next) {
    if ((i - n !== 0) && (n !== 0)) {   // remove first
      head.next = head.next.next
    } else if (n === 0) {
      return list
    } else {
      return head.next
    }
  } else if (i === 1) {
    if (n !== 0) {
      list = list.next
    } else {
      return list
    }
  } 
  return list
};


printList(removeNthFromEnd(initList([1,2,3,4,5]), 0))
printList(removeNthFromEnd(initList([1,2,3,4,5]), 5))
printList(removeNthFromEnd(initList([1,2,3,4,5]), 2))
printList(removeNthFromEnd(initList([1]), 0))
printList(removeNthFromEnd(initList([1,2]), 0))

