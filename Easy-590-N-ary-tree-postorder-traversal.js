/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// function Node(val, children) {
//   this.val = val
//   this.children = children
// }

function postTraversal(node, num) {
  if (node.children) {
    for (let i = 0, len = node.children.length; i < len; i++) {
      postTraversal(node.children[i], num)
    }
    num.push(node.val)
  }
}
var postorder = function (root) {
  let num = []
  if (root) {
    postTraversal(root, num)
    num.push(root.val)
  }
  return num
};