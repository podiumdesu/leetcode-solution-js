function preTraversal(root, num) {
  // num.push(root.val)
  // console.log(num)
  if (root.children) {
    for (let i = 0, len = root.children.length; i < len; i++) {
      num.push(root.children[i].val)
      // console.log(num)
      preTraversal(root.children[i], num)
    }
  }
  return num
}
var preorder = function (root) {
  let res = []
  if (root) {

    res.push(root.val)
    preTraversal(root, res)

  }
  return res
};