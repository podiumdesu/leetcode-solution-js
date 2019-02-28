/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
let root = new TreeNode(1)
a = new TreeNode(-1)
root.left = a
b = new TreeNode(3)
root.right = b
c = new TreeNode(4)
a.left = c
d = new TreeNode(5)
a.right = d
e = new TreeNode(6)
b.right = e
f = new TreeNode(7)
b.left = f

maxHeight = 0

function traversal(node, depth, maximum) {
  // console.log(`现在的值为${node.val}，depth = ${depth}, maximum = ${maximum}, maxHeight = ${maxHeight}`)
  depth++
  if (node.left) {
    if (depth > maxHeight) {
      maximum = node.left.val
      maxHeight = depth
    }
    maximum = traversal(node.left, depth, maximum)
  }
  if (node.right) {
    if (depth > maxHeight) {
      maximum = node.right.val
      maxHeight = depth
    }
    maximum = traversal(node.right, depth, maximum)
  }
  return maximum
}

var findBottomLeftValue = function (root) {
  let depth = 0
  let maximum = root.val
  if (root) {
    maximum = traversal(root, depth, maximum)
  }
  return maximum
};

console.log(findBottomLeftValue(root))