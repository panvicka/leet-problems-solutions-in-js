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
 * @param {number} val
 * @return {TreeNode}
 */





function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


let n5 = new TreeNode(3, null, null);
let n4 = new TreeNode(1, null, null);
let n3 = new TreeNode(7, null, null);
let n2 = new TreeNode(2, n4, n5);
let n1 = new TreeNode(4, n2, n3);


var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val);
    }
    if(val > root.val){
        root.right = insertIntoBST(root.right, val);
    }
    else {
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};

console.log(insertIntoBST(n1, 5));