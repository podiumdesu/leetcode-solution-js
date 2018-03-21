## 简单的记录

按照题型种类进行分类

## 链表
### 单链表
### [Leetcode 2 add-two-numbers](https://leetcode.com/problems/add-two-numbers/description/)
题解：单链表每个节点存储一个val，从左至右位权依次为10 ^ i，(i >= 0)，就是普通的加法，但是需要注意进位和模10取余。
```js
// function ListNode(val) {
//   this.val = val
//   this.next = null
// }
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
```

### [Leetcode 19 remove-nth-node-from-end-of-list](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/) 
题解：移除从后向前数的第n个节点，注意的就是链表指向的改变。同时需要注意非常多的边缘情况。

```js
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

// ADD FUNCTION FOR TEST

// function initList(head) {
//   let i = head.length
//   let list = new ListNode(0)
//   let result = list
//   for (let j = 0 ; j < i; j++) {
//     list.next = new ListNode(head[j])
//     list = list.next
//   }
//   return result.next
// }

// function printList(head) {
//   let result = []
//   while (head) {
//     result.push(head.val)
//     head = head.next
//   }
//   console.log(result)
// }


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

// TEST
// printList(removeNthFromEnd(initList([1,2,3,4,5]), 0))
// printList(removeNthFromEnd(initList([1,2,3,4,5]), 5))
// printList(removeNthFromEnd(initList([1,2,3,4,5]), 2))
// printList(removeNthFromEnd(initList([1]), 0))
// printList(removeNthFromEnd(initList([1,2]), 0))

```

### [Leetcode 21 merge-two-sorted-lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)
```js
题解：整合两个有序的序列，比较简单，但是算法还应该继续优化。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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
```