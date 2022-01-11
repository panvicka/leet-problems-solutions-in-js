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

let n7 = new TreeNode(1, undefined, undefined);
let n6 = new TreeNode(0, undefined, undefined);
let n5 = new TreeNode(1, undefined, undefined);
let n4 = new TreeNode(0, undefined, undefined);
let n3 = new TreeNode(1, n6, n7);
let n2 = new TreeNode(0, n4, n5);
let n1 = new TreeNode(1, n2, n3);



var sumRootToLeaf = function(root) {
  const binaries = [];
  const traverse = (node, str) => {
    if (node === null) {
      return;
    }
    // compose the binary string for the next node
    const binary = `${str}${node.val}`;
    console.log(`calling with ${node.val}, current binary is ${binary}`)
    // when visiting a leaf, add binary string to the array
    if (node.left === null && node.right === null) {
      console.log(`found a leef, pushing binary ${binary} to the array`)
      binaries.push(binary);
    }

    traverse(node.left, binary);
    traverse(node.right, binary);
  }

  traverse(root, '');

  return binaries.reduce((sum, binary) => {
    sum += parseInt(binary, 2);
    return sum;
  }, 0)

};


var sumRootToLeafWIthFloatingSum = function(root) {

  let dfs = (root, sum) => {

    if (!root) return;

    sum = sum * 2 + root.val;

    if (root.left || root.right) {
      let left = dfs(root.left, sum);
      let right = dfs(root.right, sum);
      console.log(left, right);
      return left + right;
    } else {
      console.log(`found a leef ${root.val}`)
      return sum;
    }


  }

  return dfs(root, 0);

};




console.log(sumRootToLeafWIthFloatingSum(n1));