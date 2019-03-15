function TreeNode(val) {
  this.val = val
  this.left = this.right = null
  this.parent = null
}

let root = new TreeNode(1)
let a = new TreeNode(2)
let b = new TreeNode(3)
let c = new TreeNode(4)
let d = new TreeNode(5)
let e = new TreeNode(6)
let f = new TreeNode(7)
let g = new TreeNode(8)
root.left = a
root.right = b
a.left = c
c.right = e
e.left = f
e.right = g
b.right = d

// 先序：1 2 4 6 7 8 3 5
// 中序：4 7 6 8 2 1 3 5
// 后序：7 8 6 4 2 5 3 1
module.exports = root

// [1, 2, 3]