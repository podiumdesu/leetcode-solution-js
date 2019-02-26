/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function insertNode(root, node) {
  if (node.val > root.val) {
    node.left = root
    return node
  }
  current = root
  while (current.right) {
    if (node.val > current.right.val) {
      node.left = current.right
      current.right = node
      return root
    } else {
      current = current.right
    }
  }
  current.right = node
  return root
}

function printTree(root) {
  if (root.left) {
    printTree(root.left)
  }
  console.log(root.val)
  if (root.right) {
    printTree(root.right)
  }

  return
}

var constructMaximumBinaryTree = function (nums) {
  let root = new TreeNode(nums[0])
  for (let i = 1, len = nums.length; i < len; i++) {
    root = insertNode(root, new TreeNode(nums[i]))
  }
  printTree(root)
};

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])