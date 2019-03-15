let root = require('./tree.js')
let {
  inOrder
} = require('./traversal.js')
// console.log(inOrder(root))

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
  this.parent = null
  this.height = null
}

function addTreeNode(root, val) {
  // console.log(root)
  if ((!root.left) && (val < root.val)) {
    // console.log("创建左节点" + val)
    root.left = new TreeNode(val)
    root.left.parent = root
    return root
  }
  if ((!root.right) && (val > root.val)) {
    root.right = new TreeNode(val)
    root.right.parent = root
    // console.log("创建右节点" + val)
    return root
  }
  if (val < root.val) {
    addTreeNode(root.left, val)
  } else {
    addTreeNode(root.right, val)
  }
  return root
}


function minAndMax(root, choiceToMin) { // 1 for Min, 0 for Max
  if (choiceToMin) {
    while (root.left) {
      root = root.left
    }
    return root
  } else {
    while (root.right) {
      root = root.right
    }
    return root
  }
}

function nodeSuccessor(root, val, choiceToPre) { // 找到值为val的前或者后节点
  let baseNode = searchNode(root, val)
  if (choiceToPre) {
    if (baseNode.left) {
      return minAndMax(baseNode.left, 0) // find max Node in left tree
    } else {
      let parent = baseNode.parent
      while (parent && (parent.left == baseNode)) {
        baseNode = baseNode.parent
        parent = baseNode.parent
      }
      return baseNode
    }
  } else {
    if (baseNode.right) {
      return minAndMax(baseNode.right, 1) // find min Node in right tree
    } else {
      let parent = baseNode.parent
      while (parent && (parent.right == baseNode)) {
        baseNode = baseNode.parent
        parent = baseNode.parent
      }
      return baseNode
    }
  }
}

function searchNode(root, val) {
  // console.log(root)
  if ((root === null) || (val === root.val)) {
    // console.log("返回")
    // console.log(root)
    return root
  }
  if (val > root.val) {
    return searchNode(root.right, val)
  }
  if (val < root.val) {
    return searchNode(root.left, val) // Please remeber to return
  }
}

function removeNode(root, val) {
  let tempNode = root
  while (val < tempNode.val) {
    if (tempNode.left) {
      tempNode = tempNode.left
    } else {
      console.log("没有这个节点")
      return 0
    }
  }
  while (val > tempNode.val) {
    if (tempNode.right) {
      tempNode = tempNode.right
    } else {

    }
  }
  if (root.left.val === val) {
    if (root.left.right) {
      root.left = root.left.right
      node = root.left.right
      if (root.left.left) {
        while (node.left) {
          node = node.left
        }
        node.left = root.left.left
      }
    }
    if (root.right) {

    }
  }
  if (val === root.left.val) {}
}

function buildBinaryTree(arr) {
  if (arr.length > 0) {
    root = new TreeNode(arr[0])
    for (let i = 1; i < arr.length; i++) {
      // console.log("root = ")
      // console.log(root)
      root = addTreeNode(root, arr[i])
    }

    return root
  }
  return null
}

function printTraversal(node, height) {
  node.height = height + 1
  if (node.left) {
    printTraversal(node.left, node.height)
  }
  if (node.right) {
    printTraversal(node.right, node.height)
  }
  return
}

function printBinaryTree(root) {
  printTraversal(root, 0)
  let nodeList = []
  nodeList.push(root)
  let waitingToPrint = ""
  let currentDepth = 0
  while (nodeList.length > 0) {
    // console.log(nodeList)
    let current = nodeList.shift()
    if (current.height > currentDepth) {
      // console.log(current.height)
      console.log(waitingToPrint)
      waitingToPrint = ""
      currentDepth = current.height
    }
    if (current.left) {
      nodeList.push(current.left)
    }
    if (current.right) {
      nodeList.push(current.right)
    }
    waitingToPrint = waitingToPrint.concat(" " + current.val)
  }
  console.log(waitingToPrint)
}

a = buildBinaryTree([4, 7, 0, 8, 10, 3, 2, 6, 1])
printBinaryTree(a)
// console.log(a)
console.log(inOrder(a))
// let c = searchNode(a, 0)
// console.log(c)

// console.log(minAndMax(a, 1))

// console.log(nodeSuccessor(a, 7, 1))