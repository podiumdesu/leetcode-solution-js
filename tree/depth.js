let root = require('./tree.js')

function traversal(node, depth, height) {
  if (node) {
    height++
    if (height > depth) {
      depth = height
    }
    console.log(`当前节点 ${node.val} height = ${height} depth = ${depth}`)
  }
  if (node.left) {
    depth = traversal(node.left, depth, height)
  }
  if (node.right) {
    depth = traversal(node.right, depth, height)
  }
  return depth
}

function depth(root) {
  if (root) {
    depth = traversal(root, 0, 0)
  }
  console.log(depth)
}

depth(root)