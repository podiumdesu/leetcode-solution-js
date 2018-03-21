// Write a program to find the node at which the intersection of two singly linked lists begins.


// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗            
// B:     b1 → b2 → b3
// begin to intersect at node c1.


// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.
// Credits:
// Special thanks to @stellari for adding this problem and creating all test cases.



function ListNode(val) {
  this.val = val;
  this.next = null;
 }
 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
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

function reverseList(head) {
  let pre = new ListNode(0)
  pre = pre.next
  let next = new ListNode(0)
  if (head === null) {
    return null
  }
  while (head !== null) {
    next = head.next
    head.next = pre
    pre = head 
    head = next
  }
  return pre
}

var getIntersectionNode = function(headA, headB) {
  let flagA = new ListNode(0) = headA
  let flagB = new ListNode(0) = headB
  let reverseA = new ListNode(0)
  let reverseB = new ListNode(0)
  let temp = new ListNode(0)
  reverseA = headA
  reverseB = headB
  reverseA = reverseList(reverseA)
  reverseB = reverseList(reverseB)
  reverseList(flagA)
  reverseList(flagB)
  if (reverseA !== reverseB || reverseA === null || reverseB === null) {
    return null
  }
  while (reverseA === reverseB && reverseA !== null) {
    temp = reverseA
    reverseA = reverseA.next
    reverseB = reverseB.next
  }

  return temp
 };

getIntersectionNode(initList([1,2,3,5]), initList([5,2,3,5]))