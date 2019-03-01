let root = require('./tree')

function preOrderTraversal(node, res) {
  res.push(node.val)
  if (node.left) {
    preOrderTraversal(node.left, res)
  }
  if (node.right) {
    preOrderTraversal(node.right, res)
  }
}

function preOrder(root) {
  const res = []
  if (root) {
    preOrderTraversal(root, res)
  }
  return res
}
console.log(`先序遍历 ${preOrder(root)}`)



function inOrderTraversal(node, res) {
  if (node.left) {
    inOrderTraversal(node.left, res)
  }
  res.push(node.val)
  if (node.right) {
    inOrderTraversal(node.right, res)
  }
}

function inOrder(root) {
  const res = []
  if (root) {
    inOrderTraversal(root, res)
  }
  return res
}
console.log(`中序遍历 ${inOrder(root)}`)


function postOrderTraversal(node, res) {
  if (node.left) {
    postOrderTraversal(node.left, res)
  }
  if (node.right) {
    postOrderTraversal(node.right, res)
  }
  res.push(node.val)
}

function postOrder(root) {
  const res = []
  if (root) {
    postOrderTraversal(root, res)
  }
  return res
}

console.log(`后序遍历 ${postOrder(root)}`)