function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


let n5 = new TreeNode(5, undefined, undefined);
let n4 = new TreeNode(4, undefined, n5);
let n3 = new TreeNode(3, undefined, undefined);
let n2 = new TreeNode(2, undefined, n3);
let n1 = new TreeNode(1, n2, n4);
// console.log(n1);

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
var robNavieveDFT = function(root) {
  if (root == null) {
    console.log(`nothing to find here`);
    return 0;
  }
  let val = 0;

  console.log(`calling robNavieveDFT with ${root.val}`)
  if (root.left != null) {
    let leftBranch = robNavieveDFT(root.left.left) + robNavieveDFT(root.left.right);
    console.log(`result running my left branch ${leftBranch}`)
    val = val + leftBranch;
  } else {
    console.log(`no left child for node for node ${root.val}`)
  }

  if (root.right != null) {
    let rightBranch = robNavieveDFT(root.right.left) + robNavieveDFT(root.right.right);
    console.log(`result running my right branch ${rightBranch}`)
    val = val + rightBranch;
  } else {
    console.log(`no right child for node for node ${root.val}`)
  }

  return Math.max(val + root.val, robNavieveDFT(root.left) + robNavieveDFT(root.right));

};
// console.log(robNavieveDFT(n1));



var robDFTwithHashMap = function(root) {
  let map = new Map();
  let dft = (root, map) => {
    if (root == null) {
      console.log(`nothing to find here`);
      return 0;
    }

    let val = 0;

    if (map.has(root)) {
      console.log(`----->already calculated in map for ${root.val}`);
      return map.get(root);
    }

    console.log(`calling robNavieveDFT with ${root.val}`)
    if (root.left != null) {
      let leftBranch = dft(root.left.left, map) + dft(root.left.right, map);
      console.log(`result running my left branch ${leftBranch}`)
      val = val + leftBranch;
    } else {
      console.log(`no left child for node for node ${root.val}`)
    }

    if (root.right != null) {
      let rightBranch = dft(root.right.left, map) + dft(root.right.right, map);
      console.log(`result running my right branch ${rightBranch}`)
      val = val + rightBranch;
    } else {
      console.log(`no right child for node for node ${root.val}`)
    }

    val = Math.max(val + root.val, dft(root.left, map) + dft(root.right, map));
    map.set(root, val);
    return val;
  }

  return dft(root, map)
};

console.log(robDFTwithHashMap(n1));
