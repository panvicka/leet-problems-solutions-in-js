/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var treeNode = require('./utility.js');

const n1 = new treeNode.Node(1);
const n2 = new treeNode.Node(2);
const n3 = new treeNode.Node(3);
const n4 = new treeNode.Node(4);
const n5 = new treeNode.Node(5);
const n6 = new treeNode.Node(6);
const n7 = new treeNode.Node(7);

n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

n3.left = n6;
n3.right = n7;

console.log(n1);



var connect = function(root) {

  if (root == null) return [];

  let queue = [root, null];
  let result = [];

  while (queue.length > 0) {
    let current = queue.shift();

    // reached end of the level and also end of the tree, return
    if (current == null && queue.length == 0) {
      return root;
    // reached end of the level 
    } else if (current == null) {
      queue.push(null);
    } else {
      current.next = queue[0];
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return root;
};

console.log(connect(n1));