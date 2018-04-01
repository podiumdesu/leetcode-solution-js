/* 328. Odd Even Linked List
DescriptionHintsSubmissionsDiscussSolution
Given a singly linked list, group all odd nodes together followed by the even nodes. 
Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. 
The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...

Credits:
Special thanks to @DjangoUnchained for adding this problem and creating all test cases.*/

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

function ListNode(val) {
  this.val = val
  this.next = null
}
var oddEvenList = function(head) {
  let copy = new ListNode(0)
  let copyhead = copy
  let newhead = head
  while (newhead) {
    copy.next = new ListNode(newhead.val)
    copy = copy.next
    newhead = newhead.next
  }  // get copyhead.next
  copyhead = copyhead.next
  let evenhead = null
  if (copyhead) {
    evenhead = copyhead.next
  }
  printList(copyhead)
  printList(evenhead)

  let result = new ListNode(0)
  let resultHead = result
  while (copyhead) {
    console.log(copyhead.val)
    result.next = new ListNode(copyhead.val)
    if (copyhead.next !== null) {
      copyhead = copyhead.next.next
      result = result.next
    } else {
      result = result.next
      break
    }
  }
  while (evenhead) {
    result.next = new ListNode(evenhead.val)
    if (evenhead.next !== null) {
      evenhead = evenhead.next.next
      result = result.next
    } else {
      break
    }
  }
  return (resultHead.next)
};

printList(oddEvenList(initList([1,2,3])))