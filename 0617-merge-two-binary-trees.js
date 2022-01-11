/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


let t4 = new TreeNode(5, undefined, undefined);
let t3 = new TreeNode(2, undefined, undefined);
let t2 = new TreeNode(3, t4, undefined);
let t1 = new TreeNode(1, t2, t3);

let tt7 = new TreeNode(7, undefined, undefined);
let tt5 = new TreeNode(4, undefined, undefined);
let tt4 = new TreeNode(5, undefined, undefined);
let tt3 = new TreeNode(5, undefined, tt7);
let tt2 = new TreeNode(4, tt4, tt5);
let tt1 = new TreeNode(3, tt2, tt3);


var mergeTrees = function(root1, root2) {

  if (root1 == null && root2 == null) {
    return null;
  }

  let v1 = root1 ? root1.val : null || 0;
  let v2 = root2 ? root2.val : null || 0;

  let node = new TreeNode(v1 + v2);



  node.left = mergeTrees(root1 == null ? null : root1.left, root2 == null ? null : root2.left);
  node.right = mergeTrees(root1 == null ? null : root1.right, root2 == null ? null : root2.right);

  return node;

};


console.log(mergeTrees(t1, tt1));