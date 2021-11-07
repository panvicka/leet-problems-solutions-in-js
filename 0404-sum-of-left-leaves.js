var treeNode = require('./utility.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0;

  // direction 0 - left
  // direction 1 - right
  function traverse(node, direction) {
    if (!node) {
      console.log(`node is null, return`);
      return;
    }


    console.log(`checking node:`)
    console.log(node)

    if (!node.left && !node.right) {
      console.log(`found leaf!`)
      if (direction == 0) {
        console.log(`found left leaf: ${node.val}, new sum is ${sum} + ${node.val} = ${sum + node.val}`);
        sum = sum + node.val;
      } else {
        console.log(`found right left, leave me alone`);
      }

    } else {
      console.log(`not yet at the end`)

    }
    traverse(node.left, 0);
    traverse(node.right, 1);
  }
  traverse(root);
  return sum;

};


const arr = [3, 9, 20, null, null, 15, 7];
let a;
a = treeNode.insertLevelOrder(arr, a, 0);

const n1 = new treeNode.Node(3);
const n2 = new treeNode.Node(9);
const n3 = new treeNode.Node(20);
const n4 = new treeNode.Node(15);
const n5 = new treeNode.Node(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;


console.log(sumOfLeftLeaves(n1));


const n6 = new treeNode.Node(1);
console.log(sumOfLeftLeaves(n6));
