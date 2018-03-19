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

var reverseList = function(head) {
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
};

printList(reverseList(initList([1])))