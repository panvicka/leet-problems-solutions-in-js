1010. Pairs of Songs With Total Durations Divisible by 60/**
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

n9 = new TreeNode(13, undefined, undefined);
n8 = new TreeNode(7, undefined, undefined);
n7 = new TreeNode(4, undefined, undefined);
n6 = new TreeNode(14, n9, undefined);
n5 = new TreeNode(6, n7, n8);
n4 = new TreeNode(1, undefined, undefined);
n3 = new TreeNode(10, undefined, n6);
n2 = new TreeNode(3, n4, n5);
n1 = new TreeNode(8, n2, n3);


// bottom up
var maxAncestorDiff = function(root) {

  let res = 0;

  let dfs = (root) => {

    if (!root) {
      return [Infinity, -Infinity];
    }
    console.log(`calling with ${root.val}`)

    let minLeft, maxLeft, minRight, maxRight;
    [minLeft, maxLeft] = dfs(root.left);
    [minRight, maxRight] = dfs(root.right);


    let totalMin = Math.min(root.val, minLeft, minRight);
    let totalMax = Math.max(root.val, maxLeft, maxRight);

    console.log(`minLeft ${minLeft}, maxLeft ${maxLeft}, minRight ${minRight}, maxRight ${maxRight}, totalMin ${totalMin}, totalMax ${totalMax}`);

    res = Math.max(res, root.val - totalMin, totalMax - root.val);
    console.log(`new res ${res}`)

    return [totalMin, totalMax];
  }

  dfs(root);

  return res;


};


// console.log(maxAncestorDiff(n1));



// top down
var maxAncestorDiffTopDown = function(root) {

  let res = 0;

  let dfs = (root, min, max) => {

    if (!root) return;


    console.log(`running for ${root.val}, current min ${min}, current max ${max}`);

    let newMin = Math.min(min, root.val);
    let newMax = Math.max(max, root.val);
    console.log(`new min ${newMin}, new max ${newMax}`);
    res = Math.max(res, Math.abs(newMin - root.val), Math.abs(newMax - root.val));

    dfs(root.left, newMin, newMax);
    dfs(root.right, newMin, newMax);

  }

  dfs(root, root.val, root.val)

  return res;


};

console.log(maxAncestorDiffTopDown(n1));