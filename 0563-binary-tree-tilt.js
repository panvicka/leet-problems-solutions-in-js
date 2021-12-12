/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let c = new TreeNode(3, undefined, undefined);
let b = new TreeNode(2, undefined, undefined);
let a = new TreeNode(1, b, c)


var findTilt = function(root) {

  let tilt = 0;

  function findSum(node) {

    if (node == null) return 0;

    const left = findSum(node.left);
    const right = findSum(node.right);

    const sum = left + right;

    tilt += Math.abs(left - right);

    return sum + node.val;
  }

  findSum(root);

  return tilt;
};





console.log(findTilt(a));