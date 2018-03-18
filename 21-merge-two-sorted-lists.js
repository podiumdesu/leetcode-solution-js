// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

var mergeTwoLists = function(l1, l2) {
  let list = new ListNode(0)
  let result = list
  while (l1 || l2) {
    if (l1 === l2) {
      return result.next
    } else if (l2 !== null && l1 !== null) {
      if (l1.val > l2.val) {
        list.next = new ListNode(l2.val)
        l2 = l2.next
        list = list.next
      } else {
        list.next = new ListNode(l1.val)
        l1 = l1.next
        list = list.next
      }
    } else {
      if (l1 === null) {
        list.next = new ListNode(l2.val)
        l2 = l2.next
        list = list.next
      } else {
        list.next = new ListNode(l1.val)
        l1 = l1.next
        list = list.next 
      }
    }
  }
  return result.next
}

// var mergeTwoLists = function(l1, l2) {
//   let list = new ListNode(0)
//   let temp
//   let result = list
//   while (l1 || l2) {
//     if (l1 === l2) {
//       return result.next
//     } else if (l2 === null || l1 === null) {
//       if (l1) {
//         list.next = new ListNode(l1.val)

//       } else {
//         list.next = new ListNode( l2.val)
//       }
//       list = list.next
//     } else {
//       if (l1.val > l2.val) {
//         list.next = new ListNode(l2.val)
//         l2 = l2.next
//         list = list.next
//       } else {
//         list.next = new ListNode(l1.val)
//         l1 = l1.next
//         list = list.next
//       }
//     }
//   }
//   return result.next
// }